import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "EN" },
  { code: "ru", lang: "RU" },
];

const LanguageModal = ({ toggleModal }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    toggleModal();
  };

  return (
    <div className="modal">
      {languages.map((lng) => {
        return (
          <p key={lng.code} onClick={() => changeLanguage(lng.code)}>
            {lng.lang}
          </p>
        );
      })}
    </div>
  );
};

export default LanguageModal;
