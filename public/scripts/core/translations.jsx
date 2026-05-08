        // ================================================================
        // SYSTÈME DE TRADUCTION (i18n)
        // ================================================================
        const translations = {
            fr: {
                nav: { about: 'À propos', projects: 'Projets', skills: 'Compétences', contact: 'Contact' },
                hero: {
                    badge: 'Disponible pour missions',
                    title: 'Architecte Logiciel | Ingénieur en IA Appliquée | Lead Developer',
                    description: 'Je conçois des écosystèmes logiciels autonomes où l\'IA n\'est pas une fonctionnalité, mais un <strong>membre actif de l\'équipe de développement</strong>, orchestrée avec une précision chirurgicale.',
                    cta1: 'Voir mes réalisations',
                    cta2: 'Me contacter'
                },
                stats: [
                    { number: '15+', label: 'Projets Complexes' },
                    { number: '8+', label: 'Stacks Maîtrisées' },
                    { number: '10K+', label: 'Heures de Code' },
                    { number: '∞', label: "Capacité d'Apprentissage" }
                ],
                about: {
                    title: 'À propos',
                    subtitle: 'Un développeur autodidacte devenu architecte de systèmes complexes.',
                    cards: [
                        { icon: '🧠', title: 'Mon Super-Pouvoir', desc: 'Comprendre et maîtriser toute nouvelle technologie en un temps record, comme si je la pratiquais depuis des années. Je ne "vibe code" pas : <strong>je dirige l\'IA pour forger un code plus robuste et plus sûr</strong>.' },
                        { icon: '🎯', title: 'Ma Vision', desc: 'Transformer des concepts en solutions logicielles robustes, évolutives et monétisables. Mon approche holistique couvre l\'infrastructure, le développement, la sécurité et le déploiement.' },
                        { icon: '🔐', title: 'Sécurité First', desc: 'Chaque ligne de code est pensée pour la sécurité. Audit, sanitization, rate limiting, chiffrement : la sécurité n\'est pas une option, c\'est une obsession intégrée à l\'architecture.' }
                    ]
                },
                projects: {
                    title: 'Mes Réalisations',
                    subtitle: 'Des projets complexes qui démontrent la maîtrise de tout le cycle de vie logiciel.',
                    items: [
                        { icon: '💬', name: 'Heylee', desc: 'Messagerie instantanée sécurisée avec Heylee ID virtuel, traitement vidéo asynchrone et présence temps réel.', tech: ['Flutter', 'Node.js', 'MongoDB', 'Redis', 'WebSocket', 'BullMQ'], detail: 'Architecture complète de messagerie avec système d\'identifiant propriétaire, chiffrement, chat temps réel multi-devices, capture vidéo multi-segments avec traitement FFmpeg, et file d\'attente hors-ligne. Infrastructure scalable avec Kubernetes, PgBouncer, et monitoring Prometheus/Grafana.' },
                        { icon: '🖥️', name: 'Web IDE + AI Copilot', desc: 'IDE avec agent IA orchestrateur capable de naviguer et contrôler le système d\'exploitation.', tech: ['React', 'Node.js', 'Ollama', 'Gemini', 'Groq'], detail: 'Système d\'orchestration IA multi-providers intégré à un IDE web. L\'agent peut créer des fichiers, exécuter des commandes terminal, et gérer des discussions simultanées avec conscience inter-discussions. Interface épurée avec filtrage intelligent des balises de réflexion.' },
                        { icon: '📈', name: 'ForexBot SaaS', desc: 'Système de trading algorithmique avec IA multi-providers et Risk Guardian intégré.', tech: ['Python', 'MetaTrader5', 'Flask', 'OpenAI', 'DeepSeek'], detail: 'Bot de trading autonome avec moteur de décision IA multi-providers (Groq, OpenAI, DeepSeek). Système de gestion des risques intégré avec position sizing ATR, kill switch, et journal de trading immuable hashé SHA-256. Dashboard de contrôle en temps réel avec switching de provider IA.' },
                        { icon: '🏗️', name: 'Fiers Artisans', desc: 'Marketplace mobile géolocalisée avec vérification documentaire et abonnement.', tech: ['Flutter', 'NestJS', 'Next.js', 'PostGIS', 'Docker'], detail: 'Plateforme de mise en relation clients-artisans avec recherche géolocalisée, messagerie temps réel, vérification documentaire et système d\'abonnement. Infrastructure complète avec microservices, MinIO pour le stockage, et pipeline CI/CD.' },
                        { icon: '🎨', name: 'BOOMS Platform', desc: 'Plateforme de gestion et vente d\'œuvres numériques tokenisées.', tech: ['FastAPI', 'Next.js', 'React Native', 'PostgreSQL', 'Redis'], detail: 'Écosystème complet de marketplace d\'actifs numériques avec wallet utilisateur, système de gifts, transactions temps réel via WebSocket, et intégration de paiements multiples.' },
                        { icon: '📁', name: 'Center Platform', desc: 'SaaS de gestion de fichiers collaboratif avec transferts sécurisés.', tech: ['React', 'Express', 'Prisma', 'PostgreSQL', 'Socket.IO'], detail: 'Solution de stockage hiérarchique avec file d\'attente de jobs pour la corbeille, transferts entre comptes, prévisualisation avancée, et maintenance automatisée. Architecture événementielle avec notifications temps réel.' }
                    ]
                },
                skills: {
                    title: 'Compétences Techniques',
                    subtitle: 'Un arsenal technologique complet pour construire des solutions robustes de bout en bout.',
                    categories: [
                        { title: '🧩 Frontend', skills: ['React', 'Next.js', 'Flutter', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
                        { title: '⚙️ Backend', skills: ['Node.js', 'Express', 'NestJS', 'FastAPI', 'Python', 'Flask'] },
                        { title: '🗄️ Bases de données', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Mongoose', 'TypeORM'] },
                        { title: '🤖 IA & ML', skills: ['OpenAI', 'Groq', 'DeepSeek', 'Ollama', 'LangChain', 'Prompt Engineering'] },
                        { title: '🚀 DevOps', skills: ['Docker', 'Kubernetes', 'Nginx', 'CI/CD', 'PM2', 'Prometheus'] },
                        { title: '🔐 Sécurité', skills: ['JWT', 'OAuth2', 'bcrypt', 'SHA-256', 'Rate Limiting', 'XSS Prevention'] }
                    ]
                },
                experience: {
                    title: 'Mon Parcours',
                    subtitle: 'De l\'autodidacte passionné à l\'architecte de systèmes autonomes.',
                    items: [
                        { date: '2024 — Présent', title: 'Architecte Logiciel & Ingénieur IA (Freelance)', desc: 'Conception et développement d\'écosystèmes logiciels complets pour des clients privés. Direction technique de projets complexes incluant des agents IA autonomes, des plateformes SaaS et des applications mobiles temps réel.' },
                        { date: '2023 — Présent', title: 'Lead Developer — Projets Personnels', desc: 'Architecture et implémentation de plus de 15 projets majeurs couvrant la messagerie instantanée, le trading algorithmique, les marketplaces et les IDE intelligents. Maîtrise de stacks full stack avec orchestration d\'IA.' },
                        { date: '2021 — 2023', title: 'Développeur Full Stack Autodidacte', desc: 'Apprentissage intensif et maîtrise des technologies web et mobiles. Développement des premières applications complètes en React, Node.js, et Flutter. Acquisition des fondamentaux en architecture logicielle et cybersécurité.' }
                    ]
                },
                education: {
                    title: 'Formation & Certifications',
                    items: [
                        { icon: '🎓', title: 'Licence en Administration & Digitalisation', subtitle: 'UVCI — Cocody, Côte d\'Ivoire', desc: 'En cours (2ème année) — Transformation digitale des processus de gestion' },
                        { icon: '📜', title: 'Certifications Google & Microsoft', subtitle: 'Coursera', desc: 'Google Workspace (Drive, Docs, Sheets, Slides, Gmail) • Microsoft Office (Excel, PowerPoint)' },
                        { icon: '💡', title: 'Formation Continue', subtitle: 'Autodidacte — 10 000+ heures', desc: 'Ma véritable école est la pratique. Chaque projet est le résultat de milliers d\'heures de recherche et d\'expérimentation.' }
                    ]
                },
                contact: {
                    title: 'Contactez-moi',
                    subtitle: 'Prêt à collaborer sur votre prochain projet ambitieux.',
                    copied: '✓ Copié !',
                    copy: '📋',
                    github: 'github.com/Mellykelkun'
                },
                footer: {
                    text: '© {year} Kablankan Tiemele Israël Kévin — Tous droits réservés.',
                    consoleTrigger: '>_',
                    bot: {
                        mood: 'Humeur',
                        moods: {
                            curious: 'curieux',
                            excited: 'excite',
                            tired: 'fatigue',
                            focused: 'focus'
                        },
                        cinematicOn: 'Cinematique ON',
                        cinematicOff: 'Cinematique OFF',
                        toggleTitle: 'Activer ou desactiver le mode cinematique'
                    }
                },
                console: {
                    welcome: 'Tapez \'help\' pour les commandes disponibles.\n',
                    help: 'Commandes : help, skills, contact, clear, easteregg, exit',
                    skills: 'Skills JSON: { "frontend": ["React","Next.js","Flutter"], "backend": ["Node.js","NestJS","FastAPI"], "ia": ["OpenAI","Groq","Ollama"], "devops": ["Docker","K8s","CI/CD"] }',
                    contact: 'Email: kablankankevinisrael@gmail.com | Tel: +2250703063570',
                    easteregg: '🐱‍💻 L\'entité code fait un backflip ! *flip*',
                    unknown: 'Commande inconnue. Tapez help.'
                }
            },
            en: {
                nav: { about: 'About', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
                hero: {
                    badge: 'Available for missions',
                    title: 'Software Architect | Applied AI Engineer | Lead Developer',
                    description: 'I design autonomous software ecosystems where AI is not a feature, but an <strong>active member of the development team</strong>, orchestrated with surgical precision.',
                    cta1: 'See my work',
                    cta2: 'Contact me'
                },
                stats: [
                    { number: '15+', label: 'Complex Projects' },
                    { number: '8+', label: 'Mastered Stacks' },
                    { number: '10K+', label: 'Hours of Code' },
                    { number: '∞', label: 'Learning Capacity' }
                ],
                about: {
                    title: 'About',
                    subtitle: 'A self-taught developer turned complex system architect.',
                    cards: [
                        { icon: '🧠', title: 'My Superpower', desc: 'Understanding and mastering any new technology in record time, as if I\'ve been practicing it for years. I don\'t "vibe code": <strong>I direct AI to forge more robust and secure code</strong>.' },
                        { icon: '🎯', title: 'My Vision', desc: 'Turning concepts into robust, scalable and monetizable software solutions. My holistic approach covers infrastructure, development, security, and deployment.' },
                        { icon: '🔐', title: 'Security First', desc: 'Every line of code is thought for security. Audit, sanitization, rate limiting, encryption: security is not an option, it\'s an obsession integrated into the architecture.' }
                    ]
                },
                projects: {
                    title: 'My Projects',
                    subtitle: 'Complex projects demonstrating mastery of the entire software lifecycle.',
                    items: [
                        { icon: '💬', name: 'Heylee', desc: 'Secure instant messaging with virtual Heylee ID, async video processing and real-time presence.', tech: ['Flutter', 'Node.js', 'MongoDB', 'Redis', 'WebSocket', 'BullMQ'], detail: 'Complete messaging architecture with proprietary ID system, encryption, multi-device real-time chat, multi-segment video capture with FFmpeg processing, and offline queue. Scalable infrastructure with Kubernetes, PgBouncer, and Prometheus/Grafana monitoring.' },
                        { icon: '🖥️', name: 'Web IDE + AI Copilot', desc: 'IDE with AI orchestrator agent capable of navigating and controlling the operating system.', tech: ['React', 'Node.js', 'Ollama', 'Gemini', 'Groq'], detail: 'Multi-provider AI orchestration system integrated into a web IDE. The agent can create files, execute terminal commands, and manage simultaneous discussions with cross-discussion awareness. Clean interface with intelligent reflection tag filtering.' },
                        { icon: '📈', name: 'ForexBot SaaS', desc: 'Algorithmic trading system with multi-provider AI and integrated Risk Guardian.', tech: ['Python', 'MetaTrader5', 'Flask', 'OpenAI', 'DeepSeek'], detail: 'Autonomous trading bot with multi-provider AI decision engine (Groq, OpenAI, DeepSeek). Integrated risk management system with ATR position sizing, kill switch, and SHA-256 hashed immutable trading journal. Real-time control dashboard with AI provider switching.' },
                        { icon: '🏗️', name: 'Fiers Artisans', desc: 'Geolocated mobile marketplace with document verification and subscription.', tech: ['Flutter', 'NestJS', 'Next.js', 'PostGIS', 'Docker'], detail: 'Client-artisan matching platform with geolocated search, real-time messaging, document verification and subscription system. Complete infrastructure with microservices, MinIO for storage, and CI/CD pipeline.' },
                        { icon: '🎨', name: 'BOOMS Platform', desc: 'Platform for managing and selling tokenized digital artworks.', tech: ['FastAPI', 'Next.js', 'React Native', 'PostgreSQL', 'Redis'], detail: 'Complete digital asset marketplace ecosystem with user wallet, gift system, real-time transactions via WebSocket, and integration of multiple payment methods.' },
                        { icon: '📁', name: 'Center Platform', desc: 'Collaborative file management SaaS with secure transfers.', tech: ['React', 'Express', 'Prisma', 'PostgreSQL', 'Socket.IO'], detail: 'Hierarchical storage solution with job queue for trash, inter-account transfers, advanced preview, and automated maintenance. Event-driven architecture with real-time notifications.' }
                    ]
                },
                skills: {
                    title: 'Technical Skills',
                    subtitle: 'A complete technological arsenal to build robust end-to-end solutions.',
                    categories: [
                        { title: '🧩 Frontend', skills: ['React', 'Next.js', 'Flutter', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
                        { title: '⚙️ Backend', skills: ['Node.js', 'Express', 'NestJS', 'FastAPI', 'Python', 'Flask'] },
                        { title: '🗄️ Databases', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Mongoose', 'TypeORM'] },
                        { title: '🤖 AI & ML', skills: ['OpenAI', 'Groq', 'DeepSeek', 'Ollama', 'LangChain', 'Prompt Engineering'] },
                        { title: '🚀 DevOps', skills: ['Docker', 'Kubernetes', 'Nginx', 'CI/CD', 'PM2', 'Prometheus'] },
                        { title: '🔐 Security', skills: ['JWT', 'OAuth2', 'bcrypt', 'SHA-256', 'Rate Limiting', 'XSS Prevention'] }
                    ]
                },
                experience: {
                    title: 'My Journey',
                    subtitle: 'From passionate self-taught to autonomous systems architect.',
                    items: [
                        { date: '2024 — Present', title: 'Software Architect & AI Engineer (Freelance)', desc: 'Design and development of complete software ecosystems for private clients. Technical direction of complex projects including autonomous AI agents, SaaS platforms, and real-time mobile applications.' },
                        { date: '2023 — Present', title: 'Lead Developer — Personal Projects', desc: 'Architecture and implementation of over 15 major projects covering instant messaging, algorithmic trading, marketplaces, and intelligent IDEs. Mastery of full stack with AI orchestration.' },
                        { date: '2021 — 2023', title: 'Self-taught Full Stack Developer', desc: 'Intensive learning and mastery of web and mobile technologies. Development of first complete applications in React, Node.js, and Flutter. Acquisition of fundamentals in software architecture and cybersecurity.' }
                    ]
                },
                education: {
                    title: 'Education & Certifications',
                    items: [
                        { icon: '🎓', title: 'Bachelor in Administration & Digitalization', subtitle: 'UVCI — Cocody, Côte d\'Ivoire', desc: 'In progress (2nd year) — Digital transformation of management processes' },
                        { icon: '📜', title: 'Google & Microsoft Certifications', subtitle: 'Coursera', desc: 'Google Workspace (Drive, Docs, Sheets, Slides, Gmail) • Microsoft Office (Excel, PowerPoint)' },
                        { icon: '💡', title: 'Continuous Learning', subtitle: 'Self-taught — 10,000+ hours', desc: 'My true school is practice. Each project is the result of thousands of hours of research and experimentation.' }
                    ]
                },
                contact: {
                    title: 'Contact Me',
                    subtitle: 'Ready to collaborate on your next ambitious project.',
                    copied: '✓ Copied!',
                    copy: '📋',
                    github: 'github.com/Mellykelkun'
                },
                footer: {
                    text: '© {year} Kablankan Tiemele Israël Kévin — All rights reserved.',
                    consoleTrigger: '>_',
                    bot: {
                        mood: 'Mood',
                        moods: {
                            curious: 'curious',
                            excited: 'excited',
                            tired: 'tired',
                            focused: 'focused'
                        },
                        cinematicOn: 'Cinematic ON',
                        cinematicOff: 'Cinematic OFF',
                        toggleTitle: 'Enable or disable cinematic mode'
                    }
                },
                console: {
                    welcome: 'Type \'help\' for available commands.\n',
                    help: 'Commands: help, skills, contact, clear, easteregg, exit',
                    skills: 'Skills JSON: { "frontend": ["React","Next.js","Flutter"], "backend": ["Node.js","NestJS","FastAPI"], "ai": ["OpenAI","Groq","Ollama"], "devops": ["Docker","K8s","CI/CD"] }',
                    contact: 'Email: kablankankevinisrael@gmail.com | Tel: +2250703063570',
                    easteregg: '🐱‍💻 The code entity does a backflip! *flip*',
                    unknown: 'Unknown command. Type help.'
                }
            },
            zh: {
                nav: { about: '关于', projects: '项目', skills: '技能', contact: '联系' },
                hero: {
                    badge: '可接受任务',
                    title: '软件架构师 | 应用AI工程师 | 首席开发者',
                    description: '我设计自主软件生态系统，其中AI不是一个功能，而是<strong>开发团队的活跃成员</strong>，以手术般的精度进行编排。',
                    cta1: '查看我的作品',
                    cta2: '联系我'
                },
                stats: [
                    { number: '15+', label: '复杂项目' },
                    { number: '8+', label: '精通技术栈' },
                    { number: '10K+', label: '编码小时' },
                    { number: '∞', label: '学习能力' }
                ],
                about: {
                    title: '关于我',
                    subtitle: '从自学成才到复杂系统架构师。',
                    cards: [
                        { icon: '🧠', title: '我的超能力', desc: '在创纪录的时间内理解和掌握任何新技术，仿佛已经实践多年。我不"vibe code"：<strong>我引导AI打造更强大、更安全的代码</strong>。' },
                        { icon: '🎯', title: '我的愿景', desc: '将概念转化为稳健、可扩展且可盈利的软件解决方案。我的整体方法涵盖基础设施、开发、安全和部署。' },
                        { icon: '🔐', title: '安全第一', desc: '每一行代码都为安全而思考。审计、清理、速率限制、加密：安全不是可选项，而是融入架构的执着。' }
                    ]
                },
                projects: {
                    title: '我的项目',
                    subtitle: '展示整个软件生命周期掌握程度的复杂项目。',
                    items: [
                        { icon: '💬', name: 'Heylee', desc: '安全的即时通讯，带有虚拟Heylee ID、异步视频处理和实时在线状态。', tech: ['Flutter', 'Node.js', 'MongoDB', 'Redis', 'WebSocket', 'BullMQ'], detail: '完整的消息架构，具有专有ID系统、加密、多设备实时聊天、使用FFmpeg处理的多段视频捕获以及离线队列。使用Kubernetes、PgBouncer和Prometheus/Grafana监控的可扩展基础设施。' },
                        { icon: '🖥️', name: 'Web IDE + AI Copilot', desc: '具有AI编排器代理的IDE，能够导航和控制操作系统。', tech: ['React', 'Node.js', 'Ollama', 'Gemini', 'Groq'], detail: '集成到Web IDE中的多提供商AI编排系统。代理可以创建文件、执行终端命令，并管理具有跨讨论意识的同步讨论。具有智能反射标签过滤的清洁界面。' },
                        { icon: '📈', name: 'ForexBot SaaS', desc: '算法交易系统，具有多提供商AI和集成的风险守护者。', tech: ['Python', 'MetaTrader5', 'Flask', 'OpenAI', 'DeepSeek'], detail: '具有多提供商AI决策引擎的自主交易机器人。集成风险管理系统，具有ATR头寸规模、熔断开关和SHA-256哈希不可变交易日志。具有AI提供商切换的实时控制仪表板。' },
                        { icon: '🏗️', name: 'Fiers Artisans', desc: '地理定位的移动市场，具有文档验证和订阅功能。', tech: ['Flutter', 'NestJS', 'Next.js', 'PostGIS', 'Docker'], detail: '客户-工匠匹配平台，具有地理定位搜索、实时消息、文档验证和订阅系统。使用微服务、MinIO存储和CI/CD管道的完整基础设施。' },
                        { icon: '🎨', name: 'BOOMS Platform', desc: '用于管理和销售代币化数字艺术品的平台。', tech: ['FastAPI', 'Next.js', 'React Native', 'PostgreSQL', 'Redis'], detail: '完整的数字资产市场生态系统，具有用户钱包、礼物系统、通过WebSocket的实时交易以及多种支付方式的集成。' },
                        { icon: '📁', name: 'Center Platform', desc: '协作文件管理SaaS，具有安全传输功能。', tech: ['React', 'Express', 'Prisma', 'PostgreSQL', 'Socket.IO'], detail: '分层存储解决方案，具有垃圾箱作业队列、账户间传输、高级预览和自动维护。具有实时通知的事件驱动架构。' }
                    ]
                },
                skills: {
                    title: '技术技能',
                    subtitle: '构建强大端到端解决方案的完整技术武器库。',
                    categories: [
                        { title: '🧩 前端', skills: ['React', 'Next.js', 'Flutter', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
                        { title: '⚙️ 后端', skills: ['Node.js', 'Express', 'NestJS', 'FastAPI', 'Python', 'Flask'] },
                        { title: '🗄️ 数据库', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Mongoose', 'TypeORM'] },
                        { title: '🤖 AI & ML', skills: ['OpenAI', 'Groq', 'DeepSeek', 'Ollama', 'LangChain', 'Prompt Engineering'] },
                        { title: '🚀 DevOps', skills: ['Docker', 'Kubernetes', 'Nginx', 'CI/CD', 'PM2', 'Prometheus'] },
                        { title: '🔐 安全', skills: ['JWT', 'OAuth2', 'bcrypt', 'SHA-256', 'Rate Limiting', 'XSS Prevention'] }
                    ]
                },
                experience: {
                    title: '我的旅程',
                    subtitle: '从热情的自学者到自主系统架构师。',
                    items: [
                        { date: '2024 — 至今', title: '软件架构师 & AI工程师（自由职业）', desc: '为私人客户设计和开发完整的软件生态系统。复杂项目的技术指导，包括自主AI代理、SaaS平台和实时移动应用。' },
                        { date: '2023 — 至今', title: '首席开发者 — 个人项目', desc: '架构和实施了超过15个主要项目，涵盖即时通讯、算法交易、市场和智能IDE。掌握全栈与AI编排。' },
                        { date: '2021 — 2023', title: '自学全栈开发者', desc: '强化学习和掌握Web和移动技术。在React、Node.js和Flutter中开发了第一个完整的应用程序。获得软件架构和网络安全的基础知识。' }
                    ]
                },
                education: {
                    title: '教育 & 认证',
                    items: [
                        { icon: '🎓', title: '管理与数字化本科学位', subtitle: 'UVCI — 科科迪, 科特迪瓦', desc: '在读（第二年）— 管理流程的数字化转型' },
                        { icon: '📜', title: 'Google & Microsoft 认证', subtitle: 'Coursera', desc: 'Google Workspace (Drive, Docs, Sheets, Slides, Gmail) • Microsoft Office (Excel, PowerPoint)' },
                        { icon: '💡', title: '持续学习', subtitle: '自学 — 10,000+ 小时', desc: '我真正的学校是实践。每个项目都是数千小时研究和实验的结果。' }
                    ]
                },
                contact: {
                    title: '联系我',
                    subtitle: '准备好在您下一个雄心勃勃的项目上合作。',
                    copied: '✓ 已复制!',
                    copy: '📋',
                    github: 'github.com/Mellykelkun'
                },
                footer: {
                    text: '© {year} Kablankan Tiemele Israël Kévin — 版权所有。',
                    consoleTrigger: '>_',
                    bot: {
                        mood: '情绪',
                        moods: {
                            curious: '好奇',
                            excited: '兴奋',
                            tired: '疲惫',
                            focused: '专注'
                        },
                        cinematicOn: '电影模式 开',
                        cinematicOff: '电影模式 关',
                        toggleTitle: '切换电影模式'
                    }
                },
                console: {
                    welcome: '输入 \'help\' 查看可用命令。\n',
                    help: '命令: help, skills, contact, clear, easteregg, exit',
                    skills: '技能 JSON: { "前端": ["React","Next.js","Flutter"], "后端": ["Node.js","NestJS","FastAPI"], "AI": ["OpenAI","Groq","Ollama"], "DevOps": ["Docker","K8s","CI/CD"] }',
                    contact: '邮箱: kablankankevinisrael@gmail.com | 电话: +2250703063570',
                    easteregg: '🐱‍💻 代码实体做了个后空翻！*翻转*',
                    unknown: '未知命令。输入 help。'
                }
            },
            ar: {
                nav: { about: 'حول', projects: 'مشاريع', skills: 'مهارات', contact: 'اتصال' },
                hero: {
                    badge: 'متاح للمهام',
                    title: 'مهندس برمجيات | مهندس ذكاء اصطناعي تطبيقي | مطور رئيسي',
                    description: 'أصمم أنظمة برمجية مستقلة حيث الذكاء الاصطناعي ليس ميزة، بل <strong>عضو نشط في فريق التطوير</strong>، متناغم بدقة جراحية.',
                    cta1: 'شاهد أعمالي',
                    cta2: 'اتصل بي'
                },
                stats: [
                    { number: '15+', label: 'مشاريع معقدة' },
                    { number: '8+', label: 'حزم تقنية متقنة' },
                    { number: '10K+', label: 'ساعات برمجة' },
                    { number: '∞', label: 'قدرة التعلم' }
                ],
                about: {
                    title: 'عني',
                    subtitle: 'مطور عصامي تحول إلى مهندس أنظمة معقدة.',
                    cards: [
                        { icon: '🧠', title: 'قوتي الخارقة', desc: 'فهم وإتقان أي تقنية جديدة في وقت قياسي، كما لو كنت أمارسها لسنوات. أنا لا "vibe code": <strong>أوجه الذكاء الاصطناعي لصياغة كود أكثر قوة وأمانًا</strong>.' },
                        { icon: '🎯', title: 'رؤيتي', desc: 'تحويل المفاهيم إلى حلول برمجية قوية وقابلة للتطوير وقابلة للربح. نهجي الشامل يغطي البنية التحتية والتطوير والأمان والنشر.' },
                        { icon: '🔐', title: 'الأمان أولاً', desc: 'كل سطر من الكود يُفكر فيه للأمان. التدقيق، التنظيف، تحديد المعدل، التشفير: الأمان ليس خيارًا، بل هوس مدمج في البنية.' }
                    ]
                },
                projects: {
                    title: 'مشاريعي',
                    subtitle: 'مشاريع معقدة تظهر إتقان دورة حياة البرمجيات بأكملها.',
                    items: [
                        { icon: '💬', name: 'Heylee', desc: 'مراسلة فورية آمنة مع معرف Heylee افتراضي، معالجة فيديو غير متزامنة وحضور في الوقت الفعلي.', tech: ['Flutter', 'Node.js', 'MongoDB', 'Redis', 'WebSocket', 'BullMQ'], detail: 'بنية مراسلة كاملة مع نظام معرف خاص، تشفير، دردشة في الوقت الفعلي متعددة الأجهزة، التقاط فيديو متعدد المقاطع مع معالجة FFmpeg، وطابور دون اتصال.' },
                        { icon: '🖥️', name: 'Web IDE + AI Copilot', desc: 'بيئة تطوير مع وكيل ذكاء اصطناعي منسق قادر على التنقل والتحكم في نظام التشغيل.', tech: ['React', 'Node.js', 'Ollama', 'Gemini', 'Groq'], detail: 'نظام تنسيق ذكاء اصطناعي متعدد المزودين مدمج في بيئة تطوير ويب. يمكن للوكيل إنشاء ملفات وتنفيذ أوامر طرفية وإدارة مناقشات متزامنة.' },
                        { icon: '📈', name: 'ForexBot SaaS', desc: 'نظام تداول خوارزمي مع ذكاء اصطناعي متعدد المزودين ووصي مخاطر مدمج.', tech: ['Python', 'MetaTrader5', 'Flask', 'OpenAI', 'DeepSeek'], detail: 'بوت تداول مستقل مع محرك قرار ذكاء اصطناعي متعدد المزودين. نظام إدارة مخاطر متكامل مع تحجيم مركز ATR ومفتاح إيقاف.' },
                        { icon: '🏗️', name: 'Fiers Artisans', desc: 'سوق محمول جغرافي مع التحقق من الوثائق والاشتراك.', tech: ['Flutter', 'NestJS', 'Next.js', 'PostGIS', 'Docker'], detail: 'منصة مطابقة العملاء والحرفيين مع بحث جغرافي ومراسلة في الوقت الفعلي والتحقق من الوثائق ونظام اشتراك.' },
                        { icon: '🎨', name: 'BOOMS Platform', desc: 'منصة لإدارة وبيع الأعمال الفنية الرقمية المميزة.', tech: ['FastAPI', 'Next.js', 'React Native', 'PostgreSQL', 'Redis'], detail: 'نظام بيئي كامل لسوق الأصول الرقمية مع محفظة مستخدم ونظام هدايا ومعاملات في الوقت الفعلي.' },
                        { icon: '📁', name: 'Center Platform', desc: 'SaaS تعاوني لإدارة الملفات مع عمليات نقل آمنة.', tech: ['React', 'Express', 'Prisma', 'PostgreSQL', 'Socket.IO'], detail: 'حل تخزين هرمي مع طابور وظائف للمهملات وعمليات نقل بين الحسابات ومعاينة متقدمة وصيانة آلية.' }
                    ]
                },
                skills: {
                    title: 'المهارات التقنية',
                    subtitle: 'ترسانة تقنية كاملة لبناء حلول قوية من البداية إلى النهاية.',
                    categories: [
                        { title: '🧩 الواجهة', skills: ['React', 'Next.js', 'Flutter', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
                        { title: '⚙️ الخلفية', skills: ['Node.js', 'Express', 'NestJS', 'FastAPI', 'Python', 'Flask'] },
                        { title: '🗄️ قواعد البيانات', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Mongoose', 'TypeORM'] },
                        { title: '🤖 الذكاء الاصطناعي', skills: ['OpenAI', 'Groq', 'DeepSeek', 'Ollama', 'LangChain', 'Prompt Engineering'] },
                        { title: '🚀 DevOps', skills: ['Docker', 'Kubernetes', 'Nginx', 'CI/CD', 'PM2', 'Prometheus'] },
                        { title: '🔐 الأمان', skills: ['JWT', 'OAuth2', 'bcrypt', 'SHA-256', 'Rate Limiting', 'XSS Prevention'] }
                    ]
                },
                experience: {
                    title: 'رحلتي',
                    subtitle: 'من شغوف عصامي إلى مهندس أنظمة مستقلة.',
                    items: [
                        { date: '2024 — الآن', title: 'مهندس برمجيات ومهندس ذكاء اصطناعي (مستقل)', desc: 'تصميم وتطوير أنظمة برمجية متكاملة للعملاء الخاصين. التوجيه التقني للمشاريع المعقدة بما في ذلك وكلاء الذكاء الاصطناعي المستقلين.' },
                        { date: '2023 — الآن', title: 'مطور رئيسي — مشاريع شخصية', desc: 'بنية وتنفيذ أكثر من 15 مشروعًا رئيسيًا تغطي المراسلة الفورية والتداول الخوارزمي والأسواق وبيئات التطوير الذكية.' },
                        { date: '2021 — 2023', title: 'مطور شامل عصامي', desc: 'تعلم مكثف وإتقان تقنيات الويب والهاتف المحمول. تطوير أول تطبيقات كاملة في React وNode.js وFlutter.' }
                    ]
                },
                education: {
                    title: 'التعليم والشهادات',
                    items: [
                        { icon: '🎓', title: 'بكالوريوس في الإدارة والرقمنة', subtitle: 'UVCI — كوكودي، كوت ديفوار', desc: 'قيد الدراسة (السنة الثانية) — التحول الرقمي لعمليات الإدارة' },
                        { icon: '📜', title: 'شهادات Google و Microsoft', subtitle: 'Coursera', desc: 'Google Workspace (Drive, Docs, Sheets, Slides, Gmail) • Microsoft Office (Excel, PowerPoint)' },
                        { icon: '💡', title: 'تعلم مستمر', subtitle: 'عصامي — 10,000+ ساعة', desc: 'مدرستي الحقيقية هي الممارسة. كل مشروع هو نتيجة آلاف الساعات من البحث والتجريب.' }
                    ]
                },
                contact: {
                    title: 'اتصل بي',
                    subtitle: 'مستعد للتعاون في مشروعك الطموح القادم.',
                    copied: '✓ تم النسخ!',
                    copy: '📋',
                    github: 'github.com/Mellykelkun'
                },
                footer: {
                    text: '© {year} Kablankan Tiemele Israël Kévin — جميع الحقوق محفوظة.',
                    consoleTrigger: '>_',
                    bot: {
                        mood: 'المزاج',
                        moods: {
                            curious: 'فضولي',
                            excited: 'متحمس',
                            tired: 'متعب',
                            focused: 'مركز'
                        },
                        cinematicOn: 'الوضع السينمائي تشغيل',
                        cinematicOff: 'الوضع السينمائي ايقاف',
                        toggleTitle: 'تفعيل او تعطيل الوضع السينمائي'
                    }
                },
                console: {
                    welcome: 'اكتب \'help\' للأوامر المتاحة.\n',
                    help: 'الأوامر: help, skills, contact, clear, easteregg, exit',
                    skills: 'Skills JSON: { "frontend": ["React","Next.js","Flutter"], "backend": ["Node.js","NestJS","FastAPI"], "ai": ["OpenAI","Groq","Ollama"], "devops": ["Docker","K8s","CI/CD"] }',
                    contact: 'البريد: kablankankevinisrael@gmail.com | هاتف: +2250703063570',
                    easteregg: '🐱‍💻 كيان الكود يقوم بشقلبة خلفية! *قلب*',
                    unknown: 'أمر غير معروف. اكتب help.'
                }
            }
        };

