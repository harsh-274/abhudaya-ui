"use client"

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts"

const data = [
  { month: "Jan", actual: 3000, forecast: 5500 },
  { month: "Feb", actual: 2500, forecast: 3000 },
  { month: "Mar", actual: 1500, forecast: 2000 },
  { month: "Apr", actual: 2000, forecast: 2500 },
  { month: "May", actual: 1500, forecast: 2000 },
  { month: "Jun", actual: 4000, forecast: 4500 },
  { month: "Jul", actual: 4500, forecast: 5000 },
  { month: "Aug", actual: 3500, forecast: 4000 },
  { month: "Sep", actual: 3000, forecast: 3500 },
  { month: "Oct", actual: 2000, forecast: 2500 },
  { month: "Nov", actual: 4500, forecast: 5000 },
  { month: "Dec", actual: 3500, forecast: 4000 },
]

export function MonthlyChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="actual" name="Actual Income" fill="hsl(var(--primary))" />
        <Bar dataKey="forecast" name="Forecasted Income" fill="hsl(var(--primary)/0.3)" />
      </BarChart>
    </ResponsiveContainer>
  )
}

