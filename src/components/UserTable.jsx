import React from "react";

function UserTable({ users, onEdit }) {
  return (
    <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden text-center">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-3 font-semibold">Avatar</th>
          <th className="p-3 font-semibold">Name</th>
          <th className="p-3 font-semibold">Email</th>
          <th className="p-3 font-semibold">Created At</th>
          <th className="p-3 font-semibold">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u, idx) => (
          <tr
            key={u.id}
            className={`transition duration-200 ${
              idx % 2 === 0 ? "bg-gray-50" : "bg-white"
            } hover:bg-blue-50`}
          >
            <td className=" p-3 text">
              <img
                src={u.avatar || "https://via.placeholder.com/40"}
                alt={u.name}
                className="w-10 h-10 rounded-full border-2 border-gray-200 shadow-sm mx-auto"
              />
            </td>
            <td className=" p-3 font-medium text-gray-700">{u.name}</td>
            <td className=" p-3">{u.email}</td>
            <td className=" p-3">
              {new Date(u.createdAt).toLocaleDateString()}
            </td>
            <td className=" p-3 text-center">
              <button
                onClick={() => onEdit(u)}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
