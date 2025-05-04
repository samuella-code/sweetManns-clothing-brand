import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
