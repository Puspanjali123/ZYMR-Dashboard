import React from "react";

function RecentlyJoined({ users }) {
  const sorted = [...users].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const recent = sorted.slice(0, 5);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md ">
      <h3 className="text-lg  mb-4 font-medium">Recently Joined Users</h3>
      <ul>
        {recent.map((user) => (
          <li key={user.id} className="flex items-center p-2 gap-5">
            <img
              src={user.avatar || "https://via.placeholder.com/40"}
              alt={user.name}
              className="w-10 h-10 rounded-full "
            />
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-500 font-medium">{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentlyJoined;
