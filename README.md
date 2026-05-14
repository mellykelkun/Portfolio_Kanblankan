# Portfolio - Kablankan Tiemele Israël Kévin

Portfolio professionnel présentant mes compétences et projets en développement.

## 🚀 Technologies

- **Node.js** (>= 18.0.0)
- **Express.js** - Framework web
- **HTML/CSS/JavaScript** - Frontend
- **Nodemailer** - Gestion des emails
- **Helmet** - Sécurité HTTP
- **CORS** - Gestion des requêtes cross-origin
- **Compression** - Compression des réponses
- **Morgan** - Logging des requêtes

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env
```

## 🔧 Configuration

Configurer les variables d'environnement dans le fichier `.env` :

```env
PORT=3000
NODE_ENV=development
PUBLIC_URL=http://localhost:3000
```

## 🏃 Démarrage

```bash
# Mode développement
npm run dev

# Mode production
npm start
```

## 📁 Structure du projet

```
portfolio/
├── public/           # Fichiers statiques (HTML, CSS, JS)
│   ├── index.html
│   ├── scripts/
│   └── styles/
├── src/              # Code source serveur
│   ├── app.js
│   ├── middleware/
│   └── routes/
├── server.js         # Point d'entrée
├── .env.example      # Exemple de configuration
└── render.yaml       # Configuration Render
```

## 🌐 Déploiement

Ce projet est configuré pour être déployé sur **Render** via le fichier `render.yaml`.

## 👤 Auteur

**Kablankan Tiemele Israël Kévin**

## 📄 Licence

MIT
