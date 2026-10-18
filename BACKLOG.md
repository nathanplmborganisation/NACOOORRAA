# Backlog Priorisé NACORA

*Dernière mise à jour : 18 octobre 2025*
*Responsable : @nathanplmb*
*Agent : NACORA Tech Lead (Vibe Code Web)*

---

## 📌 Légende

| Label | Description | Workflow |
|-------|-------------|----------|
| `autonomous` | Tâche exécutable sans validation intermédiaire | Agent → Exécution → Tests → PR |
| `needs-approval` | Tâche nécessitant validation explicite | Agent → Plan → Attente → Exécution → Tests → PR |
| `high-priority` | Priorité élevée (sécurité, blocage) | À traiter en premier |
| `medium-priority` | Priorité moyenne (amélioration) | À traiter après les haute priorité |
| `low-priority` | Priorité basse (nettoyage, doc) | À traiter en dernier |

---

## 🔴 Haute Priorité (Critique - Validation requise)

### 🔒 Sécurité & Architecture

| # | ID | Titre | Label | Fichiers concernés | Bénéfices | Risques | Effort | Statut |
|---|----|-------|-------|---------------------|----------|---------|--------|--------|
| 1 | SEC-001 | **Sécuriser firestore.rules** : Remplacer l'email hardcodé par des custom claims | `needs-approval`, `high-priority` | `firestore.rules` | Élimine le risque de compromission si l'email est exposé | Aucun (amélioration de sécurité) | Faible | ⏳ À faire |
| 2 | SEC-002 | **Configurer rate limiting** pour l'API Express | `needs-approval`, `high-priority` | `server.ts`, `package.json` | Prévient les attaques par déni de service | Aucun (sécurité) | Moyen | ⏳ À faire |
| 3 | SEC-003 | **Remplacer localStorage par cookies httpOnly** pour les sessions | `needs-approval`, `high-priority` | `AuthContext.tsx`, `server.ts` | Élimine les risques XSS liés au stockage client | Régression possible si mal implémenté | Élevé | ⏳ À faire |
| 4 | SEC-004 | **Vérifier les permissions Firebase Admin** dans firestore.rules | `needs-approval`, `high-priority` | `firestore.rules` | Garantit que seul le serveur peut créer des transactions | Bloque les opérations légitimes si mal configuré | Faible | ⏳ À faire |

### 🚨 Problèmes de production

| # | ID | Titre | Label | Fichiers concernés | Bénéfices | Risques | Effort | Statut |
|---|----|-------|-------|---------------------|----------|---------|--------|--------|
| 5 | PROD-001 | **Corriger la création de credit_transactions** : Actuellement seul un admin peut en créer (ligne 28 de firestore.rules) | `needs-approval`, `high-priority` | `firestore.rules` | Permet au serveur de créer des transactions | Risque de création frauduleuse si mal sécurisé | Faible | ⏳ À faire |

---

## 🟡 Priorité Moyenne (Améliorations - Certaines autonomes)

### 🧹 Qualité de Code

| # | ID | Titre | Label | Fichiers concernés | Bénéfices | Risques | Effort | Statut |
|---|----|-------|-------|---------------------|----------|---------|--------|--------|
| 6 | CODE-001 | **Corriger les 27 empty catch blocks** | `autonomous`, `medium-priority` | `dbStore.ts` (16), `gmailService.ts` (2), `AuthContext.tsx` (1), `pages/admin/` (7), `components/` (1) | Meilleure gestion des erreurs, débogage facilité | Aucun | Faible | ⏳ À faire |
| 7 | CODE-002 | **Nettoyer les 31 console.log** | `autonomous`, `medium-priority` | Divers fichiers src/ | Code plus propre, meilleure performance | Aucun | Faible | ⏳ À faire |
| 8 | CODE-003 | **Remplacer les 1270 occurrences de `any`** par des types explicites | `autonomous`, `medium-priority` | Tous les fichiers TypeScript | Meilleure typage, moins d'erreurs à l'exécution | Risque de régression si types incorrects | Élevé | ⏳ À faire |

### 🔧 Tests & CI/CD

| # | ID | Titre | Label | Fichiers concernés | Bénéfices | Risques | Effort | Statut |
|---|----|-------|-------|---------------------|----------|---------|--------|--------|
| 9 | TEST-001 | **Configurer Jest/Vitest** pour un framework de test complet | `needs-approval`, `medium-priority` | `package.json`, `jest.config.js` | Tests plus robustes, meilleure intégration CI | Migration des tests existants nécessaire | Moyen | ⏳ À faire |
| 10 | TEST-002 | **Ajouter des tests pour les fonctions critiques** (auth, Firebase) | `autonomous`, `medium-priority` | `src/test/` | Meilleure couverture de test | Aucun | Moyen | ⏳ À faire |

### 📦 Dépendances

| # | ID | Titre | Label | Fichiers concernés | Bénéfices | Risques | Effort | Statut |
|---|----|-------|-------|---------------------|----------|---------|--------|--------|
| 11 | DEP-001 | **Mettre à jour les dépendances** (sécurité) | `needs-approval`, `medium-priority` | `package.json`, `bun.lockb` | Correction des vulnérabilités | Risque de régression avec les nouvelles versions | Faible | ⏳ À faire |
| 12 | DEP-002 | **Ajouter Zod** pour la validation des inputs API | `needs-approval`, `medium-priority` | `package.json`, `server.ts` | Meilleure sécurité, validation des données | Migration des validations existantes | Moyen | ⏳ À faire |

---

## 🟢 Basse Priorité (Nettoyage & Documentation)

### 📝 Documentation

| # | ID | Titre | Label | Fichiers concernés | Bénéfices | Risques | Effort | Statut |
|---|----|-------|-------|---------------------|----------|---------|--------|--------|
| 13 | DOC-001 | **Ajouter des commentaires JSDoc** aux fonctions publiques | `autonomous`, `low-priority` | Tous les fichiers API | Meilleure maintenabilité | Aucun | Moyen | ⏳ À faire |
| 14 | DOC-002 | **Documenter l'architecture** (README technique) | `autonomous`, `low-priority` | `ARCHITECTURE.md` | Meilleure compréhension du projet | Aucun | Faible | ⏳ À faire |
| 15 | DOC-003 | **Créer un guide de contribution** | `autonomous`, `low-priority` | `CONTRIBUTING.md` | Standardisation des contributions | Aucun | Faible | ⏳ À faire |

### 🔧 Optimisations

| # | ID | Titre | Label | Fichiers concernés | Bénéfices | Risques | Effort | Statut |
|---|----|-------|-------|---------------------|----------|---------|--------|--------|
| 16 | OPT-001 | **Optimiser les imports** (supprimer les doublons) | `autonomous`, `low-priority` | Tous les fichiers | Meilleure performance de build | Aucun | Faible | ⏳ À faire |
| 17 | OPT-002 | **Minifier les bundles** (configuration Vite) | `autonomous`, `low-priority` | `vite.config.ts` | Meilleure performance | Aucun | Faible | ⏳ À faire |
| 18 | OPT-003 | **Configurer ESLint/Prettier** | `autonomous`, `low-priority` | `.eslintrc`, `.prettierrc` | Code plus consistant | Conflits possibles avec le style existant | Faible | ⏳ À faire |

### 🛠️ Outils & Automatisation

| # | ID | Titre | Label | Fichiers concernés | Bénéfices | Risques | Effort | Statut |
|---|----|-------|-------|---------------------|----------|---------|--------|--------|
| 19 | TOOL-001 | **Configurer Git hooks** (Husky) | `autonomous`, `low-priority` | `.husky/`, `package.json` | Exécution automatique des vérifications | Aucun | Faible | ⏳ À faire |
| 20 | TOOL-002 | **Configurer Sentry** pour le monitoring des erreurs | `needs-approval`, `low-priority` | `package.json`, `server.ts` | Meilleure observabilité | Coût supplémentaire (à évaluer) | Moyen | ⏳ À faire |
| 21 | TOOL-003 | **Configurer Dependabot** pour les mises à jour de sécurité | `needs-approval`, `low-priority` | `.github/dependabot.yml` | Mises à jour automatiques des dépendances | Risque de régression avec les nouvelles versions | Faible | ⏳ À faire |

---

## 📊 Statistiques du Backlog

| Catégorie | Total | Autonomous | Needs-Approval | High | Medium | Low |
|-----------|-------|-----------|---------------|------|--------|-----|
| **Sécurité & Architecture** | 4 | 0 | 4 | 4 | 0 | 0 |
| **Problèmes de production** | 1 | 0 | 1 | 1 | 0 | 0 |
| **Qualité de Code** | 3 | 3 | 0 | 0 | 3 | 0 |
| **Tests & CI/CD** | 2 | 1 | 1 | 0 | 2 | 0 |
| **Dépendances** | 2 | 0 | 2 | 0 | 2 | 0 |
| **Documentation** | 3 | 3 | 0 | 0 | 0 | 3 |
| **Optimisations** | 3 | 3 | 0 | 0 | 0 | 3 |
| **Outils** | 3 | 2 | 1 | 0 | 1 | 2 |
| **Total** | **21** | **12** | **9** | **5** | **8** | **8** |

---

## 🎯 Roadmap Recommandée

### Phase 1 : Sécurité & Stabilité (1-2 semaines)
1. **SEC-001** : Sécuriser firestore.rules (1 jour)
2. **SEC-003** : Remplacer localStorage par cookies httpOnly (2-3 jours)
3. **SEC-002** : Configurer rate limiting (1 jour)
4. **PROD-001** : Corriger création credit_transactions (1 jour)

### Phase 2 : Qualité de Code (2-3 semaines)
1. **CODE-001** : Corriger les 27 empty catch blocks (1 jour)
2. **CODE-002** : Nettoyer les 31 console.log (1 jour)
3. **CODE-003** : Remplacer les `any` (1-2 semaines)

### Phase 3 : Tests & Documentation (1-2 semaines)
1. **TEST-001** : Configurer Jest/Vitest (2-3 jours)
2. **TEST-002** : Ajouter des tests critiques (1 semaine)
3. **DOC-001** : Ajouter JSDoc (1 semaine)

### Phase 4 : Optimisations (Continu)
- **OPT-001** à **OPT-003** : Optimisations diverses
- **TOOL-001** à **TOOL-003** : Configuration d'outils

---

## 🔄 Historique des Tâches

| Date | Tâche | ID | Statut | PR | Agent |
|------|-------|----|--------|----|-------|
| 18/10/2025 | Configuration agent autonome | - | ✅ Terminé | - | - |
| 18/10/2025 | Audit technique complet | - | ✅ Terminé | - | - |
| 18/10/2025 | Correction erreurs TypeScript (PR #2) | - | ✅ Terminé | #2 | - |
| 18/10/2025 | Automatisation CI (PR #4) | - | ✅ Terminé | #4 | - |

---

## 📝 Notes

- **Agent configuré** : `~/.vibe/agents/nacora.toml` (158 lignes)
- **Règles** : Définies dans `AGENTS.md` Section 3 et 4
- **Workflow CI** : Configuré dans `.github/workflows/main.yml`
- **Template PR** : Disponible dans `.github/pull_request_template.md`
- **Commandes de vérification** : `bun run lint`, `bun run build`, `bun run test`

---

## 🚀 Prochaines Étapes

1. **Valider la configuration de l'agent** avec une tâche d'analyse simple
2. **Prioriser les tâches** en fonction des besoins immédiats
3. **Commencer par SEC-001** (sécurité firestore.rules) - nécessite validation
4. **Exécuter CODE-001** (empty catch blocks) en parallèle si validation obtenue

*Dernière action : Configuration initiale de l'agent et du backlog*
