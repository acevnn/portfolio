import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Routes/Layout.tsx";
import Loader from "./components/Loader/Loader.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // children: [
    //   {
    //     path: "/wip",
    //     element: <Loader />,
    //   },
    //   {
    //     path: "/",
    //   },
    // ],
  },
  {
    path: "/suja",
    element: <Loader />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
