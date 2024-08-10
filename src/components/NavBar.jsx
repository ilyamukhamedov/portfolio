import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { changeTabActive } from "../redux/action";

const NavBar = ({ activeTab }) => {
  const [linkNav] = useState(["home", "skills", "projects", "contacts"]);
  const dispatch = useDispatch();
  const changeTab = (value) => {
    dispatch(changeTabActive(value));
  };

  return (
    <header>
      <div className="logo">
        <a href="https://github.com/ilyamukhamedov" target="_blank">
          <img src="/logo.svg" alt="logo" />
        </a>
      </div>
      <nav>
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
    </header>
  );
};

const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});

export default connect(mapStateToProps, { changeTabActive })(NavBar);
