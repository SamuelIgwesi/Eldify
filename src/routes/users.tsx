import { useState } from "react";

const Users = () => {
  const [users] = useState([
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

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-5">
      <h1 className="text-xl font-semibold mt-4 mb-3 text-[var(--brand-color)] dark:text-[var(--text-heading)]">
        Users
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

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border dark:bg-[var(--table-body-bg)] border-gray-200 rounded-lg overflow-hidden text-sm">
          <thead className="bg-[var(--brand-color)] dark:bg-[var(--table-header-bg)] text-white dark:text-[var(--dark-text)] text-xs sm:text-sm">
            <tr>
              <th className="py-2 px-2 sm:px-3 text-left">ID</th>
              <th className="py-2 px-2 sm:px-3 text-left">Name</th>
              <th className="py-2 px-2 sm:px-3 text-left">Email</th>
              <th className="py-2 px-2 sm:px-3 text-left">Role</th>
              <th className="py-2 px-2 sm:px-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-100 dark:hover:bg-[var(--table-hover)] transition-colors duration-200 border-b dark:text-[var(--dark-text)]"
                >
                  <td className="py-2 px-2 sm:px-3">{user.id}</td>
                  <td className="py-2 px-2 sm:px-3">{user.name}</td>
                  <td className="py-2 px-2 sm:px-3">{user.email}</td>
                  <td className="py-2 px-2 sm:px-3">{user.role}</td>
                  <td className="py-2 px-2 sm:px-3">
                    <button className="text-[#0A7692] hover:underline font-medium text-sm">
                      View
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
};

export default Users;
