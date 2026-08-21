import "./globals.css";
import "./transitions.css";
import "./profil.css";
import "./decoration.css";
import Entete from "../composants/Entete";
import PiedPage from "../composants/PiedPage";
import TransitionPage from "../composants/TransitionPage";
import FondTechnique from "../composants/FondTechnique";

function obtenirUrlSite() {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    "https://portfolio-kanblankan.onrender.com";

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
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Kablankan Tiemele — Développeur Full Stack",
    description: "Produits web et mobiles, backend, systèmes temps réel, DevOps et infrastructure.",
    url: "/",
    siteName: "Portfolio Kablankan Tiemele",
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kablankan Tiemele — Développeur Full Stack",
    description: "Produits web et mobiles, backend, systèmes temps réel, DevOps et infrastructure."
  }
};

export default function MiseEnPage({ children }) {
  return (
    <html lang="fr">
      <body>
        <FondTechnique />
        <Entete />
        <main>
          <TransitionPage>{children}</TransitionPage>
        </main>
        <PiedPage />
      </body>
    </html>
  );
}
