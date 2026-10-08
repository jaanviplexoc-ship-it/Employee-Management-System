import { Avatar, Box, Typography } from "@mui/material";

export default function DashboardHeader() {

    const role = localStorage.getItem("role");

    return (
        <Box className='dashboard-header'>

            <Box>
                <Typography
                    variant="h4"
                    className="dashboard-title">
                    Dashboard
                </Typography>

                <Typography className="dashboard-subtitle">
                    Welocome back! Here's what's happening today.
                </Typography>
            </Box>

            <Box className="dashboard-user">
                <Box className='dashboard-user-info'>
                    <Typography className="dashboard-user-name">
                        Admin
                    </Typography>

                    <Typography className="dashboard-user-role">
                        {role || "Administrator"}
                    </Typography>
                </Box>

                <Avatar className="dashboard-avatar">
                    A
                </Avatar>
            </Box>

        </Box>
    );
}