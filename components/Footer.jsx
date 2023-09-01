import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo_container}>
        <div className={styles.footer__logo}>
          <div className={styles.footer__logo_content}>
            <h2>SB</h2>
          </div>
        </div>
        <p>Solène Beaumont</p>
      </div>
      <div className={styles.credit}>
        <Link href="credits">Crédits</Link>
      </div>
      <div className={styles.legal}>
        <Link href="legal">Mentions Légales</Link>
      </div>
      <div className={styles.conception}>
        <p>Conception: </p>
        <Link href="https://www.linkedin.com/in/alexisleray/" target="_blank">
          Alexis Leray
        </Link>
      </div>
    </footer>
  );
}
