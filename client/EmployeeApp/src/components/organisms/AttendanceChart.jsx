import { Card, CardContent, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const attendanceData = [
    {
        day: "Mon",
        present: 21,
        absent: 3
    },

    {
        day: "Tue",
        present: 23,
        absent: 1
    },

    {
        day: "Wed",
        present: 20,
        absent: 4
    },

    {
        day: "Thu",
        present: 22,
        absent: 2
    },

    {
        day: "Fri",
        present: 24,
        absent: 0
    },
]

export default function AttendanceChart() {

    return (
        <Card>
            <CardContent>
                <Typography
                    variant="h6"
                    className="chart-title">
                    Attendance Overview
                </Typography>

                <Typography className="chart-subtitle">
                    Employee attendance for this week.
                </Typography>

                <div className="chart-container">
                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >
                        <LineChart
                            data={attendanceData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />

                            <Tooltip />

                            <Line
                                type="monotone"
                                dataKey="present"
                                stroke="#7b4f79"
                                strokeWidth={3}
                                dot={{ r: 4 }}
                            />

                            <Line
                                type="monotone"
                                dataKey="absent"
                                stroke="#e57373"
                                strokeWidth={2}
                                dot={{ r: 4 }}
                            />
                        </LineChart>

                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card >
    )
}