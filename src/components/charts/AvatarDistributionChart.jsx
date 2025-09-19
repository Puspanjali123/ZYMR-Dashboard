import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function AvatarDistributionChart({ users }) {
  const withAvatar = users.filter((u) => u.avatar).length;
  const withoutAvatar = users.length - withAvatar;

  const data = [
    { name: "With Avatar", value: withAvatar },
    { name: "Without Avatar", value: withoutAvatar },
  ];

  const COLORS = ["#3b82f6", "#e5e7eb"];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Avatar Distribution</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" label outerRadius={80}>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AvatarDistributionChart;
