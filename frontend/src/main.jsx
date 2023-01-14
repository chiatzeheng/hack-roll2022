import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./routes/Login";
import Transactions from "./routes/Transactions";
import Home from "./routes/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
