import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { parseISO, format } from "date-fns";

function UsersPerDayChart({ users }) {
  const last30Days = Array.from({ length: 30 }).map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    return {
      date: date.toISOString().split("T")[0],
      count: 0,
    };
  });

  users.forEach((user) => {
    if (user.createdAt) {
      const date = user.createdAt.split("T")[0]; // safe now
      const day = last30Days.find((d) => d.date === date);
      if (day) day.count += 1;
    }
  });

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Users Created Per Day</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={last30Days}>
          <XAxis
            dataKey="date"
            tickFormatter={(str) => format(parseISO(str), "MM/dd")}
          />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#3b82f6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UsersPerDayChart;
