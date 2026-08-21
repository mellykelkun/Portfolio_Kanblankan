import "./globals.css";
import Entete from "../composants/Entete";
import PiedPage from "../composants/PiedPage";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-kablankan.onrender.com"),
  title: {
    default: "Kablankan Tiemele — Développeur Full Stack",
    template: "%s · Kablankan Tiemele"
  },
  description: "Portfolio de Kablankan Tiemele Israël Kévin : développement full stack, backend, systèmes, DevOps et produits numériques.",
  openGraph: {
    title: "Kablankan Tiemele — Développeur Full Stack",
    description: "Produits web, backend, systèmes distribués et infrastructure.",
    type: "website"
  }
};

export default function MiseEnPage({ children }) {
  return (
    <html lang="fr">
      <body>
        <Entete />
        <main>{children}</main>
        <PiedPage />
      </body>
    </html>
  );
}
