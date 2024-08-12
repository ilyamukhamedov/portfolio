import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import vercel from "../../public/vercel.svg";
import babel from "../../public/babel.svg";
import webpack from "../../public/webpack.svg";
import postman from "../../public/postman.svg";
import mongodb from "../../public/mongodb.svg";
import npm from "../../public/npm.svg";
import redux from "../../public/redux.svg";
import vite from "../../public/vite.svg";
import figma from "../../public/figma.svg";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNode,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import CustomHook from "./CustomHook";

const Skills = () => {
  const [listSkills] = useState([
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3 },
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact },
    { name: "Node.js", icon: faNode },
    { name: "Git", icon: faGitAlt },
    { name: "Babel", icon: babel },
    { name: "Postman", icon: postman },
    { name: "MongoDB", icon: mongodb },
    { name: "Webpack", icon: webpack },
    { name: "Vercel", icon: vercel },
    { name: "npm", icon: npm },
    { name: "Redux", icon: redux },
    { name: "Vite", icon: vite },
    { name: "Figma", icon: figma },
  ]);

  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);

  return (
    <section className="skills" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
        Skills
      </div>
      <div className="list">
        {listSkills.map((value, key) => (
          <div
            className="item"
            key={key}
            ref={(el) => el && refDivs.current.push(el)}
          >
            {typeof value.icon === "string" ? (
              <img src={value.icon} alt={value.name} />
            ) : (
              <FontAwesomeIcon icon={value.icon} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
