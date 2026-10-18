# Directives de Direction Artistique & Design System NACORA

## 1. Direction Artistique Globale (Liquid Glass Sobre & Haut de Gamme)
La direction artistique validée sur la page **Opportunités** et ses fiches de détail sert de référence absolue pour l'ensemble des pages et composants de la plateforme NACORA :

### Palette de Couleurs & Nuances Sémantiques
- **Canvas / Fond sombre immersif** : `#060812` à `#0B0F19` avec subtil grain et reflets d'ambiance discrets.
- **Typographie principale** : `#F5F6FA` (titres et textes à fort contraste) et `#9AA0B2` (labels, métadonnées secondaires).
- **Rouge NACORA (`#D81A45` / `#FF6685`)** : Couleur de marque signature. Réservée aux actions clés, logos, badges entreprise et statuts prioritaires.
- **Liquid Glass Neutre** : `bg-white/[0.04]` à `bg-white/[0.06]`, bordures `border-white/10`, `backdrop-blur-xl`.
- **Couleurs sémantiques ciblées (avec retenue)** :
  - **Vert (`#34D399` / `#12B76A`)** : Rémunérations, gains, validations.
  - **Ambre (`#FBBF24` / `#F79009`)** : Deadlines, alertes, étapes intermédiaires.
  - **Violet IA (`#C084FC`)** : Fonctionnalités d'intelligence artificielle, extractions et suggestions.

## 2. Règles d'Agencement & Layout
- **Intégration fluide dans l'espace utile** : Les fiches et vues détaillées exploitent 100% de la largeur disponible à droite de la sidebar sans jamais déborder ou passer sous la navigation.
- **Bandeaux de métadonnées monoline** : Les séries de badges/chips d'informations privilégient un alignement sur une seule ligne (`flex-nowrap`, `whitespace-nowrap`) avec défilement fluide sans barre sur mobile.
- **Liquid Glass dosé** : Éviter les dégradés sursaturés ou effets de verre trop épais. Privilégier des panneaux nets avec coins arrondis (`rounded-2xl`), contrastes contrôlés et bordures fines (`border-white/10`).

---

## 3. Règles de Développement pour les Agents IA

### 3.1 Principes Généraux
- **Ne jamais modifier directement `main`** : Toujours travailler sur une branche dédiée (ex: `fix/xxx`, `feat/xxx`, `chore/xxx`).
- **Analyser avant de coder** : Comprendre le problème, identifier les fichiers concernés, les dépendances et proposer un plan détaillé avant toute modification.
- **Limiter les changements** : Se concentrer uniquement sur le périmètre de la demande, sans refactor inutiles ou modifications hors scope.
- **Respecter les conventions** : Suivre les patterns existants (noms de fichiers, structure, style, typage TypeScript).
- **Privilégier la simplicité** : Solutions minimalistes, robustes et maintenables.

### 3.2 Processus de Développement
1. **Analyse** :
   - Lire le code existant concerné par la demande.
   - Identifier les causes racines des problèmes.
   - Vérifier les impacts potentiels sur d'autres fonctionnalités.
2. **Planification** :
   - Présenter un plan avec les fichiers à modifier, les risques, les vérifications nécessaires et les tests à exécuter.
   - Attendre **l'accord explicite** avant de modifier le code.
3. **Implémentation** :
   - Créer une branche dédiée (`git checkout -b type/description`).
   - Appliquer les changements de manière atomique et ciblée.
   - Respecter les conventions de nommage (commits, branches, PR).
4. **Vérification** :
   - Exécuter `bun run lint` (TypeScript).
   - Exécuter `bun run build` (construction).
   - Exécuter `bun run test` (tests).
   - Corriger **toutes** les erreurs avant de proposer une PR.
5. **Documentation** :
   - Rédiger un commit clair avec les modifications, les tests exécutés et les résultats.
   - Remplir le template de PR avec précision.

### 3.3 Règles de Sécurité et Intégrité
- **Ne jamais exposer de secrets** :
  - Pas de clés API, tokens, mots de passe, ou variables d'environnement sensibles dans le code, les logs ou les messages de commit.
  - Masquer toute information sensible dans les outputs.
- **Ne jamais fusionner** :
  - Une Pull Request doit **toujours** être reviewée et approuvée par un humain (`@nathanplmb`) avant merge.
  - Ne jamais utiliser `--force` ou contourner les protections de branche.
- **Ne jamais déclencher de déploiement** :
  - Aucun déploiement automatique (Vercel, Cloud Run, etc.) sans autorisation explicite.
  - Vérifier que les workflows CI ne déclenchent pas de déploiement en production.
- **Ne jamais contourner les protections** :
  - Respecter les règles GitHub (branch protection, required reviews, etc.).
  - Ne jamais modifier les règles de sécurité Firebase ou les permissions.

### 3.4 Tests et Qualité de Code
- **Ne jamais déclarer un test réussi sans l'avoir exécuté** :
  - Toujours vérifier avec `bun run test` et confirmer que le code de sortie est `0`.
  - Une suite de tests qui affiche des `[PASS]` mais renvoie un code `0` malgré des échecs **n'est pas valide**.
- **Corriger les échecs** :
  - Si un test échoue, identifier la cause racine et corriger **avant** de proposer une PR.
  - Ne jamais ignorer ou supprimer un test pour obtenir un résultat vert.
- **Documenter les limites** :
  - Si un test ne peut pas être exécuté (dépendances manquantes, environnement), l'indiquer clairement dans la PR.

### 3.5 Revue de Code et Validation
- **Toujours attendre une approbation explicite** avant de fusionner une PR.
- **Ne jamais fusionner une PR** sans :
  - ✅ `bun run lint` **PASS** (code 0)
  - ✅ `bun run build` **PASS** (code 0)
  - ✅ `bun run test` **PASS** (code 0)
  - ✅ Approbation humaine (`@nathanplmb`)
- **Signaler les risques** :
  - Documenter les risques potentiels (régressions, performances, sécurité) dans la PR.
  - Proposer des atténuations si nécessaire.
