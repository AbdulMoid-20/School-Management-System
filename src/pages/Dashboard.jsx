import {
    Grid,
    Paper,
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import BadgeIcon from "@mui/icons-material/Badge";
import PaymentsIcon from "@mui/icons-material/Payments";

import StatCard from "../components/StatCard";

export default function Dashboard() {
    const students = 1250;
    const teachers = 75;
    const staff = 35;
    const fees = "$12,450";

    return (
        <Box>
            <Typography
                variant="h4"
                fontWeight={700}
                mb={4}
            >
                Dashboard
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={3}>
                    <StatCard
                        title="Students"
                        value={students}
                        icon={
                            <SchoolIcon
                                sx={{
                                    fontSize: 45,
                                    color: "#7C3AED",
                                }}
                            />
                        }
                    />
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <StatCard
                        title="Teachers"
                        value={teachers}
                        icon={
                            <GroupsIcon
                                sx={{
                                    fontSize: 45,
                                    color: "#7C3AED",
                                }}
                            />
                        }
                    />
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <StatCard
                        title="Staff"
                        value={staff}
                        icon={
                            <BadgeIcon
                                sx={{
                                    fontSize: 45,
                                    color: "#7C3AED",
                                }}
                            />
                        }
                    />
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <StatCard
                        title="Fee Collection"
                        value={fees}
                        icon={
                            <PaymentsIcon
                                sx={{
                                    fontSize: 45,
                                    color: "#7C3AED",
                                }}
                            />
                        }
                    />
                </Grid>
            </Grid>

            <Grid
                container
                spacing={3}
                mt={1}
            >
                <Grid item xs={12} lg={8}>
                    <Paper
                        sx={{
                            p: 3,
                            borderRadius: 4,
                        }}
                    >
                        <Typography
                            variant="h6"
                            fontWeight={600}
                            mb={2}
                        >
                            Recent Students
                        </Typography>

                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            Name
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
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            Ali Khan
                                        </TableCell>
                                        <TableCell>
                                            10th
                                        </TableCell>
                                        <TableCell>
                                            101
                                        </TableCell>
                                        <TableCell>
                                            Active
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>
                                            Ahmed Raza
                                        </TableCell>
                                        <TableCell>
                                            9th
                                        </TableCell>
                                        <TableCell>
                                            112
                                        </TableCell>
                                        <TableCell>
                                            Active
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>
                                            Sara Noor
                                        </TableCell>
                                        <TableCell>
                                            8th
                                        </TableCell>
                                        <TableCell>
                                            119
                                        </TableCell>
                                        <TableCell>
                                            Active
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>

                <Grid item xs={12} lg={4}>
                    <Paper
                        sx={{
                            p: 3,
                            borderRadius: 4,
                            height: "100%",
                        }}
                    >
                        <Typography
                            variant="h6"
                            fontWeight={600}
                            mb={3}
                        >
                            Quick Overview
                        </Typography>

                        <Box mb={3}>
                            <Typography>
                                Student Attendance
                            </Typography>

                            <Typography
                                variant="h4"
                                fontWeight={700}
                                color="primary"
                            >
                                92%
                            </Typography>
                        </Box>

                        <Box mb={3}>
                            <Typography>
                                Fee Collection
                            </Typography>

                            <Typography
                                variant="h4"
                                fontWeight={700}
                                color="success.main"
                            >
                                85%
                            </Typography>
                        </Box>

                        <Box>
                            <Typography>
                                Teacher Attendance
                            </Typography>

                            <Typography
                                variant="h4"
                                fontWeight={700}
                                color="warning.main"
                            >
                                95%
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}