import CarteProjet from "../../composants/CarteProjet";
import { projets } from "../../donnees/projets";

export const metadata = {
  title: "Projets",
  description: "Sélection des projets et ressources techniques de Kablankan Tiemele."
};

export default function PageProjets() {
  return (
    <section className="section page-interne">
      <div className="conteneur">
        <div className="introduction-page">
          <span className="surtitre">{projets.length} projets & ressources</span>
          <h1>Produits, applications et outils techniques.</h1>
          <p>Cette sélection présente uniquement des projets construits, des MVP fonctionnels et des ressources techniques réellement travaillées. Les dépôts privés sont décrits sans exposer leur code ni leurs données sensibles.</p>
        </div>
        <div className="grille-projets">
          {projets.map((projet) => <CarteProjet projet={projet} key={projet.slug} />)}
        </div>
      </div>
    </section>
  );
}
