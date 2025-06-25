"use client"

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function SupportTicketsResolved() {
    const data = [
        {
            name: "Jan",
            delta: 12,
            alpha: 52,
            canary: 30
        },
        {
            name: "Feb",
            delta: 30,
            alpha: 10,
            canary: 14,
        },
        {
            name: "Mar",
            delta: 20,
            alpha: 10,
            canary: 14,
        },
        {
            name: "Apr",
            delta: 15,
            alpha: 38,
            canary: 44,
        },
        {
            name: "May",
            delta: 35,
            alpha: 60,
            canary: 14,
        },
        {
            name: "Jun",
            delta: 40,
            alpha: 28,
            canary: 53,
        }
    ]
    return (
        <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
                <XAxis fontSize={12} dataKey="name" />
                <YAxis fontSize={12} stroke="#e2e8f0" />
                <Tooltip />
                <CartesianGrid strokeDasharray="3" vertical={false} />
                <Line type="monotone" dataKey="delta" stroke="#84cc16" />
                <Line type="monotone" dataKey="alpha" stroke="#f97316" />
                <Line type="monotone" dataKey="canary" stroke="#0ea5e9" />
                <Legend formatter={(value) => <span className="capitalize">{value}</span>} />
            </LineChart>
        </ResponsiveContainer>
    )
}