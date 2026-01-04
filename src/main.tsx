import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Routes/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout now handles the Preloader logic
    children: [
      // Your other routes go here
      // { path: "/", element: <Home /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="app-wrapper">
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
);
