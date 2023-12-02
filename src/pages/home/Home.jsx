import React from "react";
import "./Home.css";
import HomeSlides from "../../components/slideshow/HomeSlides";
import HomeAbout from "../../components/homeabout/HomeAbout";
import Hero from "../../components/hero/Hero";
import Features from "../../components/features/Features";
import SchoolNumbers from "../../components/schoolnumbers/SchoolNumbers";
import Profiles from "../../components/profiles/Profiles";

function Home() {
  return (
    <>
      <HomeSlides />
      <HomeAbout />
      <Hero />
      <Features />
      <SchoolNumbers />
      <Profiles />
    </>
  );
}

export default Home;
