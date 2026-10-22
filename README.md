# Portfolio — Omar Abdillahi Omar

Portfolio personnel : ingénieur réseaux, implémenteur ERP Odoo et cofondateur de TechGenius
(1er prix du Forum National sur l'IA 2026 avec SafeInbox).

Le design reprend l'univers d'une console d'exploitation réseau (NOC) :

- **Hero** : topologie réseau animée (canvas) où circulent des paquets ; la souris devient un nœud.
- **Prix IA** : section « alerte priorité haute » avec photos du forum et extrait de presse.
- **Stack** : compétences rangées comme le modèle OSI (L1 → L7).
- **Parcours** : carrière présentée comme un `traceroute`.
- **Projets** : démo simulée de SafeInbox qui analyse des emails en direct.
- **Contact** : terminal interactif (`help`, `whoami`, `sudo hire omar`…).

## Stack technique

[Astro](https://astro.build) 4, site 100 % statique, TypeScript, aucune dépendance front.

## Développement

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # génère dist/
npm run preview
```

## Modifier le contenu

Tout le texte (expériences, compétences, projets, contacts) est dans
[`src/data/profile.ts`](src/data/profile.ts). Les images sont dans `public/images/`,
le CV dans `public/docs/`.

## Déploiement

Chaque push sur `main` déploie le site sur GitHub Pages via
`.github/workflows/deploy.yml`.
Dans le dépôt GitHub : **Settings → Pages → Source : GitHub Actions**.

Pour le domaine `omarabdillahiomar.com` : ajouter un fichier `public/CNAME` contenant le domaine,
puis configurer le DNS (enregistrements A vers GitHub Pages).
