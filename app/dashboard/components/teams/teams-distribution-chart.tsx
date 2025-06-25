"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export default function TeamsDistributionChart() {
    const data = [
        {
            name: "Delta",
            value: 60,
            color: "#84cc16"    
        },
        {
            name: "Alpha",
            value: 30,
            color: "#f97316"
        },
        {
            name: "Beta",
            value: 10,
            color: "#0ea5e9"
        }
    ];

    return (
        <ResponsiveContainer width="100%" height={150}>
            <PieChart>
                <Tooltip />
                <Pie data={data} dataKey="value" nameKey="name">
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}