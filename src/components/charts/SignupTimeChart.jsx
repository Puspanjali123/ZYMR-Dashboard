import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function SignupTimeChart({ users }) {
  const hours = Array.from({ length: 24 }).map((_, i) => ({
    hour: i,
    count: 0,
  }));

  users.forEach((user) => {
    const hour = new Date(user.createdAt).getHours();
    hours[hour].count += 1;
  });

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-3">Signup Time Distribution</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={hours}>
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SignupTimeChart;
