export const metadata = { title: "Parcours" };

const etapes = [
  {
    periode: "Aujourd'hui",
    titre: "Développement logiciel & projets personnels",
    texte: "Conception et construction de produits complets : backend, interfaces, données, temps réel, conteneurisation et déploiement."
  },
  {
    periode: "2026",
    titre: "Transmission et travail collectif",
    texte: "Animation de sessions de formation en développement, structuration de supports et accompagnement de développeurs juniors sur les fondamentaux web, backend et système."
  },
  {
    periode: "Formation",
    titre: "UVCI — e-administration et transformation digitale",
    texte: "Parcours universitaire orienté transformation numérique, complété par un apprentissage technique quotidien et des projets construits de bout en bout."
  }
];

export default function Parcours() {
  return (
    <section className="section page-interne">
      <div className="conteneur">
        <div className="introduction-page">
          <span className="surtitre">Parcours</span>
          <h1>Apprendre en construisant, puis transmettre.</h1>
          <p>Mon parcours est centré sur la pratique : comprendre les fondamentaux, développer des projets complets, documenter ce que j'apprends et améliorer progressivement mes méthodes.</p>
        </div>
        <div className="chronologie">
          {etapes.map((etape) => (
            <article key={etape.titre}>
              <span>{etape.periode}</span>
              <div><h2>{etape.titre}</h2><p>{etape.texte}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
