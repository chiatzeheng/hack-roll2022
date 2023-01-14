import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./routes/Login";
import Transactions from "./routes/Transactions";
import Summary from "./routes/Summary";
import Home from "./routes/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import GoogleSuccess from "./components/GoogleSuccess";
import Global from "./components/Global";
import axios from "axios";
axios.defaults.baseURL = "https://hack-n-roll-production-1482.up.railway.app";
import AppContext from "./context";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Global>
        <Login />
      </Global>
    ),
  },
  {
    path: "/transactions",
    element: (
      <Global>
        <Transactions />
      </Global>
    ),
  },
  {
    path: "/summary",
    element: (
      <Global>
        <Summary />
      </Global>
    ),
  },
  {
    path: "/google/success",
    element: <GoogleSuccess />,
  },
  {
    path: "/Home",
    element: (
      <Global>
        <Home />
      </Global>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContext>
      <RouterProvider router={router} />
    </AppContext>
  </React.StrictMode>
);
