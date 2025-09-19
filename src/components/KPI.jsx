import React from "react";

function KPI({ title, value }) {
  return (
    <div className="bg-blue-500 text-white rounded-lg p-6 shadow-md text-center">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}

export default KPI;
