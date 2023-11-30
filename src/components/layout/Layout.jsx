import React from "react";
import Navbar from "../navbar/Navbar";
import Headnav from "../headnav/Headnav";

function Layout({ children }) {
  return (
    <div>
      <Headnav />
      <Navbar />
      <div className="content">{children}</div>
    </div>
  );
}

export default Layout;
