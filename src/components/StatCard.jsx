import {
    Card,
    CardContent,
    Typography,
    Box,
} from "@mui/material";

export default function StatCard({
    title,
    value,
    icon,
}) {
    return (
        <Card
            sx={{
                height: "100%",
                borderRadius: 4,
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent:
                            "space-between",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <Typography
                            color="text.secondary"
                        >
                            {title}
                        </Typography>

                        <Typography
                            variant="h4"
                            fontWeight={700}
                        >
                            {value}
                        </Typography>
                    </Box>

                    {icon}
                </Box>
            </CardContent>
        </Card>
    );
}