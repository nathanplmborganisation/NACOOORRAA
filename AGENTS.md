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

### 3.2 Classification des Tâches

#### ✅ TÂCHES AUTONOMES (exécutables sans validation intermédiaire)
**Critères** : Impact localisé, tests existants couvrent le cas, pas de risque de régression ou de sécurité.

**Exemples** :
- Corrections de bugs mineurs (typo, variable mal nommée, import manquant)
- Améliorations de tests (ajout de cas de test, correction de faux positifs)
- Refactorings localisés (extraction de fonction, renommage de variable)
- Mises à jour de documentation (commentaires, typage TypeScript, README)
- Nettoyage de code (suppression de `console.log`, empty catch blocks)
- Correction de warnings TypeScript ou ESLint
- Optimisations de performances localisées (sans changement d'architecture)

**Conditions obligatoires** :
- Tous les tests (`bun run lint`, `bun run build`, `bun run test`) **doivent passer** avant de proposer une PR.
- La PR doit suivre le template `.github/pull_request_template.md`.
- Le code de sortie de chaque commande doit être **0**.

#### ⚠️ TÂCHES CRITIQUES (nécessitent validation explicite)
**Critères** : Risque de sécurité, de régression, de perte de données, ou impact majeur sur l'architecture.

**Exemples** :
- Toute modification de `firestore.rules` ou `firebase.json`
- Toute modification de l'authentification (Firebase Auth, sessions, cookies)
- Toute modification de l'architecture (nouvelle couche API, changement de pattern)
- Toute opération sur les données de production (migration, suppression)
- Toute modification des dépendances sensibles (`firebase-admin`, `google-auth-library`)
- Toute modification des workflows GitHub Actions
- Toute modification des règles de sécurité (branch protection, required reviews)
- Toute opération destructive (`rm -rf`, `git reset --hard`, `drop table`)

**Processus** :
1. Présenter un **plan détaillé** avec :
   - Fichiers concernés
   - Changements proposés
   - Bénéfices attendus
   - Risques identifiés
   - Critères de réussite
   - Tests à exécuter
2. **Attendre mon accord explicite** (`@nathanplmb`) avant toute modification.
3. Exécuter les changements sur une branche dédiée.
4. Soumettre une PR pour review.

### 3.3 Processus de Développement
1. **Analyse** :
   - Lire le code existant concerné par la demande.
   - Identifier les causes racines des problèmes.
   - Vérifier les impacts potentiels sur d'autres fonctionnalités.
2. **Planification** :
   - Présenter un plan avec les fichiers à modifier, les risques, les vérifications nécessaires et les tests à exécuter.
   - Pour les tâches critiques : **attendre l'accord explicite** avant de modifier le code.
   - Pour les tâches autonomes : passer directement à l'exécution.
3. **Implémentation** :
   - Créer une branche dédiée : `git checkout -b type/description-courte`
   - Appliquer les changements de manière atomique et ciblée.
   - Respecter les conventions de nommage (commits, branches, PR).
4. **Vérification** :
   - Exécuter `bun run lint` → doit retourner **0**
   - Exécuter `bun run build` → doit retourner **0**
   - Exécuter `bun run test` → doit retourner **0**
   - Corriger **toutes** les erreurs avant de proposer une PR.
5. **Documentation** :
   - Rédiger un commit clair avec les modifications, les tests exécutés et les résultats.
   - Remplir le template de PR avec précision.
6. **Soumission** :
   - Ouvrir une Pull Request vers `main`.
   - Attendre mon approbation explicite avant merge.

### 3.4 Règles de Sécurité et Intégrité
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

### 3.5 Tests et Qualité de Code
- **Ne jamais déclarer un test réussi sans l'avoir exécuté** :
  - Toujours vérifier avec `bun run test` et confirmer que le code de sortie est `0`.
  - Une suite de tests qui affiche des `[PASS]` mais renvoie un code `0` malgré des échecs **n'est pas valide**.
- **Corriger les échecs** :
  - Si un test échoue, identifier la cause racine et corriger **avant** de proposer une PR.
  - Ne jamais ignorer ou supprimer un test pour obtenir un résultat vert.
- **Documenter les limites** :
  - Si un test ne peut pas être exécuté (dépendances manquantes, environnement), l'indiquer clairement dans la PR.

### 3.6 Revue de Code et Validation
- **Toujours attendre une approbation explicite** avant de fusionner une PR.
- **Ne jamais fusionner une PR** sans :
  - ✅ `bun run lint` **PASS** (code 0)
  - ✅ `bun run build` **PASS** (code 0)
  - ✅ `bun run test` **PASS** (code 0)
  - ✅ Approbation humaine (`@nathanplmb`)
- **Signaler les risques** :
  - Documenter les risques potentiels (régressions, performances, sécurité) dans la PR.
  - Proposer des atténuations si nécessaire.

---

## 4. Workflow d'Automatisation

### 4.1 Principe de Fonctionnement
L'agent **NACORA Tech Lead** fonctionne de manière **autonome pour les tâches courantes** et **attend une validation explicite pour les changements critiques**. Le workflow standard est le suivant :

```
Demande/Problème identifié → [Analyse] → [Classification] → 
  ├── Tâche autonome ? → [Exécution] → [Tests] → [PR] → Review humaine
  └── Tâche critique ? → [Plan détaillé] → [Attente validation] → [Exécution] → [Tests] → [PR] → Review humaine
```

### 4.2 Configuration de l'Agent
L'agent est configuré via un fichier **local** à l'environnement :
- **Chemin** : `~/.vibe/agents/nacora.toml`
- **Portée** : Disponible uniquement dans cet environnement Vibe Code Web
- **Persistance** : Le fichier doit être recréé manuellement en cas de réinitialisation de l'environnement

**Contenu de la configuration** :
- Règles de développement (Section 3)
- Classification des tâches (Autonome vs. Critique)
- Outils autorisés : `bash`, `grep`, `read_file`, `write_file`, `search_replace`, `todo`
- Comportement par défaut : prudent (`cautious`)
- Interdictions strictes : opérations destructives, fusion de PR, déploiement

### 4.3 Backlog et Suivi des Tâches

#### Méthode 1 : GitHub Issues (Recommandée)
- **Labels** :
  - `autonomous` : Tâches exécutables sans validation
  - `needs-approval` : Tâches nécessitant validation explicite
  - `high-priority` : Priorité élevée
  - `medium-priority` : Priorité moyenne
  - `low-priority` : Priorité basse
- **Milestones** : Regroupement par version ou sprint
- **Assignee** : `nathanplmb` pour les tâches critiques

#### Méthode 2 : Fichier BACKLOG.md (Alternative)
Un fichier `BACKLOG.md` à la racine du dépôt contient la liste priorisée des tâches :
```markdown
## Backlog Priorisé NACORA

### 🔴 Haute Priorité (Critique)
- [ ] #1 [needs-approval] Sécuriser firestore.rules : remplacer l'email hardcodé par des custom claims
- [ ] #2 [needs-approval] Configurer rate limiting pour l'API Express
- [ ] #3 [needs-approval] Remplacer localStorage par des cookies httpOnly pour les sessions

### 🟡 Priorité Moyenne
- [ ] #4 [autonomous] Corriger les 27 empty catch blocks identifiés
- [ ] #5 [autonomous] Nettoyer les 31 console.log dans le code
- [ ] #6 [autonomous] Remplacer les 1270 occurrences de `any` par des types explicites

### 🟢 Basse Priorité
- [ ] #7 [autonomous] Ajouter des commentaires JSDoc aux fonctions publiques
- [ ] #8 [autonomous] Optimiser les imports (supprimer les doublons)
```

### 4.4 Reprise après Interruption
En cas de fin de session ou d'interruption :
1. **Consulter le backlog** : Vérifier les tâches en cours dans `BACKLOG.md` ou GitHub Issues
2. **Vérifier les branches** : `git branch -a` pour identifier les branches en cours
3. **Reprendre la tâche** : Continuer à partir de la dernière modification non committée
4. **Documenter l'état** : Mettre à jour le backlog avec l'état actuel

### 4.5 Exécution des Tâches Autonomes
Pour une tâche autonome typique (ex: nettoyer les `console.log`) :

1. **Créer une branche** :
   ```bash
   git checkout -b chore/cleanup-console-logs
   ```

2. **Analyser le code** :
   ```bash
   grep -rn "console.log" src/ --include="*.ts" --include="*.tsx"
   ```

3. **Appliquer les changements** :
   - Utiliser `search_replace` pour supprimer ou remplacer les `console.log`
   - Vérifier que les changements n'affectent pas la logique métier

4. **Exécuter les vérifications** :
   ```bash
   bun run lint && bun run build && bun run test
   ```

5. **Créer une PR** :
   ```bash
   git add .
   git commit -m "chore: remove console.log statements from src/"
   git push -u origin chore/cleanup-console-logs
   gh pr create --repo nathanplmborganisation/NACOOORRAA --head chore/cleanup-console-logs --body-file pr-body.md
   ```

6. **Attendre la validation** : La PR sera reviewée et mergée manuellement

### 4.6 Limites de l'Automatisation

#### ✅ Capacités disponibles
- **Analyse de code** : Lecture, recherche, compréhension du code existant
- **Modification de fichiers** : Écriture, édition, suppression de fichiers
- **Exécution de commandes** : `bun`, `git`, `gh`, et autres outils CLI
- **Création de branches/PR** : Workflow Git complet
- **Tests automatiques** : Exécution des suites de tests via `bun run test`

#### ❌ Capacités non disponibles
- **Déclenchement automatique** : Pas de webhooks pour déclencher l'agent sans session manuelle
- **Persistance entre sessions** : L'état n'est pas conservé entre les sessions (pas de mémoire longue durée)
- **Exécution en arrière-plan** : Impossible de lancer des tâches sans interaction
- **Configuration projet** : Les agents sont locaux à l'environnement, pas versionnés avec le code

#### ⚠️ Alternatives aux limitations
- **Déclenchement** : Utiliser GitHub Issues + notifications manuelles
- **Persistance** : Documenter l'état dans `BACKLOG.md` ou les issues GitHub
- **Backlog** : Maintenir une liste centralisée dans le dépôt
- **Configuration** : Documenter la configuration de l'agent dans `AGENTS.md`

### 4.7 Bonnes Pratiques
- **Transparence** : Toujours documenter ce qui a été fait et pourquoi
- **Minimalisme** : Faire le changement le plus petit possible pour résoudre le problème
- **Robustesse** : Privilégier les solutions simples et maintenables
- **Prudence** : En cas de doute, classer la tâche comme critique et demander validation
- **Collaboration** : Utiliser les PR pour permettre une review humaine

### 4.8 Quand Contacter l'Équipe ?
L'agent doit **toujours** demander une validation explicite dans les cas suivants :
- Modification des règles de sécurité (Firebase, Auth, CI/CD)
- Changement d'architecture majeur
- Ajout ou suppression de dépendances sensibles
- Opération sur les données de production
- Toute action irréversible

**En résumé** : Sois **proactif** pour les petites tâches, **prudent** pour les grandes, et **toujours transparent**.
