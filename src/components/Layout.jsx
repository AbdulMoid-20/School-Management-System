"use client";

import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import {
    Box,
    Drawer,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Divider,
    useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import BadgeIcon from "@mui/icons-material/Badge";

const drawerWidth = 280;

const menuItems = [
    {
        text: "Dashboard",
        path: "/",
        icon: <DashboardIcon />,
    },
    {
        text: "Students",
        path: "/students",
        icon: <SchoolIcon />,
    },
    {
        text: "Add Student",
        path: "/add-student",
        icon: <PersonAddIcon />,
    },
    {
        text: "Teachers",
        path: "/teachers",
        icon: <GroupsIcon />,
    },
    {
        text: "Add Teacher",
        path: "/add-teacher",
        icon: <BadgeIcon />,
    },
];

export default function Layout() {
    const theme = useTheme();
    const location = useLocation();

    const mobile = useMediaQuery(theme.breakpoints.down("md"));

    const [open, setOpen] = useState(false);

    const drawer = (
        <Box
            sx={{
                height: "100%",
                bgcolor: "#ffffff",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    p: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                <Avatar
                    sx={{
                        bgcolor: "#7C3AED",
                        width: 48,
                        height: 48,
                    }}
                >
                    SM
                </Avatar>

                <Box>
                    <Typography fontWeight={700}>
                        School Management
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        Admin Panel
                    </Typography>
                </Box>
            </Box>

            <Divider />

            <List sx={{ px: 2, py: 2 }}>
                {menuItems.map((item) => (
                    <ListItemButton
                        key={item.text}
                        component={Link}
                        to={item.path}
                        selected={location.pathname === item.path}
                        sx={{
                            mb: 1,
                            borderRadius: 3,

                            "&.Mui-selected": {
                                bgcolor: "#7C3AED",
                                color: "#fff",

                                "& .MuiListItemIcon-root": {
                                    color: "#fff",
                                },
                            },
                        }}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>

                        <ListItemText primary={item.text} />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );

    return (
        <Box
            sx={{
                display: "flex",
                minHeight: "100vh",
                bgcolor: "#F5F3FF",
            }}
        >
            {/* Mobile Drawer */}
            {mobile ? (
                <Drawer
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    {drawer}
                </Drawer>
            ) : (
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,

                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            borderRight:
                                "1px solid rgba(124,58,237,0.1)",
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            )}

            <Box
                sx={{
                    flexGrow: 1,
                }}
            >
                <AppBar
                    elevation={0}
                    position="sticky"
                    sx={{
                        bgcolor: "rgba(255,255,255,0.7)",
                        backdropFilter: "blur(20px)",
                        borderBottom:
                            "1px solid rgba(124,58,237,0.1)",
                        color: "#111",
                    }}
                >
                    <Toolbar>
                        {mobile && (
                            <IconButton
                                onClick={() => setOpen(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}

                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                flexGrow: 1,
                            }}
                        >
                            School Management System
                        </Typography>

                        <Avatar
                            sx={{
                                bgcolor: "#7C3AED",
                            }}
                        >
                            A
                        </Avatar>
                    </Toolbar>
                </AppBar>

                <Box
                    sx={{
                        p: {
                            xs: 2,
                            md: 4,
                        },
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}