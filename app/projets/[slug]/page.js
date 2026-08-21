import Link from "next/link";
import { notFound } from "next/navigation";
import { projets, trouverProjet } from "../../../donnees/projets";

export function generateStaticParams() {
  return projets.map((projet) => ({ slug: projet.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const projet = trouverProjet(slug);
  if (!projet) return {};
  return { title: projet.nom, description: projet.resume };
}

export default async function PageProjet({ params }) {
  const { slug } = await params;
  const projet = trouverProjet(slug);
  if (!projet) notFound();

  return (
    <section className="section page-projet-detail">
      <div className="conteneur">
        <Link className="retour" href="/projets">← Tous les projets</Link>
        <div className="projet-detail-hero">
          <div>
            <span className="surtitre">{projet.type} · {projet.statut}</span>
            <h1>{projet.nom}</h1>
            <p>{projet.resume}</p>
          </div>
          <div className="bloc-depot">
            <span>Dépôt</span>
            <strong>{projet.depot}</strong>
            {projet.prive ? <small>Dépôt privé</small> : <a href={`https://github.com/${projet.depot}`} target="_blank" rel="noreferrer">Ouvrir sur GitHub →</a>}
          </div>
        </div>

        <div className="grille-detail">
          <article className="bloc-detail principal">
            <span className="surtitre">Contexte</span>
            <h2>Ce que couvre le projet</h2>
            <p>{projet.description}</p>
          </article>
          <article className="bloc-detail">
            <span className="surtitre">Stack</span>
            <div className="liste-technologies grande">
              {projet.technologies.map((technologie) => <span key={technologie}>{technologie}</span>)}
            </div>
          </article>
          <article className="bloc-detail">
            <span className="surtitre">Points clés</span>
            <ul className="liste-points">
              {projet.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
