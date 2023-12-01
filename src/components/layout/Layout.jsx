import React from "react";
import Navbar from "../navbar/Navbar";
import Headnav from "../headnav/Headnav";
import Footer from "../footer/Footer";

function Layout({ children }) {
  return (
    <div>
      <Headnav />
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
