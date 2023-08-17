import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Legal() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <h2>Mention Légales</h2>
        <p>
          <h3>Informations légales</h3>
          <p>
            {" "}
            La navigation sur ce site est soumise aux présentes conditions
            d’utilisation. Editeur Ce site est édité par la société Solène
            Beaumont Avocat. Le directeur de publication est Solène Beaumont.
          </p>{" "}
          <h3>Concepteur</h3>
          <p> Le concepteur du site est M. Leray.</p>
          <h3>Hébergeur</h3>
          <p> Ce site est hébergé par la société ***********.</p>
          <p>Siège social : ******************.</p>
          <p>
            <h3>Loi applicable</h3>{" "}
            <p>Le contenu de ce site est régi par la loi française.</p>
          </p>{" "}
          <h3>Données personnelles</h3>{" "}
          <p>
            Les fichiers nominatifs qui font l’objet d’un traitement informatisé
            sur ce site sont déclarés à la Commission Nationale Informatique et
            Liberté. En application de la loi Informatique et Libertés n°78-17
            du 6 janvier 1978, vous disposez d’un droit d’accès, d’opposition,
            de retrait et de rectification de données vous concernant. Vous
            pouvez à tout moment exercer ce droit en adressant votre demande par
            écrit auprès de ****** à l’adresse suivante : *****@****
          </p>
          <p>
            {" "}
            Des données non personnelles sont collectées lors de votre
            navigation, par un système de cookies, à des fins statistiques. Ces
            fichiers stockés sur votre ordinateur permettent à *******
            d’enregistrer les informations relatives à votre navigation sur le
            site ********. En aucun cas ces données ne nous permettent de vous
            identifier. Vous pouvez vous opposer à l’enregistrement de cookies
            en configurant votre navigateur selon les modalités détaillées sur
            le site de la Commission Nationale Informatique et Libertés
            (www.cnil.fr).
          </p>
        </p>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
