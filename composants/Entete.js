import Link from "next/link";

const liens = [
  ["/", "Accueil"],
  ["/projets", "Projets"],
  ["/competences", "Compétences"],
  ["/parcours", "Parcours"],
  ["/contact", "Contact"]
];

export default function Entete() {
  return (
    <header className="entete">
      <div className="conteneur barre-navigation">
        <Link className="marque" href="/" aria-label="Accueil">
          <span className="marque-signe">KT</span>
          <span className="marque-texte">Kablankan Tiemele</span>
        </Link>
        <nav className="navigation" aria-label="Navigation principale">
          {liens.map(([href, libelle]) => (
            <Link href={href} key={href}>{libelle}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
