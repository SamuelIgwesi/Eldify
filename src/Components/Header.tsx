import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import imgLogo from "../assets/logo.png";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white dark:bg-[var(--header-dark-bg)] p-2 shadow-md fixed w-full z-40">
      {/* Logo */}
      <img src={imgLogo} alt="Eldify Logo" className="h-12 ml-4" />

      {/* Right Section */}
      <div className="flex mr-8 space-x-4 items-center relative">
        {/* Search */}
        <div className="relative flex items-center justify-center w-32 md:w-48">
          <SearchIcon
            className="absolute left-2 text-gray-500 dark:text-[var(--dark-subtext)]"
            fontSize="small"
          />
          <input
            type="search"
            className="pl-8 border dark:text-[var(--dark-text)] border-gray-400 rounded-md w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-[#0A7692] dark:focus:ring-[var(--input-border-dark)] dark:border-[var(--input-border-dark)] "
            placeholder="Search..."
          />
        </div>

        {/* Profile */}
        <div className="relative flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover mr-1"
          />

          {/* Dropdown Button */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="leading-4 text-left hover:cursor-pointer"
            id="dropdownDefaultButton"
            type="button"
          >
            <h2 className="text-gray-700 dark:text-[var(--dark-text)] sm:text-sm">
              Samuel Igwesi
            </h2>
            <p className="text-gray-500 dark:text-[var(--dark-subtext)] text-xs md:text-sm">
              Admin
            </p>
            <ArrowDropDownIcon
              fontSize="medium"
              className="text-gray-500 absolute left-30 top-5"
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul className="absolute -right-4 mt-32 bg-white border border-gray-200 rounded-lg shadow-md w-44 text-sm text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
