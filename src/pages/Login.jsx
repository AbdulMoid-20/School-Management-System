import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SchoolIcon from "@mui/icons-material/School";

export default function Login() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#7C3AED 0%,#4F46E5 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 460,
          p: 5,
          borderRadius: 6,
          backdropFilter: "blur(20px)",
          background:
            "rgba(255,255,255,0.9)",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            mb: 4,
          }}
        >
          <SchoolIcon
            sx={{
              fontSize: 70,
              color: "#7C3AED",
            }}
          />

          <Typography
            variant="h4"
            fontWeight={700}
            mt={1}
          >
            Welcome Back
          </Typography>

          <Typography
            color="text.secondary"
          >
            Sign in to continue
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            margin="normal"
            value={form.email}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            margin="normal"
            value={form.password}
            onChange={handleChange}
            type={
              showPassword
                ? "text"
                : "password"
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),

              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                  >
                    {showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              py: 1.4,
              bgcolor: "#7C3AED",

              "&:hover": {
                bgcolor: "#6D28D9",
              },
            }}
          >
            Sign In
          </Button>
        </form>

        <Divider sx={{ my: 3 }} />

        <Typography
          align="center"
          color="text.secondary"
        >
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#7C3AED",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Register
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}