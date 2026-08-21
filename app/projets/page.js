import CarteProjet from "../../composants/CarteProjet";
import { projets } from "../../donnees/projets";

export const metadata = {
  title: "Projets",
  description: "Sélection complète des projets et dépôts de Kablankan Tiemele."
};

export default function PageProjets() {
  return (
    <section className="section page-interne">
      <div className="conteneur">
        <div className="introduction-page">
          <span className="surtitre">17 dépôts personnels</span>
          <h1>Projets, produits et laboratoires.</h1>
          <p>Je garde ici une vue honnête de mon travail : des produits avancés, des MVP, des outils internes et quelques dépôts d'expérimentation. Les dépôts privés sont décrits sans exposer leur code ni leurs données sensibles.</p>
        </div>
        <div className="grille-projets">
          {projets.map((projet) => <CarteProjet projet={projet} key={projet.slug} />)}
        </div>
      </div>
    </section>
  );
}
