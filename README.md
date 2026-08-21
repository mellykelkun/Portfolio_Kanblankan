# Portfolio — Kablankan Tiemele Israël Kévin

Portfolio professionnel multipage construit avec Next.js.

## Stack

- Next.js 16.3
- React 19
- CSS natif
- Render
- Vercel

Aucune bibliothèque UI, aucun framework CSS et aucune dépendance d'animation.

## Démarrage

```bash
npm install
npm run dev
```

Production :

```bash
npm run build
npm start
```

## Structure

```txt
app/
  page.js
  projets/
  competences/
  parcours/
  contact/
  api/health/
composants/
donnees/
```

Les textes, variables et composants du projet sont nommés en français quand la syntaxe du framework ne l'impose pas autrement.

## Transitions

Les changements de route utilisent les navigations client de Next.js, avec une animation CSS légère d'entrée de page et un indicateur orange. Le menu indique également la page active.

Les animations sont automatiquement désactivées quand le système de l'utilisateur demande une réduction des mouvements avec `prefers-reduced-motion`.

## Déploiement Render

Le fichier `render.yaml` configure le build et le lancement Next.js sur Render. `server.js` reste présent pour assurer la compatibilité avec le service Render historique qui démarre avec `node server.js`.

Le health check est disponible sur :

```txt
/api/health
```

## Déploiement Vercel

Le dépôt est également compatible avec Vercel. Le fichier `vercel.json` déclare explicitement le framework Next.js et la commande de build.

Depuis Vercel :

1. créer un nouveau projet ;
2. importer `mellykelkun/Portfolio_Kanblankan` depuis GitHub ;
3. laisser le framework détecté sur `Next.js` ;
4. laisser le dossier racine sur `./` ;
5. lancer le déploiement.

Vercel exécute le build Next.js directement et n'utilise pas le serveur personnalisé réservé à Render.

Pour utiliser un domaine personnalisé comme URL canonique sur n'importe quelle plateforme, définir :

```env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

Sans cette variable, Vercel utilise son URL de production système et Render utilise l'URL publique configurée dans son environnement.
