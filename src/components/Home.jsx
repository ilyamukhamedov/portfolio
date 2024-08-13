import React, { useRef, useEffect } from "react";
import CustomHook from "./CustomHook";
import Typed from "typed.js";

const Home = () => {
  const el = React.useRef(null);
  const refTab = useRef();
  CustomHook(refTab);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hi, I am <p>Ilya Mukhamedov.</p>"],
      typeSpeed: 90,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" ref={refTab}>
      <div className="content">
        <div className="name">
          <span ref={el}></span>
        </div>
        <div className="des">
          I'm a Full Stack Developer focused on building and maintaining web
          applications. <br />
          Currently, I'm looking to join a team where I can grow my skills and
          contribute to meaningful projects.
        </div>
        <div className="box">
          <a
            className="btn"
            href="/Resume_Ilya Mukhamedov.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            Check My CV
          </a>

          <a
            className="social"
            href="https://github.com/ilyamukhamedov"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/github.svg" alt="github logo" />
          </a>

          <a
            className="social"
            href="https://www.linkedin.com/in/ilyamukhamedov/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/linkedin.svg" alt="github logo" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
