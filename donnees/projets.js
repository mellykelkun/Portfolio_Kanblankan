export const projets = [
  {
    slug: "fiers-artisans",
    nom: "Fiers Artisans",
    type: "Produit / Marketplace",
    statut: "Projet phare",
    depot: "mellykelkun/fiers-artisans-landing",
    prive: true,
    resume: "Site multipage de présentation d'une marketplace qui met en relation clients et artisans, avec des parcours distincts pour clients, professionnels et investisseurs.",
    description: "Le projet travaille la présentation d'un produit destiné au marché ivoirien : découverte des artisans, confiance, visibilité professionnelle et préparation au lancement. Le site vitrine est structuré en plusieurs parcours et pensé pour le SEO, la PWA et le déploiement continu.",
    technologies: ["Next.js", "React", "TypeScript", "PWA", "Render"],
    points: ["Parcours clients, artisans et investisseurs", "Architecture multipage", "SEO et métadonnées", "Déploiement Render avec CI/CD"]
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
    statut: "Prototype",
    depot: "mellykelkun/MINI_SKILLS_AGENT.V1",
    prive: false,
    resume: "CLI locale qui orchestre plusieurs rôles de développement pour architecture, backend, revue et génération de tests.",
    description: "Ce projet explore une chaîne de travail locale et extensible autour d'Ollama. L'orchestrateur reste volontairement simple, avec des contrats de données et une écriture directe dans les dossiers de travail.",
    technologies: ["Python", "Typer", "Ollama", "CLI"],
    points: ["Pipeline local", "Architecture modulaire", "Revue et tests", "Aucune dépendance cloud obligatoire"]
  },
  {
    slug: "heylee-prototype",
    nom: "Heylee — Prototype initial",
    type: "Prototype / Architecture",
    statut: "Itération précédente",
    depot: "mellykelkun/heylee",
    prive: true,
    resume: "Première architecture du projet Heylee autour de la messagerie, des statuts et du réseau social léger.",
    description: "Cette première itération a servi à cadrer l'architecture backend, le temps réel, le stockage, les notifications et la stratégie de montée en charge avant la version Flutter plus complète.",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "Socket.IO"],
    points: ["Cadrage produit", "Messagerie temps réel", "Architecture scalable", "Sécurité applicative"]
  },
  {
    slug: "promptube-locale",
    nom: "Promptube Locale",
    type: "Outil interne",
    statut: "Développement",
    depot: "mellykelkun/promptube-locale",
    prive: true,
    resume: "Espace local de travail pour structurer et administrer des modules de développement réutilisables.",
    description: "Le dépôt sert de base locale pour organiser des modules, leurs règles et leurs workflows de travail. Il privilégie une structure révisable et une utilisation hors production publique.",
    technologies: ["Node.js", "Markdown", "Git"],
    points: ["Modules réutilisables", "Documentation structurée", "Workflows de développement", "Gestion locale"]
  },
  {
    slug: "promptube",
    nom: "Promptube",
    type: "Produit en construction",
    statut: "Base de projet",
    depot: "mellykelkun/promptube",
    prive: true,
    resume: "Dépôt principal associé au projet Promptube et à son organisation de modules.",
    description: "Ce dépôt sert de socle au projet Promptube. Les travaux détaillés sont principalement réalisés dans l'environnement local dédié avant consolidation.",
    technologies: ["Git", "Documentation", "Modules"],
    points: ["Socle projet", "Versionnement", "Préparation des modules"]
  },
  {
    slug: "projet-prompt",
    nom: "Projet Prompt",
    type: "R&D",
    statut: "Expérimentation",
    depot: "mellykelkun/projet_prompt",
    prive: true,
    resume: "Dépôt d'expérimentation autour de la structuration de prompts, règles et méthodes de travail assistées.",
    description: "Le projet sert de laboratoire pour formaliser des méthodes reproductibles, tester différentes structures et conserver les versions utiles.",
    technologies: ["Markdown", "Git", "Workflows"],
    points: ["Expérimentation", "Structuration", "Versionnement", "Méthodologie"]
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
    type: "Formation",
    statut: "Actif",
    depot: "mellykelkun/Mes_cours_en_devs",
    prive: true,
    resume: "Dépôt personnel de cours, notes et supports liés au développement logiciel.",
    description: "Ce dépôt centralise des ressources pédagogiques utilisées pour apprendre, réviser et transmettre des notions de développement.",
    technologies: ["Documentation", "Développement", "Git"],
    points: ["Supports de cours", "Révisions", "Transmission", "Notes techniques"]
  },
  {
    slug: "site-labo",
    nom: "Site Labo",
    type: "Laboratoire web",
    statut: "Expérimentation",
    depot: "mellykelkun/site-labo",
    prive: true,
    resume: "Petit dépôt de laboratoire utilisé pour des essais web ciblés.",
    description: "Un espace volontairement léger pour tester rapidement des idées avant de les intégrer à des projets plus structurés.",
    technologies: ["Web", "Git"],
    points: ["Prototypage rapide", "Tests isolés"]
  },
  {
    slug: "repos-teste",
    nom: "Repos Teste",
    type: "Sandbox Git",
    statut: "Expérimentation",
    depot: "mellykelkun/repos_teste",
    prive: false,
    resume: "Dépôt public minimal utilisé pour des essais de versionnement et de workflow GitHub.",
    description: "Ce dépôt n'est pas présenté comme un produit. Il sert simplement de sandbox technique pour tester des opérations Git et GitHub.",
    technologies: ["Git", "GitHub"],
    points: ["Tests Git", "Sandbox"]
  },
  {
    slug: "portfolio-kablankan",
    nom: "Portfolio Kablankan",
    type: "Portfolio",
    statut: "Production",
    depot: "mellykelkun/Portfolio_Kanblankan",
    prive: false,
    resume: "Portfolio personnel construit avec Next.js et déployé sur Render.",
    description: "Cette version remplace l'ancienne SPA Express par une architecture Next.js multipage, plus rapide à parcourir et plus simple à maintenir.",
    technologies: ["Next.js", "React", "CSS", "Render"],
    points: ["App Router", "Pages projet dynamiques", "Responsive", "Déploiement Render"]
  }
];

export const projetsPhares = projets.filter((projet) => [
  "fiers-artisans",
  "booms-platform",
  "center-platform",
  "heylee",
  "match-intel-hub",
  "paie-server"
].includes(projet.slug));

export function trouverProjet(slug) {
  return projets.find((projet) => projet.slug === slug);
}
