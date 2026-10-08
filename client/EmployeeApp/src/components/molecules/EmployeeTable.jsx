import {
    Avatar,
    Checkbox,
    IconButton
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import StatusBadge from "../atoms/StatusBadge";

const employees = [
    {
        id: "EMP-001",
        name: "John Miller",
        role: "Store Manager",
        department: "Management",
        contact: "+1 202-555-0122",
        status: "Active",
        joinDate: "01-Jan-2025"
    },
    {
        id: "EMP-002",
        name: "Olivia Harris",
        role: "Delivery Staff",
        department: "Delivery",
        contact: "+1 202-555-0122",
        status: "Active",
        joinDate: "03-Jan-2025"
    },
    {
        id: "EMP-003",
        name: "Michael Brown",
        role: "Store Keeper",
        department: "Inventory",
        contact: "+1 202-555-0144",
        status: "Active",
        joinDate: "05-Jan-2025"
    },
    {
        id: "EMP-004",
        name: "Emma Wilson",
        role: "Delivery Staff",
        department: "Service Desk",
        contact: "+1 202-555-0155",
        status: "Active",
        joinDate: "06-Jan-2025"
    },
    {
        id: "EMP-005",
        name: "Daniel Smith",
        role: "Stock Manager",
        department: "Service Desk",
        contact: "+1 202-555-0166",
        status: "Active",
        joinDate: "07-Jan-2025"
    },
    {
        id: "EMP-006",
        name: "Sophia Johnson",
        role: "Supervisor",
        department: "Store Floor",
        contact: "+1 202-555-0177",
        status: "Active",
        joinDate: "08-Jan-2025"
    },
    {
        id: "EMP-007",
        name: "James Anderson",
        role: "Store Manager",
        department: "Management",
        contact: "+1 202-555-0110",
        status: "Inactive",
        joinDate: "09-Jan-2025"
    },
    {
        id: "EMP-008",
        name: "Emily Davis",
        role: "Delivery Staff",
        department: "Delivery",
        contact: "+1 202-555-0884",
        status: "Active",
        joinDate: "12-Jan-2025"
    },
    {
        id: "EMP-009",
        name: "William Thomas",
        role: "Store Keeper",
        department: "Billing",
        contact: "+1 202-555-0125",
        status: "Active",
        joinDate: "15-Jan-2025"
    }
];

export default function EmployeeTable() {

    return (
        <div className="employee-table-wrapper">

            <table className="employee-table">

                <thead>

                    <tr>

                        <th className="checkbox-column">
                            <Checkbox size="small" />
                        </th>

                        <th>ID</th>

                        <th>Name</th>

                        <th>Role</th>

                        <th>Department</th>

                        <th>Contact</th>

                        <th>Status</th>

                        <th>Join Date</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {employees.map((employee) => (

                        <tr key={employee.id}>

                            <td>
                                <Checkbox size="small" />
                            </td>

                            <td>
                                {employee.id}
                            </td>

                            <td>

                                <div className="employee-name-cell">

                                    <Avatar>
                                        {employee.name.charAt(0)}
                                    </Avatar>

                                    <span>
                                        {employee.name}
                                    </span>

                                </div>

                            </td>

                            <td>
                                {employee.role}
                            </td>

                            <td>
                                {employee.department}
                            </td>

                            <td>
                                {employee.contact}
                            </td>

                            <td>
                                <StatusBadge
                                    status={employee.status}
                                />
                            </td>

                            <td>
                                {employee.joinDate}
                            </td>

                            <td>

                                <IconButton size="small">
                                    <MoreVertIcon fontSize="small" />
                                </IconButton>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}