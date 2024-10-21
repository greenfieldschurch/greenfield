import React, { useEffect } from "react";
import "../../App.css";
import About from "../About";
import HeroSection from "../HeroSection";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <About />
    </>
  );
}

export default Home;
