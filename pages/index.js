import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Honoraires from "../components/Honoraires.jsx";
import Domaine from "../components/Domaine.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Solène Beaumont, avocate au barreau de Nantes</title>
        <meta
          name="description"
          content="Maître Solène BEAUMONT intervient dans tous les domaines du droit pénal.
Que vous soyez victime ou mis en cause, Maître Solène BEAUMONT vous accompagne et vous représente tout au long de la phase procédurale.
Elle vous assiste aussi bien au cours de l’enquête (dépôt de plainte, garde à vue, audition libre …), de l’information judiciaire ou encore de l’audience devant le Tribunal de Police, le Tribunal Correctionnel ou la Cour d’Assises.
Maître Solène BEAUMONT intervient également pour les mineurs qui sont auteurs d’infraction devant le Juge des Enfants ou devant le Tribunal pour Enfants"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Navbar />
      <Header />

      <section className={`${styles.section__content} container`} id="content">
        <main className={styles.main}>
          <div className={styles.content}>
            <div className={styles.profil_container}>
              <img
                src="/images/solene_beaumont.jpg"
                className={styles.profil}
                alt="Solène Beaumont"
              />
            </div>
            <p>
              <strong>
                {" "}
                Maître{" "}
                <span className={styles.content_name}>Solène BEAUMONT</span>
              </strong>{" "}
              a obtenu le Certificat d’Aptitude à la Profession d’Avocat de
              l’Ecole des Avocats du Grand Ouest et exerce en tant qu’
              <strong>avocate </strong>
              depuis le 1 er janvier 2021 au sein du{" "}
              <strong>Barreau de NANTES.</strong>
            </p>

            <p>
              Elle est également titulaire d’un Master 1 Carrières Judiciaires
              et Sciences Criminelles obtenu à l’université de NANTES ainsi que
              d’un Master 2 en Droit privé général de l’université de ROUEN.
            </p>

            <p>
              Elle a acquis de nombreuses compétences au cours de ses diverses
              expériences professionnelles auprès des juridictions notamment au
              sein du service du Procureur de la République (Parquet) et de
              cabinets d’avocats Nantais et Rennais.
            </p>

            <p>
              Le Cabinet de Maitre BEAUMONT intervient dans le ressort de la
              Cour d’Appel de RENNES, et plus spécifiquement devant le Tribunal
              Judiciaire de NANTES.
            </p>

            <p>
              Maître Solène BEAUMONT met son écoute, son dynamisme, ses
              compétences et son expertise juridique à votre service afin de
              vous conseiller efficacement, vous assister dans vos démarches
              judiciaires et pour défendre au mieux vos intérêts.
            </p>

            <p>
              Elle intervient dans tous les domaines du Droit Pénal (infractions
              routières, infractions à la législation des stupéfiants, atteintes
              aux personnes et aux biens…)
            </p>
          </div>
        </main>
        <footer className={styles.main__footer}>
          <Link href="#contact" className={styles.main__footer_link}>
            Contactez moi
          </Link>
        </footer>
      </section>
      <Domaine />
      <Honoraires />
      <Contact />
      <Footer />
    </div>
  );
}
