// Single source of truth for the site content. Edit here, not in components.

export const profile = {
  name: 'Omar Abdillahi Omar',
  firstName: 'Omar',
  handle: 'omar',
  location: 'Djibouti',
  coords: '11.5886°N · 43.1450°E',
  roles: [
    'Ingénieur Réseaux & Infogérance',
    'Implémenteur ERP Odoo',
    'Cofondateur — TechGenius',
    'IA souveraine & Cybersécurité',
  ],
  pitch:
    "Je conçois, sécurise et fais évoluer des systèmes d'information — du câble au modèle de langage. Réseaux, ERP Odoo et intelligence artificielle souveraine, construits à Djibouti.",
  email: 'omarabdillahi898@gmail.com',
  linkedin: 'https://www.linkedin.com/in/omar-abdillahi-242b1a224',
  cv: '/docs/CV-Omar-Abdillahi-Omar.pdf',
  availability: 'Télétravail ou présentiel',
  languages: ['Français', 'Anglais', 'Somali'],
  strengths: ['Curiosité & passion', 'Communication', 'Collaboration', "Capacité d'adaptation"],
  interests: ['Football', 'Natation', 'Cinéma — saga Marvel'],
};

export const stats = [
  { value: '1er', label: 'Prix — Forum National IA 2026' },
  { value: '50+', label: 'Utilisateurs réseau administrés' },
  { value: '95%', label: 'Hausse de satisfaction ERP' },
  { value: 'v16→18', label: 'Versions Odoo maîtrisées' },
];

// Skills grouped like the OSI model: from the physical layer up to the application.
export const layers = [
  {
    id: 'L7',
    name: 'Application',
    title: 'Intelligence Artificielle',
    desc: "Intégration de LLM, OCR, IA générative et automatisation dans des applications métier — via API ou modèles déployés localement. Conception de prompts et connexion de l'IA aux ERP et workflows.",
    tags: ['LLM', 'OCR', 'IA générative', 'Prompt engineering', 'JupyterLab'],
  },
  {
    id: 'L6',
    name: 'Presentation',
    title: 'ERP Odoo v16 · v17 · v18',
    desc: 'Compétence principale : du paramétrage fonctionnel au développement de modules sur mesure. Comptabilité, ventes, achats, stock, migrations inter-versions et reprise de données tierces.',
    tags: ['Odoo', 'Modules custom', 'Migration', 'Reporting', 'Comptabilité'],
  },
  {
    id: 'L5',
    name: 'Session',
    title: 'Développement logiciel',
    desc: "Python pour l'automatisation, la donnée et les modules Odoo. Symfony (MVC, routing, entités), Java orienté objet, et un front-end HTML / CSS / JavaScript propre.",
    tags: ['Python', 'Symfony', 'Java', 'JavaScript', 'Git / GitHub'],
  },
  {
    id: 'L4',
    name: 'Transport',
    title: 'Cybersécurité',
    desc: "Mise en œuvre de mesures de sécurité réseau, surveillance et gestion des menaces. Protection des emails contre le phishing, la fraude et l'injection de prompt avec SafeInbox.",
    tags: ['Pare-feu', 'Threat monitoring', 'Anti-phishing', 'IA souveraine'],
  },
  {
    id: 'L3',
    name: 'Network',
    title: 'Réseaux',
    desc: 'Conception, mise en œuvre et maintenance de réseaux informatiques. Configuration de routeurs, commutateurs et pare-feu pour un parc de plus de 50 utilisateurs.',
    tags: ['Routage', 'Switching', 'LAN / WAN', 'Dépannage'],
  },
  {
    id: 'L2',
    name: 'Data Link',
    title: 'Infrastructure & Serveurs',
    desc: "Planification d'architectures IT, administration de serveurs (configuration, sécurité, maintenance), Windows Server et gestion des quotas d'impression PaperCut NG.",
    tags: ['Windows Server', 'Linux', 'PaperCut NG', 'Infogérance'],
  },
  {
    id: 'L1',
    name: 'Physical',
    title: 'Virtualisation & Systèmes',
    desc: "Virtualisation pour optimiser les ressources matérielles, maîtrise de différents systèmes d'exploitation et support technique aux utilisateurs finaux.",
    tags: ['Virtualisation', 'Multi-OS', 'Support N1/N2'],
  },
];

// Career rendered as a traceroute: oldest hop first.
export const hops = [
  {
    host: 'univ-djibouti.dj',
    period: '2020 — 2023',
    title: 'Licence — Université de Djibouti',
    org: 'Université de Djibouti',
    points: [
      "Site d'agence de voyage en ligne",
      "Système de quotas d'impression (Windows Server, PaperCut NG)",
      'E-collège : plateforme de gestion des élèves',
    ],
  },
  {
    host: 'soprosys.net.bsh',
    period: 'Août 2023 →',
    title: 'Ingénieur Réseaux & Infogérance',
    org: 'SOPROSYS SAS — Groupement Holding BSH',
    points: [
      'Conception et maintenance du réseau de plus de 50 utilisateurs',
      'Routeurs, commutateurs, pare-feu et administration serveurs',
      'Surveillance des menaces et virtualisation',
      "Projets de déploiement, migration et mise à niveau d'infrastructure",
    ],
  },
  {
    host: 'soprosys.erp.odoo',
    period: 'Fév. 2024 →',
    title: 'PLO — Odoo ERP Implementor',
    org: 'SOPROSYS SAS',
    points: [
      'Modules spécifiques adaptés aux besoins métier',
      'Migration vers une nouvelle version de l\'ERP',
      'Rapports personnalisés pour piloter la donnée',
      '+95% de satisfaction utilisateurs grâce à la formation et au support',
    ],
  },
  {
    host: 'upjv.fr.miage',
    period: 'Jan. 2025 →',
    title: 'Master MIAGE INSI',
    org: 'Université de Picardie Jules Verne — Amiens, France',
    points: ['Ingénierie numérique des systèmes d\'information'],
  },
  {
    host: 'techgenius.dj',
    period: 'Mars 2026 →',
    title: 'Cofondateur — TechGenius',
    org: 'TechGenius Djibouti',
    points: [
      "Startup djiboutienne d'IA et de cybersécurité souveraines",
      'Créateur de SafeInbox, produit phare de sécurité email',
      '1er prix du Forum National sur l\'IA 2026',
    ],
  },
];

export const projects = [
  {
    code: 'SFX-01',
    name: 'SafeInbox',
    kind: 'Produit phare · TechGenius',
    desc: "Protection des messageries des administrations et des entreprises contre le phishing, la fraude et l'injection de prompt. Propulsé par SafeAI, un moteur conçu et entraîné à Djibouti, qui tourne en local : les données ne quittent pas le pays.",
    tags: ['IA souveraine', 'NLP', 'Cybersécurité', 'On-premise'],
    featured: true,
  },
  {
    code: 'ERP-02',
    name: 'Modules Odoo sur mesure',
    kind: 'SOPROSYS SAS',
    desc: 'Développement de modules spécifiques, rapports personnalisés et migration inter-versions pour optimiser les processus internes.',
    tags: ['Python', 'Odoo', 'PostgreSQL'],
  },
  {
    code: 'NET-03',
    name: 'Infrastructure Holding BSH',
    kind: 'Infogérance',
    desc: 'Architecture, sécurité et maintenance du réseau et des serveurs d\'un groupe de plus de 50 utilisateurs.',
    tags: ['Réseau', 'Sécurité', 'Virtualisation'],
  },
  {
    code: 'EDU-04',
    name: 'E-collège',
    kind: 'Projet universitaire',
    desc: 'Plateforme de gestion des élèves pour un collège : inscriptions, classes et suivi.',
    tags: ['Web', 'Base de données'],
  },
  {
    code: 'PRT-05',
    name: "Quotas d'impression",
    kind: 'Projet universitaire',
    desc: "Mise en place d'un système de quotas d'impression avec Windows Server et PaperCut NG.",
    tags: ['Windows Server', 'PaperCut NG'],
  },
  {
    code: 'WEB-06',
    name: 'Agence de voyage en ligne',
    kind: 'Projet universitaire',
    desc: 'Site de réservation pour une agence de voyage, du catalogue à la prise de contact.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
];

export const education = [
  { period: '2025 →', title: 'Master MIAGE INSI', place: 'UPJV — Amiens, France' },
  { period: '2020 — 2023', title: 'Licence', place: 'Université de Djibouti' },
  { period: '2017 — 2020', title: 'Baccalauréat général', place: "Lycée d'État — Djibouti" },
];

export const press = {
  outlet: 'La Nation',
  date: '06/09/2026',
  title: "Forum national sur l'IA : Innover pour l'avenir",
  url: 'https://www.lanation.dj/forum-national-sur-lia-innover-pour-lavenir/',
  quote:
    'Cette distinction démontre surtout que la jeunesse djiboutienne peut concevoir des technologies de pointe au service de la cybersécurité et de la souveraineté numérique.',
};
