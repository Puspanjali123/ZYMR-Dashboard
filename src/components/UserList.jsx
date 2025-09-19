import React, { useState } from "react";
import UserTable from "./UserTable";

function UserList({ users, onEdit, onCreate }) {
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("name");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const filtered = users.filter(
    (u) =>
      u.name?.toLowerCase().includes(search.toLowerCase()) ||
      u.email?.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) =>
    sortField === "name"
      ? a.name.localeCompare(b.name)
      : new Date(b.createdAt) - new Date(a.createdAt)
  );

  const paginated = sorted.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md m-8">
      <div className="flex justify-between m-4">
        <input
          type="text"
          placeholder="Search by Name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-100 p-4 w-md rounded"
        />
        <button
          onClick={onCreate}
          className="bg-blue-500 text-white p-4 rounded-xl"
        >
          Create User
        </button>
      </div>

      <div className="m-4">
        <label>Sort By: </label>
        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
          className="bg-gray-100 ml-2 px-2 py-1 rounded"
        >
          <option value="name">Name</option>
          <option value="createdAt">Date</option>
        </select>
      </div>

      <UserTable users={paginated} onEdit={onEdit} />

      <div className="flex justify-between m-4 ">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="p-3 bg-gray-200 rounded font-medium"
        >
          Prev
        </button>
        <span className="border-gray-200 rounded-lg border bg-amber-50 p-3 font-medium">
          Page {page} of {Math.ceil(sorted.length / pageSize)}
        </span>
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={page === Math.ceil(sorted.length / pageSize)}
          className="p-3 bg-gray-200 rounded font-medium"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UserList;
