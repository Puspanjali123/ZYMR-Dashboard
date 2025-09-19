import React, { useEffect, useState } from "react";
import { getUsers } from "./services/api";
import Dashboard from "./components/Dashboard.jsx";
import UserList from "./components/UserList.jsx";
import UserFormModal from "./components/UserFormModal.jsx";

// import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getUsers();
      setUsers(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleCreate = () => {
    setEditUser(null);
    setModalOpen(true);
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setModalOpen(true);
  };

  const handleSave = (newUser) => {
    if (editUser) {
      setUsers(users.map((u) => (u.id === newUser.id ? newUser : u)));
    } else {
      setUsers([newUser, ...users]);
    }
    setModalOpen(false);
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold m-6 text-center">USER DASHBOARD</h1>

      <>
        <Dashboard users={users} />
        <div className="">
          <UserList users={users} onEdit={handleEdit} onCreate={handleCreate} />
        </div>
      </>

      {modalOpen && (
        <UserFormModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
          user={editUser}
        />
      )}
    </div>
  );
}

export default App;
