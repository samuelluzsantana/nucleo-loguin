import React from "react";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
// context
import { PrimeReactProvider } from 'primereact/api';


// styles
import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";

import "primereact/resources/themes/lara-light-cyan/theme.css";


const root = document.getElementById("root");
createRoot(root!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <AppRoutes />
        <ToastContainer />
      </BrowserRouter>
    </PrimeReactProvider>

  </React.StrictMode>
);
