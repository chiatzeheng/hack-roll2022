import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./routes/Login";
import Transactions from "./routes/Transactions";
import TransactionsHistory from "./routes/TransactionsHistory";
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
    path: "/transactionsHistory",
    element: <TransactionsHistory />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
