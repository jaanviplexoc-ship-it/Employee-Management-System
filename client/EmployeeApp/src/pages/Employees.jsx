import { Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import MainLayout from "../components/molecules/MainLayout";
import DashboardStatCard from "../components/atoms/DashboardStatCard";
import EmployeeTable from "../components/molecules/EmployeeTable";
import "../styles/employees.css";

export default function Employees() {
    const navigate = useNavigate();
    return (
        <MainLayout>
            <div className="employees-page">
                {/* =========================
                    PAGE HEADER
                ========================= */}

                <div className="employees-header">
                    <div>
                        <Typography className="employees-title">Employees</Typography>

                        <Typography className="employees-subtitle">
                            Manage and view all employees
                        </Typography>
                    </div>

                    <Button
                        variant="contained"
                        startIcon={<PersonAddOutlinedIcon />}
                        className="add-employee-button"
                        onClick={() => navigate("/register")}
                    >
                        Add Employee
                    </Button>
                </div>

                {/* =========================
                    STAT CARDS
                ========================= */}

                <div className="row g-3 employees-stats">
                    <div className="col-12 col-md-6 col-xl-3">
                        <DashboardStatCard
                            title="Total Employees"
                            value="400"
                            subtitle="+2% Compared to last month"
                            icon={<PeopleOutlinedIcon />}
                        />
                    </div>

                    <div className="col-12 col-md-6 col-xl-3">
                        <DashboardStatCard
                            title="Active Employees"
                            value="320"
                            subtitle="+5% Compared to last month"
                            icon={<EventAvailableOutlinedIcon />}
                        />
                    </div>

                    <div className="col-12 col-md-6 col-xl-3">
                        <DashboardStatCard
                            title="On Leave"
                            value="50"
                            subtitle="+7% Compared to last month"
                            icon={<PersonAddOutlinedIcon />}
                        />
                    </div>

                    <div className="col-12 col-md-6 col-xl-3">
                        <DashboardStatCard
                            title="Inactive Employee"
                            value="30"
                            subtitle="-2% Compared to last month"
                            icon={<PersonOffOutlinedIcon />}
                        />
                    </div>
                </div>

                {/* =========================
                    EMPLOYEE TABLE CARD
                ========================= */}

                <Card className="employees-table-card">
                    {/* Table Header */}

                    <div className="employee-table-header">
                        <Typography className="employee-table-title">
                            Employee List (Total 400)
                        </Typography>

                        <div className="employee-table-actions">
                            {/* Search */}

                            <div className="employee-search">
                                <SearchIcon />

                                <input type="text" placeholder="Search Employee here" />
                            </div>

                            {/* Filter */}

                            <Button
                                variant="outlined"
                                startIcon={<FilterListIcon />}
                                className="filter-button"
                            >
                                Filter
                            </Button>

                            {/* Add */}

                            <Button
                                variant="contained"
                                startIcon={<PersonAddOutlinedIcon />}
                                className="table-add-button"
                            >
                                Add Employee
                            </Button>
                        </div>
                    </div>

                    {/* Table */}

                    <EmployeeTable />
                </Card>
            </div>
        </MainLayout>
    );
}
