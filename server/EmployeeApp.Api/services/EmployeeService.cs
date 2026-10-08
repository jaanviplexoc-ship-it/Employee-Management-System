using EmployeeApp.Api.DTOs.Employee;
using EmployeeApp.Api.models;
using EmployeeApp.Api.repositories;
using EmployeeApp.Api.data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace EmployeeApp.Api.services;

public class EmployeeService : IEmployeeService
{
    private readonly IEmployeeRepository _repository;
    private readonly EmployeeDbContext _context;
    private readonly PasswordHasher<User> _passwordHasher;

    public EmployeeService(
        IEmployeeRepository repository,
        EmployeeDbContext context,
        PasswordHasher<User> passwordHasher)
    {
        _repository = repository;
        _context = context;
        _passwordHasher = passwordHasher;
    }

    public async Task<List<Employee>> GetAllAsync()
    {
        return await _repository.GetAllAsync();
    }

    public async Task<Employee?> GetByIdAsync(int id)
    {
        return await _repository.GetByIdAsync(id);
    }

    public async Task<Employee> CreateAsync(CreateEmployeeDto dto)
    {
        // 1. Check whether email already exists
        var emailExists =
            await _context.Users.AnyAsync(u => u.Email == dto.Email) ||
            await _context.Employees.AnyAsync(e => e.Email == dto.Email);

        if (emailExists)
        {
            throw new InvalidOperationException(
                "An employee or user with this email already exists."
            );
        }

        // 2. Start transaction
        await using var transaction =
            await _context.Database.BeginTransactionAsync();

        try
        {
            // 3. Generate Employee Code on backend
            var employeeCode =
                $"EMP-{Guid.NewGuid().ToString("N")[..8].ToUpperInvariant()}";

            // 4. Create Employee
            var employee = new Employee
            {
                EmployeeCode = employeeCode,
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                Email = dto.Email,
                Phone = dto.Phone,
                DateOfBirth = dto.DateOfBirth,
                Gender = dto.Gender,
                JoiningDate = dto.JoiningDate,
                Salary = dto.Salary,
                DepartmentId = dto.DepartmentId,
                DesignationId = dto.DesignationId,
                Address = dto.Address,
                City = dto.City,
                State = dto.State,
                Country = dto.Country,
                Pincode = dto.Pincode
            };

            _context.Employees.Add(employee);

            // Save Employee first because we need EmployeeId
            await _context.SaveChangesAsync();

            // 5. Create User account
            var user = new User
            {
                Email = employee.Email,
                EmployeeId = employee.EmployeeId,
                Role = "Employee"
            };

            // 6. Default password = employee phone
            var defaultPassword = employee.Phone;

            // 7. Hash password before storing
            user.PasswordHash =
                _passwordHasher.HashPassword(user, defaultPassword);

            _context.Users.Add(user);

            // 8. Save User
            await _context.SaveChangesAsync();

            // 9. Everything succeeded
            await transaction.CommitAsync();

            // Do NOT return user/password information
            employee.User = null;

            return employee;
        }
        catch
        {
            // Something failed → undo everything
            await transaction.RollbackAsync();

            throw;
        }
    }

    public async Task<bool> UpdateAsync(UpdateEmployeeDto dto)
    {
        var employee = new Employee
        {
            EmployeeId = dto.EmployeeId,
            EmployeeCode = dto.EmployeeCode,
            FirstName = dto.FirstName,
            LastName = dto.LastName,
            Email = dto.Email,
            Phone = dto.Phone,
            DateOfBirth = dto.DateOfBirth,
            Gender = dto.Gender,
            JoiningDate = dto.JoiningDate,
            Salary = dto.Salary,
            DepartmentId = dto.DepartmentId,
            DesignationId = dto.DesignationId,
            Status = dto.Status,
            Address = dto.Address,
            City = dto.City,
            State = dto.State,
            Country = dto.Country,
            Pincode = dto.Pincode
        };

        return await _repository.UpdateAsync(employee);
    }

    public async Task<bool> DeleteAsync(int id)
    {
        return await _repository.DeleteAsync(id);
    }
}