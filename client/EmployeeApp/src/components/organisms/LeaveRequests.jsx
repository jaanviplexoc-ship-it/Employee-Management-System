import {
    Card,
    CardContent,
    Typography,
    Box,
    Chip
} from "@mui/material";

const leaveRequests = [
    {
        name: "Neha Mehta",
        type: "Casual Leave",
        days: "2 Days",
        status: "Pending"
    },
    {
        name: "Ravi Patel",
        type: "Sick Leave",
        days: "1 Day",
        status: "Approved"
    },
    {
        name: "Pooja Shah",
        type: "Annual Leave",
        days: "3 Days",
        status: "Pending"
    }
];

export default function LeaveRequests() {

    return (
        <Card className="leave-card">

            <CardContent>

                <Box className="section-heading">

                    <Box>
                        <Typography variant="h6">
                            Leave Requests
                        </Typography>

                        <Typography className="section-subtitle">
                            Recent leave applications
                        </Typography>
                    </Box>

                    <Typography className="view-all">
                        View All
                    </Typography>

                </Box>

                <Box>

                    {leaveRequests.map((leave) => (

                        <Box
                            key={leave.name}
                            className="leave-request"
                        >

                            <Box>

                                <Typography className="leave-name">
                                    {leave.name}
                                </Typography>

                                <Typography className="leave-details">
                                    {leave.type} • {leave.days}
                                </Typography>

                            </Box>

                            <Chip
                                label={leave.status}
                                size="small"
                                className={
                                    leave.status === "Approved"
                                        ? "status-approved"
                                        : "status-pending"
                                }
                            />

                        </Box>

                    ))}

                </Box>

            </CardContent>

        </Card>
    );
}