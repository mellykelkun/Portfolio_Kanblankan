# Portfolio — Kablankan Tiemele Israël Kévin

Portfolio professionnel : présentation, projets, interface interactive côté client, formulaire de contact et point de contrôle de santé pour l’hébergement.

Démo déployée (exemple configuré dans `render.yaml`) : [https://portfolio-kablankan.onrender.com](https://portfolio-kablankan.onrender.com)

## Prérequis

- **Node.js** >= 18 (voir `engines` dans `package.json`)

## Technologies

| Couche | Détail |
|--------|--------|
| Serveur | **Express** (`server.js`, `src/app.js`) |
| Frontend | **React 18** (scripts UMD via unpkg) et **JSX** transpilé dans le navigateur avec **Babel Standalone** — pas de bundler (Vite/Webpack) |
| Styles | **CSS** (`public/styles/`) |
| Sécurité / HTTP | **Helmet** (CSP et en-têtes configurés dans `src/app.js`), **CORS** |
| Limitation de débit | **express-rate-limit** (limite globale sur `/api/` et limite dédiée pour le contact) |
| Email | **Nodemailer** (optionnel si SMTP non configuré) |
| Observabilité | **Morgan** (logs HTTP), **compression** |
| Config | **dotenv** |

Le script `npm run build` n’effectue pas de compilation frontend ; il est présent pour l’alignement avec certaines plateformes d’hébergement (`echo` explicite dans `package.json`).

## Installation

```bash
npm install
cp .env.example .env
```

Puis éditer `.env` selon la section Configuration.

## Démarrage

```bash
# Développement (rechargement via nodemon)
npm run dev

# Production
npm start
```

## Configuration

Toutes les variables attendues sont documentées dans [`.env.example`](.env.example). Résumé :

| Variable | Rôle |
|----------|------|
| `PORT` | Port d’écoute (défaut : 3000) |
| `NODE_ENV` | `development` ou `production` |
| `PUBLIC_URL` | URL publique du site (logs au démarrage, et **origine CORS en production** pour le middleware `cors` dans `src/app.js`) |
| `CORS_ORIGIN` | Présente dans l’exemple et sur Render ; le middleware `cors` utilise **`PUBLIC_URL`** en production, pas cette variable. Le fichier [`src/middleware/security.js`](src/middleware/security.js) pourrait s’en servir s’il était branché (il ne l’est pas actuellement). |
| `RATE_LIMIT_WINDOW_MS` | Fenêtre (ms) pour la limite globale sur les routes `/api/*` |
| `RATE_LIMIT_MAX` | Nombre max de requêtes par fenêtre pour cette limite globale |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Envoi d’emails via le formulaire contact ; **optionnel** |
| `CONTACT_EMAIL` | Destinataire des messages (sinon valeur de repli dans le code) |

**Contact sans SMTP** : si `SMTP_HOST`, `SMTP_USER` et `SMTP_PASS` ne sont pas tous définis, aucun mail n’est envoyé ; le message est tout de même **journalisé dans la console serveur** et une réponse JSON de succès est renvoyée au client (voir `src/routes/contact.js`).

## API

### `GET /api/health`

Utilisé par Render (`healthCheckPath` dans `render.yaml`). Réponse JSON typique :

- `success`, `status`, `service`, `version`, `timestamp`, `uptime`, `environment`

### `POST /api/contact`

- **Corps JSON** : `name`, `email`, `message` (obligatoires, validés côté serveur) ; `subject` optionnel.
- **Succès** : `200` avec `{ "success": true, "message": "..." }`.
- **Erreur de validation** : `400` avec `{ "success": false, "errors": [...] }`.
- **Limite de débit** : limite **globale** sur toutes les routes sous `/api/` (paramètres `RATE_LIMIT_*`) ; route contact avec une limite **plus stricte** (5 requêtes par fenêtre de 15 minutes) — en cas de dépassement, réponse type `429` avec message JSON.
- **Erreur serveur** : `500`.

## Structure du projet

```
portfolio/
├── server.js                 # Création du serveur HTTP, timeouts, écoute
├── package.json
├── render.yaml               # Déploiement Render
├── .env.example
├── public/
│   ├── index.html            # Shell HTML, chargement React / Babel CDN
│   ├── styles/
│   │   └── main.css
│   └── scripts/
│       ├── bootstrap/
│       │   └── app.jsx       # Point d’entrée React côté navigateur
│       └── core/             # Composants, hooks, traductions, etc.
├── src/
│   ├── app.js                # Express : middlewares, static, routes API, fallback SPA
│   ├── routes/
│   │   └── contact.js        # POST /api/contact
│   └── middleware/
│       └── security.js       # Utilitaires (origine, honeypot, etc.) — non importés dans app.js pour l’instant
```

## Déploiement (Render)

Le fichier [`render.yaml`](render.yaml) décrit un service web Node :

- **Région** : Frankfurt  
- **Build** : `npm install`  
- **Démarrage** : `node server.js`  
- **Health check** : `GET /api/health`  
- Variables d’environnement injectées en production (`NODE_ENV`, `PORT`, `PUBLIC_URL`, `CORS_ORIGIN`, limites de débit, etc.) — adapter les URLs à ton domaine si besoin.

## Auteur

**Kablankan Tiemele Israël Kévin**

## Licence

MIT
