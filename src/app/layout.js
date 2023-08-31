import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solène Beaumont, avocate au barreau de Nantes",
  description:
    "Maître Solène BEAUMONT intervient dans tous les domaines du droit pénal. Que vous soyez victime ou mis en cause, Maître Solène BEAUMONT vous accompagne et vous représente tout au long de la phase procédurale. Elle vous assiste aussi bien au cours de l’enquête (dépôt de plainte, garde à vue, audition libre …), de l’information judiciaire ou encore de l’audience devant le Tribunal de Police, le Tribunal Correctionnel ou la Cour d’Assises. Maître Solène BEAUMONT intervient également pour les mineurs qui sont auteurs d’infraction devant le Juge des Enfants ou devant le Tribunal pour Enfants",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
