import { Box, Typography } from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventNoteIcon from "@mui/icons-material/EventNote";

import MainLayout from "../components/molecules/MainLayout";

import DashboardHeader from "../components/molecules/DashboardHeader";

import DashboardStatCard from "../components/atoms/DashboardStatCard";

import AttendanceChart from "../components/organisms/AttendanceChart";

import DepartmentChart from "../components/organisms/DepartmentChart";

import RecentEmployees from "../components/organisms/RecentEmployees";

import LeaveRequests from "../components/organisms/LeaveRequests";

import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <MainLayout>
      {/* Header */}

      <DashboardHeader />

      {/* Statistics */}

      <Box className="dashboard-section">
        <Typography variant="h6" className="section-main-title">
          Overview
        </Typography>

        <div className="row g-4">
          <div className="col-12 col-md-3">
            <DashboardStatCard
              title="Total Employees"
              value="25"
              subtitle="+3 this month"
              icon={<PeopleIcon />}
            />
          </div>

          <div className="col-12 col-md-3">
            <DashboardStatCard
              title="Departments"
              value="05"
              subtitle="Active departments"
              icon={<BusinessIcon />}
            />
          </div>

          <div className="col-12 col-md-3">
            <DashboardStatCard
              title="Present Today"
              value="22"
              subtitle="88% attendance"
              icon={<EventAvailableIcon />}
            />
          </div>

          <div className="col-12 col-md-3">
            <DashboardStatCard
              title="Pending Leaves"
              value="04"
              subtitle="Needs attention"
              icon={<EventNoteIcon />}
            />
          </div>
        </div>
      </Box>

      {/* Charts */}

      <Box className="dashboard-section">
        <Typography variant="h6" className="section-main-title">
          Analytics
        </Typography>

        <div className="row g-4">
          <div className="col-12 col-xl-8">
            <AttendanceChart />
          </div>

          <div className="col-12 col-xl-4">
            <DepartmentChart />
          </div>
        </div>
      </Box>

      {/* Employees + Leave */}

      <Box className="dashboard-section">
        <div className="row g-4">
          <div className="col-12 col-xl-8">
            <RecentEmployees />
          </div>

          <div className="col-12 col-xl-4">
            <LeaveRequests />
          </div>
        </div>
      </Box>
    </MainLayout>
  );
}
