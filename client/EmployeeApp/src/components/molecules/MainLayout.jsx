import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

import Sidebar from "../organisms/Sidebar";

export default function MainLayout({ children }) {

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerOpen = () => {
        setMobileOpen(true);
    };

    const handleDrawerClose = () => {
        setMobileOpen(false);
    };

    return (
        <Box className="main-layout">

            {/* Mobile Menu Button */}
            {!mobileOpen && (
                <IconButton
                    className="mobile-menu-button"
                    onClick={handleDrawerOpen}
                    aria-label="open sidebar"
                >
                    <MenuIcon />
                </IconButton>
            )}

            <Sidebar
                mobileOpen={mobileOpen}
                onClose={handleDrawerClose}
            />

            <Box
                component="main"
                className="main-content"
            >
                {children}
            </Box>

        </Box>
    );
}