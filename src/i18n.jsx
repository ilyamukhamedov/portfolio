import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lan: "en",
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          home_nav: "home",
          projects_nav: "projects",
          skills_nav: "skills",
          contacts_nav: "contacts",

          greeting: "Hi, I am <p>Ilya Mukhamedov.</p>",
          home_des:
            "I'm a Full Stack Developer focused on building and maintaining web applications. <1 />Currently, I'm looking to join a team where I can grow my skills and contribute to meaningful projects.",
          resume: "Check My CV",
          projects: "Projects",
          project_1_name: "Book Landing Part 1",
          project_1_des:
            "This is the project of the first part of the book about landscape design.",
          project_2_name: "Book Landing Part 2",
          project_2_des:
            "This is the project of the second part of the book about landscape design.",
          project_3_des:
            "This project is a cryptocurrency dashboard that displays a list of cryptocurrencies with detailed information, historical data, and an interactive line chart showing price trends over various time periods.",
          project_4_des:
            "Or Weather Tailored Wardrobe Recommender, utilizes external weather data. The application offers personalized clothing suggestions to users, taking into account the current weather conditions in their local area.",
          project_5_des:
            "This project is part of the Full Stack development program at TripleTen. It is a web application created using HTML, CSS, and JavaScript, following the design from Figma. The application is designed to display correctly on various screen sizes and includes interactive buttons for user interaction.",
          technologies: "Technologies",
          github: "GitHub Repo",
          skills: "Skills",
          contacts: "Contacts",
          contacts_mail: "Email",
          contacts_phone: "Phone Number",
          contacts_telegram: "Telegram",
          contacts_des: "Contact me",
        },
      },
      ru: {
        translation: {
          home_nav: "главная",
          projects_nav: "проекты",
          skills_nav: "навыки",
          contacts_nav: "контакты",
          greeting: "Привет, Я <p>Илья Мухамедов.</p>",
          home_des:
            "Я разработчик полного цикла, специализирующийся на создании и обслуживании веб-приложений. <1 />В настоящее время я ищу работу в команде, где я мог бы развивать свои навыки и вносить свой вклад в значимые проекты.",
          resume: "Моё резюме",
          projects: "Проекты",
          project_1_name: "Лендинг Книги Часть 1",
          project_1_des:
            "Это проект посвященный первой части книги о ландшафтном дизайне.",
          project_2_name: "Лендинг Книги Часть 2",
          project_2_des:
            "Это проект посвященный второй части книги о ландшафтном дизайне.",
          project_3_des:
            "Этот проект представляет собой панель мониторинга, которая отображает список криптовалют с подробной информацией, историческими данными и интерактивным линейным графиком, показывающим ценовые тенденции за различные периоды времени.",
          project_4_des:
            "Или советчик по гардеробу с учетом погодных условий. Приложение предлагает пользователям персонализированные рекомендации по одежде с учетом текущих погодных условий в их регионе.",
          project_5_des:
            "Этот проект является частью курса 'Разработки полного  стека' в TripleTen. Это веб-приложение, созданное с использованием HTML, CSS и JavaScript в соответствии с дизайном Figma. Приложение адаптировано для корректного отображения на экранах различных размеров и включает интерактивные кнопки для взаимодействия с пользователем.",
          technologies: "Технологический стек",
          github: "GitHub репозиторий",
          skills: "Навыки",
          contacts: "Контакты",
          contacts_mail: "Электронная почта",
          contacts_phone: "Номер телефона",
          contacts_telegram: "Телеграм",
          contacts_des: "Связаться со мной",
        },
      },
    },
  });
