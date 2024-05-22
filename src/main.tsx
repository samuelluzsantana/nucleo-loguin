import React from "react";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
// styles
import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";

const root = document.getElementById("root");
createRoot(root!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
