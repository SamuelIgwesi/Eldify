import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [email, setEmail] = useState("samueligwesi@gmail.com");
  const [name, setName] = useState("Samuel Igwesi");

  // Toggle dark mode
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const theme = localStorage.getItem("theme");
    return theme === "dark" ? true : false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="p-6 sm:p-10 min-h-screen ">
      <h1 className=" mt-2 mb-4 text-2xl sm:text-3xl font-semibold text-[var(--brand-color)] dark:text-[var(--text-heading)]">
        Settings
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        {/* === Profile Settings === */}
        <div className="bg-white p-6 rounded-lg shadow-md dark:bg-[var(--card-dark)]">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 dark:text-[var(--dark-text)]">
            Profile Settings
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1 dark:text-[var(--dark-text)]">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="dark:text-[var(--dark-text)] w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A7692]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1 dark:text-[var(--dark-text)]">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="dark:text-[var(--dark-text)] w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A7692]"
              />
            </div>

            <button className="bg-[#0A7692] dark:text-[var(--dark-text)] text-white px-5 py-2 rounded-lg hover:bg-[#095b73] transition-all">
              Save Changes
            </button>
          </div>
        </div>

        {/* === Preferences === */}
        <div className="bg-white p-6 rounded-lg shadow-md dark:bg-[var(--card-dark)]">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 dark:text-[var(--dark-text)]">
            Preferences
          </h2>

          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <p className="text-gray-600 dark:text-[var(--dark-text)]">
              Enable Notifications
            </p>
            <Switch
              checked={notifications}
              onChange={setNotifications}
              className={`${
                notifications ? "bg-[#0A7692]" : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full transition`}
            >
              <span
                className={`${
                  notifications ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>

          <div className="flex justify-between items-center py-3">
            <p className="text-gray-600 dark:text-[var(--dark-text)]">
              Dark Mode
            </p>
            <Switch
              checked={darkMode}
              onChange={setDarkMode}
              className={`${
                darkMode ? "bg-[#0A7692]" : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full transition`}
            >
              <span
                className={`${
                  darkMode ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
        </div>

        {/* === Security === */}
        <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2 dark:bg-[var(--card-dark)]">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 dark:text-[var(--dark-text)]">
            Security
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1 dark:text-[var(--dark-text)]">
                Current Password
              </label>
              <input
                type="password"
                className="dark:text-[var(--dark-text)] w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A7692]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1 dark:text-[var(--dark-text)]">
                New Password
              </label>
              <input
                type="password"
                className="dark:text-[var(--dark-text)] w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A7692]"
              />
            </div>
          </div>

          <button className="mt-6 bg-[#0A7692] text-white px-5 py-2 rounded-lg hover:bg-[#095b73] transition-all">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}
