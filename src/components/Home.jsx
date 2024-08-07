import React from "react";

const Home = () => {
  return (
    <section className="home">
      <div className="content">
        <div className="name">
          Hi, i am <span>Ilya Mukhamedov</span>
        </div>
        <div className="des">
          I'm a Full Stack Developer focused on building and maintaining web
          applications. <br />
          Currently, I'm looking to join a team where I can grow my skills and
          contribute to meaningful projects.
        </div>
        <a
          href="/Resume_Ilya Mukhamedov.docx"
          target="_blank"
          rel="noreferrer noopener"
        >
          Download My CV
        </a>
      </div>
    </section>
  );
};

export default Home;
