import React, { useRef, useState } from "react";
import CustomHook from "./CustomHook";

const Contacts = () => {
  const [listContacts] = useState([
    {
      title: "Email",
      value: "honeyflym@gmail.com",
      url: "mailto:honeyflym@gmail.com",
    },
    {
      title: "Phone Number",
      value: "+972534581722",
      url: "tel:+972534581722",
    },
    {
      title: "Telegram",
      value: "Contact me",
      url: "http://t.me/Kreker911",
    },
  ]);

  const refTab = useRef();
  const divs = useRef([]);
  CustomHook(refTab);

  return (
    <section className="contacts" ref={refTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Contacts
      </div>
      <div className="list">
        {listContacts.map((value, key) => (
          <div
            className="item"
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
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
