import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Headnav from "../headnav/Headnav";
import Footer from "../footer/Footer";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
