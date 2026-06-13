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
    Chip,
    Stack,
    Button,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function StudentsList() {
    const [search, setSearch] = useState("");

    const students = [
        {
            id: 1,
            name: "Ali Khan",
            class: "10th",
            rollNo: "101",
            status: "Active",
        },
        {
            id: 2,
            name: "Ahmed Raza",
            class: "9th",
            rollNo: "102",
            status: "Active",
        },
        {
            id: 3,
            name: "Sara Noor",
            class: "8th",
            rollNo: "103",
            status: "Inactive",
        },
    ];

    const filteredStudents = students.filter(
        (student) =>
            student.name
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
                alignItems={{
                    xs: "stretch",
                    sm: "center",
                }}
                spacing={2}
                mb={3}
            >
                <Typography
                    variant="h4"
                    fontWeight={700}
                >
                    Students List
                </Typography>

                <Button
                    variant="contained"
                    startIcon={<PersonAddIcon />}
                    sx={{
                        bgcolor: "#7C3AED",
                    }}
                >
                    Add Student
                </Button>
            </Stack>

            <Paper
                sx={{
                    p: 3,
                    borderRadius: 4,
                    mb: 3,
                }}
            >
                <TextField
                    fullWidth
                    placeholder="Search student..."
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
                                    Student Name
                                </TableCell>
                                <TableCell>
                                    Class
                                </TableCell>
                                <TableCell>
                                    Roll No
                                </TableCell>
                                <TableCell>
                                    Status
                                </TableCell>
                                <TableCell align="center">
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {filteredStudents.map(
                                (student) => (
                                    <TableRow key={student.id}>
                                        <TableCell>
                                            {student.name}
                                        </TableCell>

                                        <TableCell>
                                            {student.class}
                                        </TableCell>

                                        <TableCell>
                                            {student.rollNo}
                                        </TableCell>

                                        <TableCell>
                                            <Chip
                                                label={
                                                    student.status
                                                }
                                                color={
                                                    student.status ===
                                                        "Active"
                                                        ? "success"
                                                        : "error"
                                                }
                                                size="small"
                                            />
                                        </TableCell>

                                        <TableCell align="center">
                                            <IconButton
                                                color="primary"
                                            >
                                                <EditIcon />
                                            </IconButton>

                                            <IconButton
                                                color="error"
                                            >
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