import { Drawer, List, Toolbar, Box, useMediaQuery } from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";

import SidebarItem from "../atoms/SidebarItem";
import LogoutButton from "../atoms/LogoutButton";

import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


export default function Sidebar({ mobileOpen, onClose }) {

  const isMobile = useMediaQuery("(max-width: 600px)");

  const navigate = useNavigate();

  const { logout } = useContext(AuthContext);

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (

    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={isMobile ? mobileOpen : true}
      onClose={onClose}
      className="dashboard-sidebar"
      ModalProps={{
        keepMounted: true
      }}
    >

      <Toolbar className="sidebar-logo">

        <Box>
          <div className="sidebar-logo-title">
            EMS
          </div>

          <div className="sidebar-logo-subtitle">
            Employee Management
          </div>
        </Box>

      </Toolbar>

      <List className="sidebar-list">

        <SidebarItem
          to="/dashboard"
          icon={<DashboardIcon />}
          text="Dashboard"
        />

        <SidebarItem
          to="/employees"
          icon={<PeopleIcon />}
          text="Employees"
        />

        <SidebarItem
          to="/attendance"
          icon={<AccessTimeOutlinedIcon />}
          text="Attendance"
        />

        <SidebarItem
          to="/leave"
          icon={<EventNoteOutlinedIcon />}
          text="Leave Manage"
        />

      </List>

      <Box className="sidebar-logout">

        <LogoutButton
          onClick={handleLogout}
        />

      </Box>

    </Drawer>
  );
}