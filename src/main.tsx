import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Reports from "./routes/reports";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./Components/ErrorPage";
import Dashboard from "./routes/dashboard";
import Users from "./routes/users";
import Albums from "./routes/albums";
import Artists from "./routes/artists";
import Songs from "./routes/songs";
import Settings from "./routes/settings";
import "./index.css";

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
      { path: "settings", element: <Settings /> },
    ],
  },
]);

const rootElement = document.getElementById("root") as HTMLElement;
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  throw new Error("Root element not found");
}
