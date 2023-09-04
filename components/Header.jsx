import styles from "../styles/Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.overlay}></div>
      <div className={styles.header__content}>
        <strong>
          <h1>Solène Beaumont</h1>
          <h2>Avocate au barreau de Nantes</h2>
        </strong>
        <div>
          <a href="#content">
            <div className={styles.to_down}>
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
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
