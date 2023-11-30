import React from "react";
import "./Home.css";
import HomeSlides from "../../components/slideshow/HomeSlides";
import HomeAbout from "../../components/homeabout/HomeAbout";

function Home() {
  return (
    <div className="home">
      <HomeSlides />
      <HomeAbout />
    </div>
  );
}

export default Home;
