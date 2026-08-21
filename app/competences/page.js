const groupes = [
  {
    titre: "Backend",
    texte: "Construire des API et des services métier simples à relire, sécurisés et observables.",
    elements: ["Node.js", "Express", "NestJS", "FastAPI", "REST", "WebSocket", "Authentification", "Jobs asynchrones"]
  },
  {
    titre: "Frontend & mobile",
    texte: "Créer des interfaces utiles sans faire dépendre le produit d'une couche visuelle trop complexe.",
    elements: ["Next.js", "React", "TypeScript", "Flutter", "React Native", "Responsive", "PWA"]
  },
  {
    titre: "Données",
    texte: "Choisir le stockage selon le besoin et comprendre les flux avant d'ajouter de la complexité.",
    elements: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle", "MinIO", "SQL"]
  },
  {
    titre: "DevOps & systèmes",
    texte: "Faire tourner le logiciel : conteneurs, réseau, reverse proxy, déploiement, logs et supervision.",
    elements: ["Linux", "Docker", "Docker Compose", "Nginx", "GitHub Actions", "Render", "Prometheus", "Grafana"]
  }
];

export const metadata = { title: "Compétences" };

export default function Competences() {
  return (
    <section className="section page-interne">
      <div className="conteneur">
        <div className="introduction-page">
          <span className="surtitre">Compétences</span>
          <h1>Une vision full stack, avec une forte base backend et système.</h1>
          <p>Je préfère maîtriser les fondamentaux et comprendre les flux de bout en bout plutôt que multiplier les outils sans nécessité.</p>
        </div>
        <div className="grille-competences">
          {groupes.map((groupe) => (
            <article className="bloc-competence" key={groupe.titre}>
              <h2>{groupe.titre}</h2>
              <p>{groupe.texte}</p>
              <div className="liste-technologies grande">
                {groupe.elements.map((element) => <span key={element}>{element}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
