"use client"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'

const data = [
    {
      name: 'Jan',
      office: 4000,
      wfh: 2400,
    },
    {
      name: 'Feb',
      office: 3000,
      wfh: 1398,
    },
    {
      name: 'Mar',
      office: 2000,
      wfh: 9800,
    },
    {
      name: 'Apr',
      office: 2780,
      wfh: 3908,
    },
    {
      name: 'May',
      office: 1890,
      wfh: 4800,
    },
    {
      name: 'Jun',
      office: 3490,
      wfh: 4300,
    },
  ];

export default function WorkLocationTrends() {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip />
                <Bar dataKey="office" stackId={1} fill="#ec4899" />
                <Bar dataKey="wfh" stackId={1} fill="#6b7280" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    )
}