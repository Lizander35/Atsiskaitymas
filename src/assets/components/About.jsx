import React from "react";
import { Link } from "react-router-dom";
import profile from "../images/profile.jpg";

const About = () => {
  return (
    <section className="bg-gray-100 py-8 md:py-12 lg:py-16">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
        <div className="md:flex md:flex-row md:items-center">
          <div className="md:w-1/2 max-w-xl md:mx-auto mb-6 md:mb-0 md:pr-6 text-center">
            <p className="text-lg text-gray-600 leading-relaxed mt-2">
              Hi, I'm Leon, a passionate web developer with a keen eye for design
              and a commitment to creating exceptional web experiences. My goal is
              to build websites that not only look stunning but are also intuitive
              and user-friendly.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              I specialize in front-end development and have expertise in HTML,
              CSS, JavaScript, and various modern web development frameworks. I'm
              dedicated to staying up-to-date with the latest web technologies to
              ensure that every project I work on meets the highest standards of
              quality and performance.
            </p>
            <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
              <Link to="/contact">Contact Me</Link>
            </button>
          </div>
          <div className="md:w-1/2 mt-6 text-center">
            <img src={profile} alt="About me" className="rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
