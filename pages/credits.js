import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import style from "../styles/Credits.module.css";
export default function Credits() {
  return (
    <div>
      <Navbar />

      <main
        className={`${style.credit__main_content} component__main_content  container`}
      >
        {/* icone tribunal */}

        <div className={style.credit__main_content_icon}>
          <img
            src="/images/tribunal2.png"
            alt="icone de tribunal"
            className={style.content__icon}
          />
          <p>
            Icônes conçues par{" "}
            <a href="https://www.freepik.com" title="Freepik">
              {" "}
              Freepik{" "}
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/fr/" title="Flaticon">
              www.flaticon.com'
            </a>
          </p>
        </div>

        {/* poignée de main  */}
        <div className={style.credit__main_content_icon}>
          <img
            src="/images/poignee-de-main.png"
            alt="poignée de main"
            className={style.content__icon}
          />
          <p>
            Icônes conçues par{" "}
            <a
              href="https://www.flaticon.com/fr/auteurs/dinosoftlabs"
              title="DinosoftLabs"
            >
              {" "}
              DinosoftLabs{" "}
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/fr/" title="Flaticon">
              www.flaticon.com'
            </a>
          </p>
        </div>
        {/* icone justice */}

        <div className={style.credit__main_content_icon}>
          <img
            src="/images/justice.png"
            alt="marteau de justice"
            className={style.content__icon}
          />
          <p>
            Icônes conçues par{" "}
            <a href="" title="Dewi Sari">
              {" "}
              Dewi Sari{" "}
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/fr/" title="Flaticon">
              www.flaticon.com'
            </a>
          </p>
        </div>

        <div className={style.credit__main_content_svg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={style.credit__main__mail_icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              className="contact__main_mail-icon"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={style.credit__main__location_icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={style.credit__main__phone_icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>

          <p>
            Icônes from <a href="https://heroicons.com/">Heroicons</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
