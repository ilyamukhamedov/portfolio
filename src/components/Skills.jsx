import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNode,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import CustomHook from "./CustomHook";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const [listSkills] = useState([
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3 },
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact },
    { name: "Node.js", icon: faNode },
    { name: "Git", icon: faGitAlt },
    { name: "Babel", icon: "/babel.svg" },
    { name: "Postman", icon: "/postman.svg" },
    { name: "MongoDB", icon: "/mongodb.svg" },
    { name: "Webpack", icon: "/webpack.svg" },
    { name: "Vercel", icon: "/vercel.svg" },
    { name: "NPM", icon: "/npm.svg" },
    { name: "Redux", icon: "/redux.svg" },
    { name: "Vite", icon: "/vite.svg" },
    { name: "Figma", icon: "/figma.svg" },
    { name: "VS Code", icon: "/vscode.svg" },
  ]);

  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);
  const { t } = useTranslation();

  return (
    <section className="skills" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
        {t("skills")}
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
            <div className="tooltip">
              <p>{value.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
