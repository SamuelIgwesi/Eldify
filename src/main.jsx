import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Reports from "./routes/reports.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import Dashboard from "./routes/dashboard.jsx";
import Users from "./routes/users.jsx";
import Albums from "./routes/albums.jsx";
import Artists from "./routes/artists.jsx";
import Songs from "./routes/songs.jsx";
// import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      { path: "songs", element: <Songs /> },
      { path: "artists", element: <Artists /> },
      {
        path: "albums",
        element: <Albums />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
