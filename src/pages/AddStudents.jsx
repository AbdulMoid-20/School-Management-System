import { useState } from "react";

import {
    Box,
    Paper,
    Grid,
    Typography,
    TextField,
    MenuItem,
    Button,
    Stack,
} from "@mui/material";

import SaveIcon from "@mui/icons-material/Save";

export default function AddStudent() {
    const [student, setStudent] = useState({
        name: "",
        email: "",
        phone: "",
        rollNo: "",
        class: "",
        address: "",
    });

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(student);
    };

    return (
        <Box>
            <Typography
                variant="h4"
                fontWeight={700}
                mb={3}
            >
                Add Student
            </Typography>

            <Paper
                sx={{
                    p: 4,
                    borderRadius: 4,
                }}
            >
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Student Name"
                                name="name"
                                value={student.name}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                value={student.email}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                value={student.phone}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Roll Number"
                                name="rollNo"
                                value={student.rollNo}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                select
                                fullWidth
                                label="Class"
                                name="class"
                                value={student.class}
                                onChange={handleChange}
                            >
                                <MenuItem value="6th">
                                    6th
                                </MenuItem>

                                <MenuItem value="7th">
                                    7th
                                </MenuItem>

                                <MenuItem value="8th">
                                    8th
                                </MenuItem>

                                <MenuItem value="9th">
                                    9th
                                </MenuItem>

                                <MenuItem value="10th">
                                    10th
                                </MenuItem>
                            </TextField>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                label="Address"
                                name="address"
                                value={student.address}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Stack
                                direction="row"
                                justifyContent="flex-end"
                            >
                                <Button
                                    type="submit"
                                    variant="contained"
                                    startIcon={<SaveIcon />}
                                    sx={{
                                        px: 4,
                                        bgcolor: "#7C3AED",
                                    }}
                                >
                                    Save Student
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Box>
    );
}