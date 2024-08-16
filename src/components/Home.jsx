import React, { useRef, useEffect } from "react";
import CustomHook from "./CustomHook";
import Typed from "typed.js";
import { Trans, useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const el = React.useRef(null);
  const refTab = useRef();
  CustomHook(refTab);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [t("greeting")],
      typeSpeed: 90,
    });

    return () => {
      typed.destroy();
    };
  }, [t]);

  return (
    <section className="home" id={t("home_nav")} ref={refTab}>
      <div className="content">
        <div className="name">
          <span ref={el}></span>
        </div>
        <div className="des">
          <Trans i18nKey={"home_des"} components={{ 1: <br /> }} />
        </div>
        <div className="box">
          <a
            className="btn"
            href="https://drive.google.com/file/d/1BXMGdNjqTigFBVvXPfZ901PhaDjJTqwY/view"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("resume")}
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
