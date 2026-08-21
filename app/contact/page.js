export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <section className="section page-interne page-contact">
      <div className="conteneur grille-contact">
        <div>
          <span className="surtitre">Contact</span>
          <h1>Un projet, une mission ou une opportunité ?</h1>
          <p>Le moyen le plus direct reste l'email. Pour voir mon activité technique publique, GitHub est également disponible.</p>
        </div>
        <div className="carte-contact">
          <a href="mailto:tiemele.kablankan@uvci.edu.ci"><span>Email</span><strong>tiemele.kablankan@uvci.edu.ci</strong><em>Écrire →</em></a>
          <a href="https://github.com/mellykelkun" target="_blank" rel="noreferrer"><span>GitHub</span><strong>@mellykelkun</strong><em>Voir le profil →</em></a>
          <a href="https://www.linkedin.com/in/kablankan-tiemele-isra%C3%ABl-kevin-kablankan-91ab27408" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Kablankan Tiemele</strong><em>Ouvrir →</em></a>
        </div>
      </div>
    </section>
  );
}
