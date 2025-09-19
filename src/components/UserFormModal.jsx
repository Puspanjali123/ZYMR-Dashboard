import React, { useState } from "react";
import Modal from "react-modal";
import { createUser, updateUser } from "../services/api";

Modal.setAppElement("#root");

function UserFormModal({ isOpen, onClose, onSave, user }) {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [avatar, setAvatar] = useState(user?.avatar || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email, avatar };

    let savedUser;
    if (user) {
      savedUser = await updateUser(user.id, userData);
    } else {
      savedUser = await createUser(userData);
    }

    if (savedUser) onSave(savedUser);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="User Form"
      className="bg-white p-6 rounded shadow-md max-w-md mx-auto mt-20"
    >
      <h2 className="text-xl font-bold mb-4">
        {user ? "Edit User" : "Create User"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">Name</label>
          <input
            type="text"
            className="border w-full px-3 py-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block">Email</label>
          <input
            type="email"
            className="border w-full px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block">Avatar URL</label>
          <input
            type="text"
            className="border w-full px-3 py-2 rounded"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>

        {avatar && (
          <div className="mb-4">
            <img
              src={avatar}
              alt="Preview"
              className="w-20 h-20 rounded-full"
            />
          </div>
        )}

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default UserFormModal;
