import Link from 'next/link'
import Navbar from '../components/Navbar.jsx'
import style from '../styles/Contact.module.css'
import Footer from '../components/Footer.jsx'
export default function Contact () {
    return (
        <div>
        
        <section id="contact"className={`${style.contact} container`}> 
        <header className={style.contact__title}>
            <h2>Contact</h2>    
        </header>
        <main>
            <p>
                4 rue Racine - 44000 NANTES
            </p>
            <div className={style.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.1526987409975!2d-1.5654145841892082!3d47.2135944230366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ec1cd22f4fd3%3A0x9c9ec7b0bd0b8d5b!2s4%20Rue%20Racine%2C%2044000%20Nantes!5e0!3m2!1sfr!2sfr!4v1669906496929!5m2!1sfr!2sfr" 
                    width="600" 
                    height="450" 
                    style={{border:0}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    className={style.iframe}>
                    
                </iframe>
            </div>
            <p>
                E-mail: <a href="mailto:s.beaumont-avocat@outlook.fr">s.beaumont-avocat@outlook.fr</a>
            </p>
            <p>
                Tél. : 07.49.91.04.02
            </p>
            </main>
        </section>
    </div>
    );
}