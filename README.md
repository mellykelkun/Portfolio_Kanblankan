# Portfolio — Kablankan Tiemele Israël Kévin

Portfolio professionnel multipage construit avec Next.js.

## Stack

- Next.js 16.3
- React 19
- CSS natif
- Render

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

## Déploiement

Le fichier `render.yaml` configure le build et le lancement Next.js sur Render. Le health check est disponible sur `/api/health`.
