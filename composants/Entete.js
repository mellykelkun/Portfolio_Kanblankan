"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const liens = [
  ["/", "Accueil"],
  ["/projets", "Projets"],
  ["/competences", "Compétences"],
  ["/parcours", "Parcours"],
  ["/contact", "Contact"]
];

function lienEstActif(cheminActuel, href) {
  if (href === "/") {
    return cheminActuel === "/";
  }

  return cheminActuel === href || cheminActuel.startsWith(`${href}/`);
}

export default function Entete() {
  const cheminActuel = usePathname();

  return (
    <header className="entete">
      <div className="conteneur barre-navigation">
        <Link className="marque" href="/" aria-label="Accueil">
          <span className="marque-signe">KT</span>
          <span className="marque-texte">Kablankan Tiemele</span>
        </Link>
        <nav className="navigation" aria-label="Navigation principale">
          {liens.map(([href, libelle]) => {
            const actif = lienEstActif(cheminActuel, href);

            return (
              <Link
                className={`lien-navigation${actif ? " actif" : ""}`}
                href={href}
                key={href}
                aria-current={actif ? "page" : undefined}
              >
                {libelle}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
