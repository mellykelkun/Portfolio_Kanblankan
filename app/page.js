import Link from "next/link";
import CarteProjet from "../composants/CarteProjet";
import { projetsPhares } from "../donnees/projets";

export default function Accueil() {
  return (
    <>
      <section className="hero">
        <div className="conteneur grille-hero">
          <div className="hero-contenu">
            <span className="surtitre">Développeur Full Stack · Backend · Infrastructure</span>
            <h1>Je construis des produits numériques <em>clairs, solides et exploitables.</em></h1>
            <p className="hero-texte">Je travaille sur des applications web et mobiles, des API, des systèmes temps réel et leur déploiement. Mon approche : comprendre le besoin, garder une architecture lisible et livrer quelque chose qui fonctionne réellement.</p>
            <div className="hero-actions">
              <Link className="bouton bouton-primaire" href="/projets">Explorer mes projets</Link>
              <Link className="bouton bouton-secondaire" href="/contact">Me contacter</Link>
            </div>
          </div>
          <aside className="carte-profil">
            <div className="carte-profil-entete">
              <span className="point-orange"></span>
              <span>Disponible pour opportunités & collaborations</span>
            </div>
            <div className="initiales">KT</div>
            <h2>Kablankan Tiemele Israël Kévin</h2>
            <p>Basé en Côte d'Ivoire. Je développe, j'apprends, je documente et je transforme des idées en systèmes concrets.</p>
            <div className="mini-grille">
              <div><strong>17</strong><span>dépôts personnels</span></div>
              <div><strong>Full Stack</strong><span>web & backend</span></div>
              <div><strong>DevOps</strong><span>Docker & infra</span></div>
              <div><strong>Temps réel</strong><span>WebSocket & queues</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-sombre">
        <div className="conteneur">
          <div className="entete-section inverse">
            <span className="surtitre">Ce que je fais</span>
            <h2>Du code applicatif jusqu'à l'exploitation.</h2>
          </div>
          <div className="grille-expertises">
            <article><span>01</span><h3>Backend & API</h3><p>API REST, authentification, base de données, logique métier, sécurité et services temps réel.</p></article>
            <article><span>02</span><h3>Applications</h3><p>Interfaces web et mobiles orientées produit, avec des parcours simples et une architecture maintenable.</p></article>
            <article><span>03</span><h3>Infrastructure</h3><p>Docker, reverse proxy, bases de données, cache, files de jobs, monitoring et déploiement.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="conteneur">
          <div className="entete-section avec-action">
            <div><span className="surtitre">Sélection</span><h2>Projets phares</h2></div>
            <Link className="lien-fleche" href="/projets">Voir les 17 dépôts →</Link>
          </div>
          <div className="grille-projets">
            {projetsPhares.map((projet) => <CarteProjet projet={projet} key={projet.slug} />)}
          </div>
        </div>
      </section>

      <section className="section bandeau-contact">
        <div className="conteneur bandeau-contact-contenu">
          <div><span className="surtitre">Construisons quelque chose</span><h2>Besoin d'un développeur capable de comprendre aussi l'infrastructure ?</h2></div>
          <Link className="bouton bouton-noir" href="/contact">Parler du besoin</Link>
        </div>
      </section>
    </>
  );
}
