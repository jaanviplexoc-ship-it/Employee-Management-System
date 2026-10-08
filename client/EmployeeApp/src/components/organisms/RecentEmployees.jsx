import {
    Card,
    CardContent,
    Typography,
    Avatar,
    Box,
    Chip,
} from "@mui/material";

const employees = [
    {
        name: "Rahul Sharma",
        department: "IT",
        designation: "Software Developer",
        status: "Active",
    },
    {
        name: "Priya Patel",
        department: "HR",
        designation: "HR Executive",
        status: "Active",
    },
    {
        name: "Amit Shah",
        department: "Finance",
        designation: "Accountant",
        status: "Active",
    },
    {
        name: "Neha Mehta",
        department: "IT",
        designation: "UI Developer",
        status: "On Leave",
    },
];

export default function RecentEmployees() {
    return (
        <Card className="dashboard-table-card">
            <CardContent>
                <Box className="section-heading">
                    <Box>
                        <Typography variant="h6">Recent Employees</Typography>

                        <Typography className="section-subtitle">
                            Recently added employees
                        </Typography>
                    </Box>

                    <Typography className="view-all">View All</Typography>
                </Box>

                <div className="table-responsive">
                    <table className="table dashboard-table">
                        <thead>
                            <tr>
                                <th>Employee</th>
                                <th>Department</th>
                                <th>Designation</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {employees.map((employee) => (
                                <tr key={employee.name}>
                                    <td>
                                        <Box className="employee-cell">
                                            <Avatar>{employee.name.charAt(0)}</Avatar>

                                            <span>{employee.name}</span>
                                        </Box>
                                    </td>

                                    <td>{employee.department}</td>

                                    <td>{employee.designation}</td>

                                    <td>
                                        <Chip
                                            label={employee.status}
                                            size="small"
                                            className={
                                                employee.status === "Active"
                                                    ? "status-active"
                                                    : "status-leave"
                                            }
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
}
