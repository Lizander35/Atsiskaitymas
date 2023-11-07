import { useState, useEffect } from "react";
import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import "../../styles/arrowUp.scss";

const Home = () => {

  const [showButton, setShowButton] = useState(false);

  const amountScrolled = 200;

  const handleScroll = () => {
    if (window.scrollY > amountScrolled) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <button
        className={`back-to-top ${showButton ? "show" : ""}`}
        onClick={scrollToTop}
      />
    </div>
  );
};

export default Home;
