export const projets = [
  {
    slug: "fiers-artisans-app",
    nom: "Fiers Artisans — Application",
    type: "Marketplace mobile / Plateforme",
    statut: "Projet phare",
    depot: "Collectif-Dev/Fiers_Artisans",
    prive: true,
    resume: "Application complète reliant clients et artisans vérifiés en Côte d'Ivoire, avec géolocalisation, messagerie temps réel, abonnements et administration.",
    description: "Fiers Artisans est le cœur applicatif du produit. L'écosystème réunit une application Flutter pour les clients et artisans, une API NestJS, un espace d'administration Next.js et une infrastructure conteneurisée. Le projet couvre la recherche géolocalisée, les profils professionnels, la messagerie temps réel, la vérification documentaire et la gestion des abonnements artisans.",
    technologies: ["Flutter", "NestJS", "Next.js", "PostgreSQL", "PostGIS", "MongoDB", "Redis", "Docker"],
    points: ["Application mobile clients et artisans", "API et messagerie temps réel", "Géolocalisation avec PostGIS", "Administration web et infrastructure Docker"]
  },
  {
    slug: "fiers-artisans-presentation",
    nom: "Fiers Artisans — Présentation",
    type: "Site produit / Landing",
    statut: "Production",
    depot: "mellykelkun/fiers-artisans-landing",
    prive: true,
    resume: "Site multipage de présentation de Fiers Artisans avec des parcours distincts pour clients, artisans et investisseurs.",
    description: "Ce dépôt est la vitrine du produit Fiers Artisans. Il présente le fonctionnement de la marketplace, ses bénéfices, sa vision et ses parcours utilisateurs sans mélanger le code du produit principal avec sa communication publique.",
    technologies: ["Next.js", "React", "TypeScript", "PWA", "Render"],
    points: ["Parcours clients, artisans et investisseurs", "Architecture multipage", "SEO et métadonnées", "Déploiement continu"]
  },
  {
    slug: "booms-platform",
    nom: "BOOMS Platform",
    type: "Plateforme distribuée",
    statut: "Projet avancé",
    depot: "mellykelkun/BOM",
    prive: true,
    resume: "Plateforme de gestion, achat, vente et circulation d'œuvres numériques tokenisées avec application mobile, administration web et backend métier.",
    description: "BOOMS réunit une API FastAPI, un back-office Next.js, une application mobile React Native et PostgreSQL. Le système couvre catalogue, marché, portefeuille, cadeaux, support, paiements et mises à jour temps réel.",
    technologies: ["FastAPI", "Next.js", "React Native", "PostgreSQL", "WebSocket"],
    points: ["Architecture en trois applications", "Transactions et portefeuille", "Communication temps réel", "Authentification et sécurité"]
  },
  {
    slug: "center-platform",
    nom: "Center Platform",
    type: "SaaS / Stockage collaboratif",
    statut: "Projet avancé",
    depot: "mellykelkun/center_drive_100",
    prive: true,
    resume: "Système de gestion de fichiers collaboratif avec stockage hiérarchique, transferts sécurisés, corbeille et notifications temps réel.",
    description: "Center Platform combine une API Express TypeScript, PostgreSQL avec Prisma, Redis, Socket.IO et un frontend React. Le projet traite les opérations lourdes via des jobs et organise les uploads, transferts et nettoyages automatiques.",
    technologies: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Redis", "Socket.IO"],
    points: ["Uploads et stockage hiérarchique", "Jobs de corbeille et maintenance", "Transferts entre comptes", "Notifications temps réel"]
  },
  {
    slug: "heylee",
    nom: "Heylee",
    type: "Messagerie temps réel",
    statut: "MVP actif",
    depot: "mellykelkun/Heylee2b2",
    prive: true,
    resume: "Application de messagerie instantanée avec identité propriétaire, conversations, médias, présence, contacts et fonctionnement temps réel.",
    description: "Heylee est l'itération la plus complète du projet de messagerie. Le client Flutter communique avec un backend Node.js connecté à PostgreSQL, MongoDB et Redis. L'ensemble gère messages, fichiers, présence, sécurité, traitements médias et file hors ligne.",
    technologies: ["Flutter", "Node.js", "PostgreSQL", "MongoDB", "Redis", "WebSocket"],
    points: ["Messagerie et groupes", "Pipeline média", "Présence et événements temps réel", "Infrastructure conteneurisée"]
  },
  {
    slug: "match-intel-hub",
    nom: "Match Intel Hub",
    type: "Data platform",
    statut: "V1",
    depot: "mellykelkun/Match_Intel_Hub",
    prive: true,
    resume: "Hub d'agrégation de données football qui collecte, normalise et prépare des dossiers pré-match exploitables.",
    description: "Le système centralise plusieurs fournisseurs de données sportives, orchestre les traitements avec des workers, persiste les données et génère des exports Markdown. Un dashboard permet de suivre les matchs, fournisseurs, jobs et alertes.",
    technologies: ["NestJS", "Next.js", "PostgreSQL", "Redis", "BullMQ", "MinIO", "Docker"],
    points: ["Agrégation multi-fournisseurs", "Workers asynchrones", "Exports versionnés", "Monitoring et reverse proxy"]
  },
  {
    slug: "paie-server",
    nom: "Paie Server",
    type: "Paiement self-hosted",
    statut: "Produit technique",
    depot: "mellykelkun/paie-server",
    prive: true,
    resume: "Application self-hosted pour orchestrer des paiements manuels et Mobile Money sans faire transiter l'argent par la plateforme.",
    description: "Paie Server crée des liens de paiement, collecte les reçus, centralise la validation marchand et notifie les applications externes après décision. Le projet intègre un sandbox et une configuration orientée déploiement Docker sur VPS.",
    technologies: ["Node.js", "Docker", "PostgreSQL", "Webhooks", "OCR"],
    points: ["Liens de paiement", "Validation manuelle des preuves", "Webhooks de retour", "Sandbox d'intégration"]
  },
  {
    slug: "forexbot",
    nom: "ForexBot",
    type: "Trading algorithmique",
    statut: "Expérimental",
    depot: "mellykelkun/ForexBot",
    prive: true,
    resume: "Système de trading algorithmique connecté à MetaTrader 5 avec moteur décisionnel multi-provider, contrôle du risque et dashboard sécurisé.",
    description: "Le projet orchestre collecte de marché, décisions, validation du risque, exécution MT5 et journalisation. L'objectif technique est surtout la robustesse : garde-fous, limites, kill switch, monitoring et reprise des processus.",
    technologies: ["Python", "MetaTrader 5", "Flask", "HTTP", "Risk management"],
    points: ["Analyse multi-timeframes", "Garde-fous de risque", "Journal de trading", "Dashboard de contrôle"]
  },
  {
    slug: "mini-skills-agent",
    nom: "Mini Skills Agent",
    type: "Outil développeur local",
    statut: "Prototype fonctionnel",
    depot: "mellykelkun/MINI_SKILLS_AGENT.V1",
    prive: false,
    resume: "CLI locale qui orchestre plusieurs rôles de développement pour architecture, backend, revue et génération de tests.",
    description: "Ce projet explore une chaîne de travail locale et extensible autour d'Ollama. L'orchestrateur reste volontairement simple, avec des contrats de données et une écriture directe dans les dossiers de travail.",
    technologies: ["Python", "Typer", "Ollama", "CLI"],
    points: ["Pipeline local", "Architecture modulaire", "Revue et tests", "Aucune dépendance cloud obligatoire"]
  },
  {
    slug: "promptube-locale",
    nom: "Promptube Locale",
    type: "Outil interne",
    statut: "Développement actif",
    depot: "mellykelkun/promptube-locale",
    prive: true,
    resume: "Espace local de travail pour structurer et administrer des modules de développement réutilisables.",
    description: "Le dépôt sert de base locale pour organiser des modules, leurs règles et leurs workflows de travail. Il privilégie une structure révisable et une utilisation hors production publique.",
    technologies: ["Node.js", "Markdown", "Git"],
    points: ["Modules réutilisables", "Documentation structurée", "Workflows de développement", "Gestion locale"]
  },
  {
    slug: "roue-fortune-hk",
    nom: "Roue de la Fortune HK",
    type: "Application web",
    statut: "Projet client / démonstrateur",
    depot: "mellykelkun/roue-de-la-fortune-hk",
    prive: true,
    resume: "Application de jeu avec roue, portefeuille de gains, bonus de partage, commentaires et demandes de retrait.",
    description: "Le projet organise un parcours joueur simple : session, tirage, cumul, seuil de retrait et demande finale. Une couche de commentaires publics complète l'expérience.",
    technologies: ["Web", "JavaScript", "Gestion de session"],
    points: ["Mécanique de jeu", "Portefeuille", "Retraits", "Commentaires utilisateurs"]
  },
  {
    slug: "mes-cours-dev",
    nom: "Mes cours en dev",
    type: "Formation / Ressources",
    statut: "Actif",
    depot: "mellykelkun/Mes_cours_en_devs",
    prive: true,
    resume: "Dépôt personnel de cours, notes et supports liés au développement logiciel.",
    description: "Ce dépôt centralise des ressources pédagogiques utilisées pour apprendre, réviser et transmettre des notions de développement.",
    technologies: ["Documentation", "Développement", "Git"],
    points: ["Supports de cours", "Révisions", "Transmission", "Notes techniques"]
  },
  {
    slug: "portfolio-kablankan",
    nom: "Portfolio Kablankan",
    type: "Portfolio",
    statut: "Production",
    depot: "mellykelkun/Portfolio_Kanblankan",
    prive: false,
    resume: "Portfolio personnel construit avec Next.js et déployable sur Render et Vercel.",
    description: "Cette version remplace l'ancienne SPA Express par une architecture Next.js multipage, plus rapide à parcourir et plus simple à maintenir.",
    technologies: ["Next.js", "React", "CSS", "Render", "Vercel"],
    points: ["App Router", "Pages projet dynamiques", "Responsive", "Déploiement Render et Vercel"]
  }
];

export const projetsPhares = projets.filter((projet) => [
  "fiers-artisans-app",
  "booms-platform",
  "center-platform",
  "heylee",
  "match-intel-hub",
  "paie-server"
].includes(projet.slug));

export function trouverProjet(slug) {
  return projets.find((projet) => projet.slug === slug);
}
