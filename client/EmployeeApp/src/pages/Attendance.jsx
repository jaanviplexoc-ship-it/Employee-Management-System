import { Card, Avatar, Checkbox } from "@mui/material";

import MainLayout from "../components/molecules/MainLayout";
import InputField from "../components/atoms/InputField";

import "../styles/attendance.css";

const attendanceData = [
    {
        id: "EMP-001",
        name: "John Miller",
        department: "Management",
        checkIn: "09:02 AM",
        checkOut: "06:01 PM",
        hours: "8h 59m",
        status: "Present"
    },
    {
        id: "EMP-002",
        name: "Olivia Harris",
        department: "Delivery",
        checkIn: "09:15 AM",
        checkOut: "06:00 PM",
        hours: "8h 45m",
        status: "Present"
    },
    {
        id: "EMP-003",
        name: "Michael Brown",
        department: "Inventory",
        checkIn: "-",
        checkOut: "-",
        hours: "-",
        status: "Absent"
    },
    {
        id: "EMP-004",
        name: "Emma Wilson",
        department: "Service Desk",
        checkIn: "09:35 AM",
        checkOut: "-",
        hours: "In Progress",
        status: "Late"
    },
    {
        id: "EMP-005",
        name: "Daniel Smith",
        department: "Billing",
        checkIn: "08:58 AM",
        checkOut: "05:58 PM",
        hours: "9h 00m",
        status: "Present"
    },
    {
        id: "EMP-006",
        name: "Sophia Johnson",
        department: "Store Floor",
        checkIn: "09:42 AM",
        checkOut: "-",
        hours: "In Progress",
        status: "Late"
    }
];

function AttendanceStatus({ status }) {
    return (
        <span className={`attendance-status ${status.toLowerCase()}`}>
            <span className="status-dot"></span>
            {status}
        </span>
    );
}

export default function Attendance() {
    return (
        <MainLayout>

            <div className="attendance-page">

                {/* HEADER */}

                <div className="attendance-header">

                    <div>
                        <h1>Attendance</h1>

                        <p>
                            Track employee attendance and working hours
                        </p>
                    </div>

                    <div className="attendance-header-actions">

                        <button className="secondary-button">
                            📅 Today
                        </button>

                        <button className="primary-button">
                            ↓ Export
                        </button>

                    </div>

                </div>


                {/* STAT CARDS */}

                <div className="attendance-stats">

                    <div className="attendance-stat-card">
                        <span>Total Employees</span>
                        <strong>400</strong>
                        <small>Registered employees</small>
                    </div>

                    <div className="attendance-stat-card present-card">
                        <span>Present Today</span>
                        <strong>350</strong>
                        <small>87.5% attendance</small>
                    </div>

                    <div className="attendance-stat-card absent-card">
                        <span>Absent Today</span>
                        <strong>30</strong>
                        <small>7.5% of employees</small>
                    </div>

                    <div className="attendance-stat-card late-card">
                        <span>Late Arrivals</span>
                        <strong>20</strong>
                        <small>5% of employees</small>
                    </div>

                </div>


                {/* ANALYTICS */}

                <div className="attendance-analytics">

                    {/* WEEKLY CHART */}

                    <Card className="attendance-chart-card">

                        <div className="section-heading">

                            <div>
                                <h3>Attendance Trend</h3>

                                <p>
                                    Weekly attendance percentage
                                </p>
                            </div>

                            <strong>91.8%</strong>

                        </div>


                        <div className="attendance-chart">

                            {[
                                ["Mon", 94],
                                ["Tue", 91],
                                ["Wed", 96],
                                ["Thu", 89],
                                ["Fri", 94],
                                ["Sat", 82]
                            ].map(([day, value]) => (

                                <div
                                    className="chart-column"
                                    key={day}
                                >

                                    <span>
                                        {value}%
                                    </span>

                                    <div className="chart-bar-bg">

                                        <div
                                            className="chart-bar"
                                            style={{
                                                height: `${value}%`
                                            }}
                                        />

                                    </div>

                                    <small>
                                        {day}
                                    </small>

                                </div>

                            ))}

                        </div>

                    </Card>


                    {/* SUMMARY */}

                    <Card className="attendance-summary-card">

                        <div className="section-heading">

                            <div>
                                <h3>Today's Summary</h3>

                                <p>
                                    Attendance breakdown
                                </p>
                            </div>

                        </div>


                        <div className="attendance-progress">

                            <div
                                className="attendance-progress-fill"
                                style={{
                                    width: "87.5%"
                                }}
                            />

                        </div>


                        <div className="summary-row">
                            <span>
                                <i className="dot present"></i>
                                Present
                            </span>

                            <strong>350</strong>
                        </div>

                        <div className="summary-row">
                            <span>
                                <i className="dot late"></i>
                                Late
                            </span>

                            <strong>20</strong>
                        </div>

                        <div className="summary-row">
                            <span>
                                <i className="dot absent"></i>
                                Absent
                            </span>

                            <strong>30</strong>
                        </div>

                    </Card>

                </div>


                {/* TABLE */}

                <Card className="attendance-table-card">

                    <div className="attendance-table-header">

                        <div>
                            <h3>Attendance List</h3>

                            <p>
                                Today's employee attendance
                            </p>
                        </div>


                        <div className="attendance-actions">

                            <div className="attendance-search">

                                <InputField
                                    label=""
                                    type="text"
                                    placeholder="Search employee"
                                />

                            </div>


                            <select className="department-filter">

                                <option>
                                    All Departments
                                </option>

                                <option>
                                    Management
                                </option>

                                <option>
                                    Delivery
                                </option>

                                <option>
                                    Inventory
                                </option>

                                <option>
                                    Billing
                                </option>

                            </select>


                            <button className="filter-button">
                                Filter
                            </button>

                        </div>

                    </div>


                    <div className="attendance-table-wrapper">

                        <table className="attendance-table">

                            <thead>

                                <tr>

                                    <th>
                                        <Checkbox size="small" />
                                    </th>

                                    <th>Employee</th>

                                    <th>Department</th>

                                    <th>Check In</th>

                                    <th>Check Out</th>

                                    <th>Working Hours</th>

                                    <th>Status</th>

                                    <th>Action</th>

                                </tr>

                            </thead>


                            <tbody>

                                {attendanceData.map(
                                    (employee) => (

                                        <tr key={employee.id}>

                                            <td>
                                                <Checkbox size="small" />
                                            </td>

                                            <td>

                                                <div className="attendance-employee">

                                                    <Avatar>
                                                        {employee.name.charAt(0)}
                                                    </Avatar>

                                                    <div>

                                                        <strong>
                                                            {employee.name}
                                                        </strong>

                                                        <small>
                                                            {employee.id}
                                                        </small>

                                                    </div>

                                                </div>

                                            </td>

                                            <td>
                                                {employee.department}
                                            </td>

                                            <td>
                                                {employee.checkIn}
                                            </td>

                                            <td>
                                                {employee.checkOut}
                                            </td>

                                            <td>
                                                {employee.hours}
                                            </td>

                                            <td>

                                                <AttendanceStatus
                                                    status={employee.status}
                                                />

                                            </td>

                                            <td>
                                                <button className="action-button">
                                                    ⋮
                                                </button>
                                            </td>

                                        </tr>

                                    )
                                )}

                            </tbody>

                        </table>

                    </div>

                </Card>

            </div>

        </MainLayout>
    );
}