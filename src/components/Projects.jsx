import { useRef, useState, useEffect } from "react";
import CustomHook from "./CustomHook";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const [listProjects] = useState([
    {
      name: t("project_1_name"),
      des: t("project_1_des"),
      url: "https://github.com/ilyamukhamedov/landing_part1",
      technologies: "HTML, CSS, JS, React, SwiperJS, ...",
      image: "/landing1.webp",
    },
    {
      name: t("project_2_name"),
      des: t("project_2_des"),
      url: "https://github.com/ilyamukhamedov/landing_part2",
      technologies: "HTML, CSS, JS, React, SwiperJS, Telegram api, ...",
      image: "/landing2.webp",
    },
    {
      name: "Crypto Spotter",
      des: t("project_3_des"),
      url: "https://github.com/ilyamukhamedov/crypto-app-frontend",
      technologies: "HTML, CSS, JS, React, ChartJS, CoinGecko API, ...",
      image: "/crypto.webp",
    },
    {
      name: "WTWR",
      des: t("project_4_des"),
      url: "https://github.com/ilyamukhamedov/wtvr",
      technologies: "HTML, CSS, JS, React, ChartJS, CoinGecko API, ...",
      image: "/wtwr.webp",
    },
    {
      name: "Around The U.S.",
      des: t("project_5_des"),
      url: "https://github.com/ilyamukhamedov/se_project_aroundtheus",
      technologies: "HTML, CSS, JS, React, ...",
      image: "/around.webp",
    },
  ]);

  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);

  return (
    <section className="projects" id={t("projects_nav")} ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
        {t("projects")}
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div
            className="item"
            key={key}
            ref={(el) => el && refDivs.current.push(el)}
          >
            <div className="image">
              <img src={value.image} alt={value.name + " project image"} />
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="technologies">
                <img src="/chip.svg" alt="image of chip" />

                <div>
                  <h4>{t("technologies")}</h4>
                  <div className="de">{value.technologies}</div>
                </div>
              </div>
              <div className="repo">
                <a
                  className="link"
                  href={value.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="image of link" src="/link.svg" />
                </a>

                <h4>{t("github")}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
