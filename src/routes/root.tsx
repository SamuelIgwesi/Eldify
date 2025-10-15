import { Outlet, NavLink } from "react-router-dom";
import Header from "../Components/Header";
import {
  Dashboard as DashboardIcon,
  LibraryMusic as LibraryMusicIcon,
  Diversity3 as Diversity3Icon,
  CollectionsBookmark as CollectionsBookmarkIcon,
  Person as PersonIcon,
  Assessment as AssessmentIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

export default function Root() {
  const navItems = [
    {
      to: "/dashboard",
      icon: <DashboardIcon fontSize="inherit" />,
      label: "Dashboard",
    },
    {
      to: "/songs",
      icon: <LibraryMusicIcon fontSize="inherit" />,
      label: "Songs",
    },
    {
      to: "/artists",
      icon: <Diversity3Icon fontSize="inherit" />,
      label: "Artists",
    },
    {
      to: "/albums",
      icon: <CollectionsBookmarkIcon fontSize="inherit" />,
      label: "Albums",
    },
    { to: "/users", icon: <PersonIcon fontSize="inherit" />, label: "Users" },
    {
      to: "/reports",
      icon: <AssessmentIcon fontSize="inherit" />,
      label: "Reports",
    },
    {
      to: "/settings",
      icon: <SettingsIcon fontSize="inherit" />,
      label: "Settings",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Header />
      {/* Sidebar Navigation */}

      <nav className="hidden md:flex bg-[#031f46] text-white w-56 flex-col items-center pt-24 fixed h-screen">
        <ul className="flex flex-col w-full space-y-3">
          {navItems.map(({ to, icon, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center space-x-2 bg-[#0A7692] rounded-md px-4 py-2 w-full text-white font-semibold"
                    : "flex items-center space-x-2 px-4 py-2 w-full text-gray-300 hover:bg-[#0A7692] hover:text-white rounded-md transition-all"
                }
              >
                {icon}
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}

      <nav className="md:hidden bg-[#031f46] text-white w-full fixed bottom-0 left-0 flex justify-around py-3 z-10 ">
        {navItems.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center text-[#0A7692]"
                : "flex flex-col items-center text-gray-300 hover:text-[#0A7692]"
            }
          >
            {icon}
            <span className="text-xs">{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Main Content */}
      <main className="flex-1 md:ml-56 p-6 mt-16 md:mt-0">
        <Outlet />
      </main>
    </div>
  );
}
