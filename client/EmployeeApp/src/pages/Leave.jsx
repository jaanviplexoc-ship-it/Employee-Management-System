import { Card, Avatar, Checkbox } from "@mui/material";

import MainLayout from "../components/molecules/MainLayout";
import InputField from "../components/atoms/InputField";

import "../styles/leave.css";

const leaveData = [
    {
        id: "LV-001",
        employeeId: "EMP-001",
        name: "John Miller",
        department: "Management",
        type: "Casual Leave",
        from: "02 Oct 2026",
        to: "03 Oct 2026",
        days: 2,
        reason: "Personal work",
        status: "Approved",
    },
    {
        id: "LV-002",
        employeeId: "EMP-002",
        name: "Olivia Harris",
        department: "Delivery",
        type: "Sick Leave",
        from: "02 Oct 2026",
        to: "02 Oct 2026",
        days: 1,
        reason: "Not feeling well",
        status: "Pending",
    },
    {
        id: "LV-003",
        employeeId: "EMP-003",
        name: "Michael Brown",
        department: "Inventory",
        type: "Annual Leave",
        from: "05 Oct 2026",
        to: "08 Oct 2026",
        days: 4,
        reason: "Family vacation",
        status: "Approved",
    },
    {
        id: "LV-004",
        employeeId: "EMP-004",
        name: "Emma Wilson",
        department: "Service Desk",
        type: "Casual Leave",
        from: "06 Oct 2026",
        to: "07 Oct 2026",
        days: 2,
        reason: "Personal work",
        status: "Pending",
    },
    {
        id: "LV-005",
        employeeId: "EMP-005",
        name: "Daniel Smith",
        department: "Billing",
        type: "Sick Leave",
        from: "01 Oct 2026",
        to: "01 Oct 2026",
        days: 1,
        reason: "Medical appointment",
        status: "Rejected",
    },
    {
        id: "LV-006",
        employeeId: "EMP-006",
        name: "Sophia Johnson",
        department: "Store Floor",
        type: "Annual Leave",
        from: "10 Oct 2026",
        to: "14 Oct 2026",
        days: 5,
        reason: "Vacation",
        status: "Pending",
    },
];

function LeaveStatus({ status }) {
    return (
        <span className={`leave-status ${status.toLowerCase()}`}>
            <span className="leave-status-dot"></span>

            {status}
        </span>
    );
}

export default function Leave() {
    return (
        <MainLayout>
            <div className="leave-page">
                {/* =====================================
                    HEADER
                ===================================== */}

                <div className="leave-header">
                    <div>
                        <h1>Leave Management</h1>

                        <p>Manage employee leave requests and balances</p>
                    </div>

                    <div className="leave-header-actions">
                        <button className="secondary-button">📅 October 2026</button>

                        <button className="primary-button">+ Apply Leave</button>
                    </div>
                </div>

                {/* =====================================
                    STAT CARDS
                ===================================== */}

                <div className="leave-stats">
                    <div className="leave-stat-card">
                        <span>Total Requests</span>

                        <strong>48</strong>

                        <small>This month</small>
                    </div>

                    <div className="leave-stat-card pending">
                        <span>Pending</span>

                        <strong>12</strong>

                        <small>Awaiting approval</small>
                    </div>

                    <div className="leave-stat-card approved">
                        <span>Approved</span>

                        <strong>30</strong>

                        <small>This month</small>
                    </div>

                    <div className="leave-stat-card rejected">
                        <span>Rejected</span>

                        <strong>6</strong>

                        <small>This month</small>
                    </div>
                </div>

                {/* =====================================
                    LEAVE BALANCE
                ===================================== */}

                <div className="leave-overview">
                    <Card className="leave-balance-card">
                        <div className="leave-section-heading">
                            <div>
                                <h3>Leave Balance</h3>

                                <p>Current year leave allocation</p>
                            </div>

                            <span>2026</span>
                        </div>

                        <div className="leave-balance-list">
                            <div className="balance-item">
                                <div className="balance-info">
                                    <span className="balance-dot casual"></span>

                                    <div>
                                        <strong>Casual Leave</strong>

                                        <small>8 of 12 days used</small>
                                    </div>
                                </div>

                                <strong>4</strong>
                            </div>

                            <div className="balance-progress">
                                <div
                                    className="casual-progress"
                                    style={{
                                        width: "67%",
                                    }}
                                />
                            </div>

                            <div className="balance-item">
                                <div className="balance-info">
                                    <span className="balance-dot sick"></span>

                                    <div>
                                        <strong>Sick Leave</strong>

                                        <small>3 of 10 days used</small>
                                    </div>
                                </div>

                                <strong>7</strong>
                            </div>

                            <div className="balance-progress">
                                <div
                                    className="sick-progress"
                                    style={{
                                        width: "30%",
                                    }}
                                />
                            </div>

                            <div className="balance-item">
                                <div className="balance-info">
                                    <span className="balance-dot annual"></span>

                                    <div>
                                        <strong>Annual Leave</strong>

                                        <small>10 of 20 days used</small>
                                    </div>
                                </div>

                                <strong>10</strong>
                            </div>

                            <div className="balance-progress">
                                <div
                                    className="annual-progress"
                                    style={{
                                        width: "50%",
                                    }}
                                />
                            </div>
                        </div>
                    </Card>

                    {/* QUICK SUMMARY */}

                    <Card className="leave-summary-card">
                        <h3>Leave Overview</h3>

                        <p>Current month summary</p>

                        <div className="leave-circle">
                            <div>
                                <strong>48</strong>

                                <span>Requests</span>
                            </div>
                        </div>

                        <div className="leave-summary-row">
                            <span>
                                <i className="leave-dot approved"></i>
                                Approved
                            </span>

                            <strong>30</strong>
                        </div>

                        <div className="leave-summary-row">
                            <span>
                                <i className="leave-dot pending"></i>
                                Pending
                            </span>

                            <strong>12</strong>
                        </div>

                        <div className="leave-summary-row">
                            <span>
                                <i className="leave-dot rejected"></i>
                                Rejected
                            </span>

                            <strong>6</strong>
                        </div>
                    </Card>
                </div>

                {/* =====================================
                    REQUEST TABLE
                ===================================== */}

                <Card className="leave-table-card">
                    <div className="leave-table-header">
                        <div>
                            <h3>Leave Requests</h3>

                            <p>Employee leave applications</p>
                        </div>

                        <div className="leave-actions">
                            <div className="leave-search">
                                <InputField
                                    label=""
                                    type="text"
                                    placeholder="Search employee"
                                />
                            </div>

                            <select className="leave-select">
                                <option>All Leave Types</option>

                                <option>Casual Leave</option>

                                <option>Sick Leave</option>

                                <option>Annual Leave</option>
                            </select>

                            <select className="leave-select">
                                <option>All Status</option>

                                <option>Pending</option>

                                <option>Approved</option>

                                <option>Rejected</option>
                            </select>

                            <button className="filter-button">Filter</button>
                        </div>
                    </div>

                    {/* TABLE */}

                    <div className="leave-table-wrapper">
                        <table className="leave-table">
                            <thead>
                                <tr>
                                    <th>
                                        <Checkbox size="small" />
                                    </th>

                                    <th>Employee</th>

                                    <th>Leave Type</th>

                                    <th>Date</th>

                                    <th>Days</th>

                                    <th>Reason</th>

                                    <th>Status</th>

                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {leaveData.map((leave) => (
                                    <tr key={leave.id}>
                                        <td>
                                            <Checkbox size="small" />
                                        </td>

                                        <td>
                                            <div className="leave-employee">
                                                <Avatar>{leave.name.charAt(0)}</Avatar>

                                                <div>
                                                    <strong>{leave.name}</strong>

                                                    <small>{leave.employeeId}</small>
                                                </div>
                                            </div>
                                        </td>

                                        <td>{leave.type}</td>

                                        <td>
                                            <div className="leave-date">
                                                <strong>{leave.from}</strong>

                                                <span>to {leave.to}</span>
                                            </div>
                                        </td>

                                        <td>{leave.days} days</td>

                                        <td>
                                            <span className="leave-reason">{leave.reason}</span>
                                        </td>

                                        <td>
                                            <LeaveStatus status={leave.status} />
                                        </td>

                                        <td>
                                            <button className="action-button">⋮</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </MainLayout>
    );
}
