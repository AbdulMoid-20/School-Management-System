import { useState } from "react";

import {
    Box,
    Paper,
    Typography,
    TextField,
    InputAdornment,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    Stack,
    Button,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function TeachersList() {
    const [search, setSearch] = useState("");

    const teachers = [
        {
            id: 1,
            name: "Muhammad Ahmed",
            subject: "Mathematics",
            phone: "03001234567",
        },
        {
            id: 2,
            name: "Ayesha Khan",
            subject: "Physics",
            phone: "03111234567",
        },
        {
            id: 3,
            name: "Ali Raza",
            subject: "Computer Science",
            phone: "03211234567",
        },
    ];

    const filteredTeachers =
        teachers.filter((teacher) =>
            teacher.name
                .toLowerCase()
                .includes(search.toLowerCase())
        );

    return (
        <Box>
            <Stack
                direction={{
                    xs: "column",
                    sm: "row",
                }}
                justifyContent="space-between"
                spacing={2}
                mb={3}
            >
                <Typography
                    variant="h4"
                    fontWeight={700}
                >
                    Teachers List
                </Typography>

                <Button
                    variant="contained"
                    startIcon={<PersonAddIcon />}
                    sx={{
                        bgcolor: "#7C3AED",
                    }}
                >
                    Add Teacher
                </Button>
            </Stack>

            <Paper
                sx={{
                    p: 3,
                    mb: 3,
                    borderRadius: 4,
                }}
            >
                <TextField
                    fullWidth
                    placeholder="Search teacher..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Paper>

            <Paper
                sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                }}
            >
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Name
                                </TableCell>
                                <TableCell>
                                    Subject
                                </TableCell>
                                <TableCell>
                                    Phone
                                </TableCell>
                                <TableCell align="center">
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {filteredTeachers.map(
                                (teacher) => (
                                    <TableRow key={teacher.id}>
                                        <TableCell>
                                            {teacher.name}
                                        </TableCell>

                                        <TableCell>
                                            {teacher.subject}
                                        </TableCell>

                                        <TableCell>
                                            {teacher.phone}
                                        </TableCell>

                                        <TableCell align="center">
                                            <IconButton color="primary">
                                                <EditIcon />
                                            </IconButton>

                                            <IconButton color="error">
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}