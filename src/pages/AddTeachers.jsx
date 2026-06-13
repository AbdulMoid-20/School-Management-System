import { useState } from "react";

import {
    Box,
    Paper,
    Grid,
    Typography,
    TextField,
    Button,
    Stack,
} from "@mui/material";

import SaveIcon from "@mui/icons-material/Save";

export default function AddTeacher() {
    const [teacher, setTeacher] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        qualification: "",
        salary: "",
        address: "",
    });

    const handleChange = (e) => {
        setTeacher({
            ...teacher,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(teacher);
    };

    return (
        <Box>
            <Typography
                variant="h4"
                fontWeight={700}
                mb={3}
            >
                Add Teacher
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
                                label="Teacher Name"
                                name="name"
                                value={teacher.name}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                value={teacher.email}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                value={teacher.phone}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Subject"
                                name="subject"
                                value={teacher.subject}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Qualification"
                                name="qualification"
                                value={teacher.qualification}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                type="number"
                                label="Salary"
                                name="salary"
                                value={teacher.salary}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                label="Address"
                                name="address"
                                value={teacher.address}
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
                                        bgcolor: "#7C3AED",
                                        px: 4,
                                    }}
                                >
                                    Save Teacher
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Box>
    );
}