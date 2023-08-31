import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Legal() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <h2>Mention Légales</h2>
        <p>En vigueur au 25/08/2023</p>
        <p>
          Conformément aux dispositions des Articles 6-III et 19 de la Loi
          n°2004-575 du 21 juin 2004 pour la Confiance dans l&apos;économie
          numérique, dite L.C.E.N., il est porté à la connaissance des
          utilisateurs et visiteurs, ci-après l&apos;Utilisateur;, du site
          beaumont-avocat.fr , ci-après le &quot;Site&quot;, les présentes
          mentions légales.
        </p>
        <p>
          La connexion et la navigation sur le Site par l&apos;Utilisateur
          implique acceptation intégrale et sans réserve des présentes mentions
          légales.
        </p>
        <p>
          Ces dernières sont accessibles sur le Site à la rubrique « Mentions
          légales ».
        </p>
        <h3>ARTICLE 1 - L&apos;EDITEUR</h3>
        <p>
          L&apos;édition et la direction de la publication du Site est assurée
          par BEAUMONT Solène, domiciliée 4 rue racine, dont le numéro de
          téléphone est 0637789029, et l&apos;adresse e-mail &quot;s.beaumont-
          avocat@outlook.fr&quot;.
        </p>
        <h3>ARTICLE 2 - L&apos;HEBERGEUR</h3>
        <p>
          L&apos;hébergeur du Site est la société Netlify, dont le siège social
          est situé au 2325 3RD STREET,SUITE 215, SAN FRANCISCO, CA 94107 (USA),
          avec l&apos;adresse mail de contact : support@netlify.com.
        </p>
        <h3>ARTICLE 3 - ACCES AU SITE</h3>
        <p>
          Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force
          majeure, interruption programmée ou non et pouvant découlant
          d&apos;une nécessité de maintenance. En cas de modification,
          interruption ou suspension du Site, l&apos;Editeur ne saurait être
          tenu responsable.
        </p>
        <h3>ARTICLE 4 - COLLECTE DES DONNEES</h3>
        <p>
          Le site est exempté de déclaration à la Commission Nationale
          Informatique et Libertés (CNIL) dans la mesure où il ne collecte
          aucune donnée concernant les utilisateurs.
        </p>
        <p>
          Toute utilisation, reproduction, diffusion, commercialisation,
          modification de toute ou partie du Site, sans autorisation de
          l&apos;Editeur est prohibée et pourra entraînée des actions et
          poursuites judiciaires telles que notamment prévues par le Code de la
          propriété intellectuelle et le Code civil.
        </p>
        <p>
          Rédigé sur{" "}
          <Link href="http://legalplace.fr">http://legalplace.fr</Link>
        </p>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
