import "./globals.css";
import "./transitions.css";
import "./profil.css";
import Entete from "../composants/Entete";
import PiedPage from "../composants/PiedPage";
import TransitionPage from "../composants/TransitionPage";

function obtenirUrlSite() {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    "https://portfolio-kablankan.onrender.com";

  return url.startsWith("http://") || url.startsWith("https://")
    ? url
    : `https://${url}`;
}

export const metadata = {
  metadataBase: new URL(obtenirUrlSite()),
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
        <main>
          <TransitionPage>{children}</TransitionPage>
        </main>
        <PiedPage />
      </body>
    </html>
  );
}
