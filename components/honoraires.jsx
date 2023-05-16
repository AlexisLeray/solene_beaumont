import Link from 'next/link'
import Navbar from './Navbar.jsx'
import style from '../styles/Fees.module.css'
import Footer from './Footer.jsx'
export default function Honoraires () {
    return (
        <div>
            
        <section id="honoraire">
            
         <header className="component__header container">
                <h2>Honoraires</h2>   
            </header>
            <main className="container">
                <p>
                    Selon la loi n° 2015-990 du 6 août 2015, la fixation de ses honoraires donne lieu à la rédaction d’une
                    convention d’honoraires signée par l’Avocat et par son client.
                </p> 
                <p>
                    Les honoraires seront fixés en accord avec le client au regard de la nature du dossier, de sa
                    complexité ainsi que des diligences à effectuer durant la procédure.
                </p> 
                <p>
                    Les honoraires seront évoqués dès le premier rendez-vous.
                </p> 
                <ul>
                    <li>
                        Au temps passé : le montant des honoraires est déterminé en fonction du nombre d’heures
                        qu’il aura été nécessaire de consacrer au dossier. Une facture détaillée sera alors transmise
                        pour justifier de l’ensemble des prestations effectuées. Le client recevra alors une
                        facturation détaillée des diligences accomplies.
                    </li>
                    <li>
                        Au forfait : le montant des honoraires est fixé de manière définitive préalablement à toutes
                        prestations et indiqué clairement dans la convention d’honoraires.
                    </li>
                </ul>
                <p>
                    Un honoraire de résultat pourra être envisagé suivant la décision obtenue, calculé à partir des gains
                    obtenus ou des économies réalisées grâce à l’intervention du cabinet.
                </p>
                </main>
        </section>
        
    </div>
    );
}