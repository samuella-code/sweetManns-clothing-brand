import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import ShopContextProvider from "./Context/ShopContext.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AppLayout from "./components/layout/app.jsx";

createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    {/* <Navbar /> */}
    {/* <AppLayout> */}
      <App />
    {/* </AppLayout> */}
    {/* <Footer /> */}
  </ShopContextProvider>
);
