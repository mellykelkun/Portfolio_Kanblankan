const http = require("http");
const next = require("next");

const port = Number(process.env.PORT || 3000);
const hote = "0.0.0.0";

const application = next({
  dev: false,
  hostname: hote,
  port
});

const gererRequete = application.getRequestHandler();

application
  .prepare()
  .then(() => {
    const serveur = http.createServer((requete, reponse) => {
      gererRequete(requete, reponse);
    });

    serveur.listen(port, hote, () => {
      console.log(`Portfolio disponible sur le port ${port}`);
    });
  })
  .catch((erreur) => {
    console.error("Impossible de démarrer le portfolio Next.js :", erreur);
    process.exit(1);
  });
