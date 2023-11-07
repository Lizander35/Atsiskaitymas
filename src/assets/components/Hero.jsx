import React from "react";
import "../../styles/hero.scss";

const Hero = ({title,subTitle,src}) => {
  return (
    <div className={`${src || 'hero'} bg-cover bg-center relative text-white pt-16`}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 py-44 text-center relative">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animated-title">
          {title? title : 'Web Developer'}
        </h1>
        <p className="text-lg md:text-2xl mb-8">
        {subTitle? subTitle : 'Creating experience that users enjoy.'}
        </p>
      </div>
    </div>
  );
};

export default Hero;
