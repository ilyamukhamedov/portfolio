import React, { useEffect, useRef, useState } from "react";
import CustomHook from "./CustomHook";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();

  const [listContacts, setListContacts] = useState([]);

  useEffect(() => {
    setListContacts([
      {
        title: t("contacts_mail"),
        value: "honeyflym@gmail.com",
        url: "mailto:honeyflym@gmail.com",
      },
      {
        title: t("contacts_phone"),
        value: "+972534581722",
        url: "tel:+972534581722",
      },
      {
        title: t("contacts_telegram"),
        value: t("contacts_des"),
        url: "http://t.me/Kreker911",
      },
    ]);
  }, [t]);

  const refTab = useRef();
  const divs = useRef([]);
  CustomHook(refTab, divs);

  return (
    <section className="contacts" id={t("contacts_nav")} ref={refTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        {t("contacts")}
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((value, key) => (
          <div className="item" key={key}>
            <h3>{value.title}</h3>
            <a href={value.url} target="_blank">
              {value.value}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacts;
