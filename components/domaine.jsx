import React from "react";
import Link from "next/link";
import Navbar from "./Navbar.jsx";
import style from "../styles/Domaine.module.css";
import Footer from "./Footer.jsx";

export default function Domaines() {
  return (
    <div>
      <section id="domaine" className="component__main_content">
        <header className="component__header">
          <h2>Domaine d'intervention</h2>
        </header>
        <main className="main  container">
          <p>
            Maître Solène BEAUMONT intervient dans tous les domaines du droit
            pénal
          </p>
          <p>
            Que vous soyez victime ou mis en cause, Maître Solène BEAUMONT vous
            accompagne et vous représente tout au long de la phase procédurale.
          </p>
          <div className={style.domaine__main__content}>
            <img
              src="/images/tribunal2.png"
              alt="icone de tribunal"
              className={style.content__icon}
            />
            <p>
              Elle vous assiste aussi bien au cours de l’enquête (dépôt de
              plainte, garde à vue, audition libre …), de l’information
              judiciaire ou encore de l’audience devant le Tribunal de Police,
              le Tribunal Correctionnel ou la Cour d’Assises.
            </p>
          </div>
          <p>
            Maître Solène BEAUMONT intervient également pour les mineurs qui
            sont auteurs d’infraction devant le Juge des Enfants ou devant le
            Tribunal pour Enfants.
          </p>
          <div className={style.domaine__main__content}>
            <img
              src="/images/poignee-de-main.png"
              alt="poignée de main"
              className={style.content__icon}
            />
            <p>
              Le cabinet vous accompagne également dans la préparation de vos
              audiences, établie avec vous une stratégie adaptée au regard des
              éléments de votre dossier et vous explique l’ensemble des enjeux
              et de la procédure.
            </p>
          </div>

          <p>
            Si vous êtes victime d’une infraction pénale, Maître Solène BEAUMONT
            vous accompagne dans l’ensemble des démarches à effectuer pour
            engager des poursuites.
          </p>
          <div className={style.domaine__main__content}>
            <img
              src="/images/justice.png"
              alt="marteau de justice"
              className={style.content__icon}
            />
            <p>
              Elle vous assiste afin de faire valoir vos droits, faire
              reconnaitre votre statut de victime et obtenir une indemnisation
              de vos préjudices.
            </p>
          </div>
          <p>
            Maître Solène BEAUMONT vous accueille au sein de son cabinet pour
            vous conseiller dans votre procédure et vous invite à prendre
            attache auprès de son secrétariat le plus tôt possible.
          </p>
        </main>
      </section>
    </div>
  );
}
