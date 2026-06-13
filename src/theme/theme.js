// src/theme/theme.js

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#7C3AED",
        },
        secondary: {
            main: "#F59E0B",
        },
        background: {
            default: "#F5F3FF",
            paper: "rgba(255,255,255,0.8)",
        },
    },

    shape: {
        borderRadius: 16,
    },

    typography: {
        fontFamily: "'Inter', sans-serif",
    },

    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(124,58,237,0.15)",
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 999,
                    fontWeight: 600,
                },
            },
        },
    },
});

export default theme;