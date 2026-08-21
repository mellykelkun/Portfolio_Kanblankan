import Link from "next/link";

export default function CarteProjet({ projet }) {
  return (
    <article className="carte-projet">
      <div className="carte-projet-haut">
        <span className="etiquette">{projet.type}</span>
        <span className="statut">{projet.statut}</span>
      </div>
      <h3>{projet.nom}</h3>
      <p>{projet.resume}</p>
      <div className="liste-technologies">
        {projet.technologies.slice(0, 5).map((technologie) => (
          <span key={technologie}>{technologie}</span>
        ))}
      </div>
      <div className="actions-carte">
        <Link className="lien-fleche" href={`/projets/${projet.slug}`}>Voir le projet →</Link>
        {!projet.prive && (
          <a className="lien-secondaire" href={`https://github.com/${projet.depot}`} target="_blank" rel="noreferrer">GitHub</a>
        )}
      </div>
    </article>
  );
}
