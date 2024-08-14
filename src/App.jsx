import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

function App() {
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "light") {
    setLightMode();
  }

  const toggleTheme = (e) => {
    e.target.checked ? setLightMode() : setDarkMode();
  };

  return (
    <main>
      <NavBar onChangeTheme={toggleTheme} switchToggle={selectedTheme} />
      <Home />
      <Projects />
      <Skills />
      <Contacts />
    </main>
  );
}

export default App;
