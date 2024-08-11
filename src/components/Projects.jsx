import React from "react";

const Projects = () => {
  const [listProjects] = React.useState([
    {
      name: "Book Landing Part 1",
      des: "This is the project of the first part of the book about landscape design.",
      url: "https://github.com/ilyamukhamedov/landing_part1",
      technologies: "HTML, CSS, JS, React, SwiperJS, ...",
      image: "/landing1.webp",
    },
    {
      name: "Book Landing Part 2",
      des: "This is the project of the second part of the book about landscape design.",
      url: "https://github.com/ilyamukhamedov/landing_part2",
      technologies: "HTML, CSS, JS, React, SwiperJS, Telegram api, ...",
      image: "/landing2.webp",
    },
    {
      name: "Crypto Spotter",
      des: "This project is a cryptocurrency dashboard that displays a list of cryptocurrencies with detailed information, historical data, and an interactive line chart showing price trends over various time periods.",
      url: "https://github.com/ilyamukhamedov/crypto-app-frontend",
      technologies: "HTML, CSS, JS, React, ChartJS, CoinGecko API, ...",
      image: "/crypto.webp",
    },
    {
      name: "WTWR",
      des: "Or Weather Tailored Wardrobe Recommender, utilizes external weather data. The application offers personalized clothing suggestions to users, taking into account the current weather conditions in their local area.",
      url: "https://github.com/ilyamukhamedov/se_project_react",
      technologies:
        "HTML, CSS, JS, React, Weather API, MongoDB, Postman, Google Cloud, ...",
      image: "wtwr.webp",
    },
    {
      name: "Around The U.S.",
      des: "This project is part of the Software Engineering program at TripleTen. It is a web application created using HTML, CSS, and JavaScript, following the design from Figma. The application is designed to display correctly on various screen sizes and includes interactive buttons for user interaction.",
      url: "https://github.com/ilyamukhamedov/se_project_aroundtheus",
      technologies: "HTML, CSS, JS, React, ...",
      image: "/around.webp",
    },
  ]);
  return (
    <section className="projects">
      <div className="title">Projects</div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div className="item" key={key}>
            <div className="image">
              <img src={value.image} alt={value.name + " project image"} />
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="technologies">
                <img src="/chip.svg" alt="image of chip" />

                <div>
                  <h4>Technologies</h4>
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

                <h4>GitHub Repo</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
