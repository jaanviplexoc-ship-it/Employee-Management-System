import { Card, CardContent, Typography } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const departmentData = [
    {
        name: "IT",
        employees: 10
    },
    {
        name: "HR",
        employees: 5
    },
    {
        name: "Finance",
        employees: 4
    },
    {
        name: "Sales",
        employees: 6
    }
];

const COLORS = [
    "#7b4f79",
    "#8fb8c8",
    "#e5a96f",
    "#8bc6a4"
];

export default function DepartmentChart() {

    return (
        <Card className="dashboard-chart-card">
            <CardContent>
                <Typography
                    variant="h6"
                    className="chrat-title"
                >
                    Employees by department
                </Typography>

                <Typography className="chart-subtitle">
                    Current employee distribution
                </Typography>

                <div className="chart-container">
                    <ResponsiveContainer
                        width="100%"
                        height="100%">
                        <PieChart>
                            <Pie
                                data={departmentData}
                                dataKey="employees"
                                nameKey="name"
                                cx="50%"
                                cy="45%"
                                outerRadius={90}
                                label>

                                {departmentData.map(
                                    (entry, index) => (
                                        <Cell
                                            key={entry.name}
                                            fill={
                                                COLORS[
                                                index %
                                                COLORS.length
                                                ]
                                            }
                                        />
                                    )
                                )}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card >
    );
}