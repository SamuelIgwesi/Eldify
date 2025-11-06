import { useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Gbile", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Olawale", email: "jane@example.com", role: "Artist" },
    { id: 3, name: "Samuel Igwesi", email: "samuel@example.com", role: "User" },
    {
      id: 4,
      name: "Michael Okoro",
      email: "michael@example.com",
      role: "Artist",
    },
    { id: 5, name: "Sophia Brown", email: "sophia@example.com", role: "User" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [editingUser, setEditingUser] = useState<any>(null);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });

  // Filter users by search
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle add new user
  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.role) return;
    const newEntry = { ...newUser, id: users.length + 1 };
    setUsers([...users, newEntry]);
    setNewUser({ name: "", email: "", role: "" });
  };

  // Handle delete
  const handleDelete = (id: number) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  // Handle update
  const handleUpdate = () => {
    setUsers(users.map((u) => (u.id === editingUser.id ? editingUser : u)));
    setEditingUser(null);
  };

  return (
    <div className="p-4 sm:p-5">
      <h1 className="text-xl font-semibold mt-4 mb-3 text-[var(--brand-color)] dark:text-[var(--text-heading)]">
        Users Management
      </h1>

      {/* Search bar */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search users..."
          className="dark:text-[var(--dark-text)] border border-gray-300 rounded-md p-1.5 text-sm w-full sm:w-1/2 md:w-1/3 focus:outline-none focus:ring-2 focus:ring-[#0A7692]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Add New User */}
      <div className="bg-white dark:bg-[var(--table-body-bg)] p-4 rounded-lg shadow-md mb-6">
        <h2 className="font-semibold text-[var(--brand-color)] dark:text-[var(--dark-text)] mb-3 text-sm">
          Add New User
        </h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Full name"
            className="border p-2 rounded-md flex-1 dark:text-[var(--dark-text)]"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded-md flex-1 dark:text-[var(--dark-text)]"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Role"
            className="border p-2 rounded-md flex-1 dark:text-[var(--dark-text)]"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          />
          <button
            onClick={handleAddUser}
            className="bg-[var(--brand-color)] text-white px-3 py-2 rounded-md hover:bg-[#095b73] transition"
          >
            Add
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border dark:bg-[var(--table-body-bg)] border-gray-200 rounded-lg overflow-hidden text-sm">
          <thead className="bg-[var(--brand-color)] dark:bg-[var(--table-header-bg)] text-white text-xs sm:text-sm">
            <tr>
              <th className="py-2 px-2 sm:px-3 text-left">ID</th>
              <th className="py-2 px-2 sm:px-3 text-left">Name</th>
              <th className="py-2 px-2 sm:px-3 text-left">Email</th>
              <th className="py-2 px-2 sm:px-3 text-left">Role</th>
              <th className="py-2 px-2 sm:px-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-100 dark:hover:bg-[var(--table-hover)] border-b transition duration-150 dark:text-[var(--dark-text)]"
                >
                  <td className="py-2 px-3">{user.id}</td>
                  <td className="py-2 px-3">
                    {editingUser?.id === user.id ? (
                      <input
                        className="border p-1 rounded w-full"
                        value={editingUser.name}
                        onChange={(e) =>
                          setEditingUser({
                            ...editingUser,
                            name: e.target.value,
                          })
                        }
                      />
                    ) : (
                      user.name
                    )}
                  </td>
                  <td className="py-2 px-3">
                    {editingUser?.id === user.id ? (
                      <input
                        className="border p-1 rounded w-full"
                        value={editingUser.email}
                        onChange={(e) =>
                          setEditingUser({
                            ...editingUser,
                            email: e.target.value,
                          })
                        }
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td className="py-2 px-3">
                    {editingUser?.id === user.id ? (
                      <input
                        className="border p-1 rounded w-full"
                        value={editingUser.role}
                        onChange={(e) =>
                          setEditingUser({
                            ...editingUser,
                            role: e.target.value,
                          })
                        }
                      />
                    ) : (
                      user.role
                    )}
                  </td>
                  <td className="py-2 px-3 flex gap-2">
                    {editingUser?.id === user.id ? (
                      <button
                        onClick={handleUpdate}
                        className="text-green-600 hover:underline"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => setEditingUser(user)}
                        className="text-[#0A7692] hover:underline"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="py-3 text-center text-gray-500 text-sm"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
