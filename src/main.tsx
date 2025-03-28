import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Routes/Layout";
import Loader from "./components/Loader/Loader";

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
    <div className="app-wrapper">
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
);
