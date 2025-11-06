import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgLogo from "../assets/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Simple auth check
    if (email === "admin@eldify.com" && password === "123456") {
      localStorage.setItem("authToken", "mockToken123");
      localStorage.setItem(
        "userData",
        JSON.stringify({ name: "Samuel Igwesi", role: "Admin" })
      );
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-[var(--bg-dark)]">
      <div className="bg-white dark:bg-[var(--header-dark-bg)] shadow-lg rounded-2xl p-8 w-96 text-center">
        <img src={imgLogo} alt="Eldify Logo" className="h-16 mx-auto mb-6" />

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
          Welcome Back
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Sign in to continue
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A7692] focus:outline-none dark:bg-[var(--bg-dark)] dark:border-gray-600 dark:text-white"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A7692] focus:outline-none dark:bg-[var(--bg-dark)] dark:border-gray-600 dark:text-white"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#0A7692] text-white py-2 rounded-md font-semibold hover:bg-[#08667d] transition-colors"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          Forgot your password?{" "}
          <a href="#" className="text-[#0A7692] font-medium">
            Reset here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
