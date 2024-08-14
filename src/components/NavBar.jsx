import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { changeTabActive } from "../redux/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Toggle from "./Toggle";

const NavBar = ({ activeTab, onChangeTheme, switchToggle }) => {
  const [linkNav] = useState(["home", "projects", "skills", "contacts"]);
  const [statusNav, setStatusNav] = useState("");

  const dispatch = useDispatch();
  const changeTab = (value) => {
    dispatch(changeTabActive(value));
    toggleNav();
  };

  const toggleNav = () => {
    setStatusNav(statusNav === "active" ? "" : "active");
  };

  return (
    <header>
      <a
        className="logo"
        href="https://github.com/ilyamukhamedov"
        target="_blank"
      >
        <img src="/logo.svg" alt="logo" />
      </a>

      <nav className={statusNav}>
        <Toggle onChangeTheme={onChangeTheme} switchToggle={switchToggle} />
        {linkNav.map((value) => (
          <span
            key={value}
            className={activeTab === value ? "active" : ""}
            onClick={() => changeTab(value)}
          >
            {value}
          </span>
        ))}
      </nav>
      <div className="icon-bar" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});

export default connect(mapStateToProps, { changeTabActive })(NavBar);
