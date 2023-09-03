import style from "../styles/Contact.module.css";

// export default function Contact() {
const Contact = () => {
  return (
    <div>
      <section id="contact" className={style.contact}>
        <header className="component__header">
          <h2>Contact</h2>
        </header>
        <main className={`${style.contact__main_content} container`}>
          <div className={style.contact__info_mail}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={style.contact__main__mail_icon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                className="contact__main_mail-icon"
              />
            </svg>
            <p>
              E-mail:{" "}
              <a href="mailto:s.beaumont-avocat@outlook.fr">
                s.beaumont-avocat@outlook.fr
              </a>
            </p>
          </div>

          <div className={style.map__adress}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={style.contact__main__location_icon}
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
            <p>4 rue Racine - 44000 NANTES</p>
          </div>
          <div className={style.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.1526987409975!2d-1.5654145841892082!3d47.2135944230366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ec1cd22f4fd3%3A0x9c9ec7b0bd0b8d5b!2s4%20Rue%20Racine%2C%2044000%20Nantes!5e0!3m2!1sfr!2sfr!4v1669906496929!5m2!1sfr!2sfr"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={style.iframe}
            ></iframe>
          </div>
          <div className={style.contact__info_phone}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={style.contact__main__phone_icon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <div className={style.contact__info__phone_number}>
              <p>02.40.69.16.18</p>
              <p>07.49.91.04.02</p>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};
export default Contact;
