import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { changeTabActive } from "../redux/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Toggle from "./Toggle";
import LanguageModal from "./LanguageModal";
import { useTranslation } from "react-i18next";

const NavBar = ({ activeTab, onChangeTheme, switchToggle }) => {
  const { t } = useTranslation();

  const [linkNav, setLinkNav] = useState([]);

  useEffect(() => {
    setLinkNav([
      { key: "home", label: t("home_nav") },
      { key: "projects", label: t("projects_nav") },
      { key: "skills", label: t("skills_nav") },
      { key: "contacts", label: t("contacts_nav") },
    ]);
  }, [t]);

  const [statusNav, setStatusNav] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();
  const changeTab = (key) => {
    dispatch(changeTabActive(key));
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
        {linkNav.map(({ key, label }) => (
          <span
            key={key}
            className={activeTab === key ? "active" : ""}
            onClick={() => changeTab(key)}
          >
            {label}
          </span>
        ))}
        <div className="icon-globe" onClick={toggleModal}>
          <FontAwesomeIcon icon={faGlobe} />
        </div>
        {isOpen && <LanguageModal toggleModal={toggleModal} />}
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
