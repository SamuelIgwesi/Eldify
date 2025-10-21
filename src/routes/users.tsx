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
    <div className="p-6">
      <h1 className="text-2xl font-semibold mt-8 mb-4 text-[#0A7692]">Users</h1>

      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search users..."
          className="border border-gray-300 rounded-md p-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-[#0A7692]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-[#0A7692] text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-100 transition-colors duration-200 border-b"
                >
                  <td className="py-3 px-4">{user.id}</td>
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">{user.role}</td>
                  <td className="py-3 px-4">
                    <button className="text-[#0A7692] hover:underline font-medium">
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-4 text-center text-gray-500">
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
