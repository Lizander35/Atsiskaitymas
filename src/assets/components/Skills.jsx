import React from "react";
import { react, js, css, html } from "../images/index";

const Skills = () => {
  const skillsData = [
    { name: "React", icon: react },
    { name: "JavaScript", icon: js },
    { name: "CSS", icon: css },
    { name: "HTML", icon: html },
  ];

  return (
    <section className="bg-gray-200 py-8 md:py-12 lg:py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow text-center"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mx-auto"
              />
              <p className="text-lg text-gray-600 mt-4">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
