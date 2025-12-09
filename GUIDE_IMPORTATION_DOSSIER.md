# Guide : Comment importer un dossier dans votre repository

Ce guide vous explique comment ajouter un dossier (et son contenu) à votre repository Git.

## Méthode 1 : Utiliser la ligne de commande Git (Recommandé)

### Étapes :

1. **Ouvrez un terminal** dans le répertoire de votre repository local
   ```bash
   cd chemin/vers/CREATION-D-API-AVEC-NODE.JS
   ```

2. **Copiez le dossier** que vous souhaitez importer dans votre repository
   ```bash
   cp -r /chemin/vers/votre/dossier ./nom-du-dossier
   ```
   
   Ou créez un nouveau dossier directement :
   ```bash
   mkdir nom-du-dossier
   ```

3. **Ajoutez le dossier à Git**
   ```bash
   git add nom-du-dossier/
   ```
   
   Ou pour ajouter tous les nouveaux fichiers :
   ```bash
   git add .
   ```

4. **Vérifiez les fichiers ajoutés**
   ```bash
   git status
   ```

5. **Créez un commit**
   ```bash
   git commit -m "Ajout du dossier nom-du-dossier"
   ```

6. **Envoyez les modifications vers GitHub**
   ```bash
   git push origin main
   ```
   
   (Remplacez `main` par le nom de votre branche si nécessaire)

### Exemple complet :
```bash
# Se placer dans le repository
cd CREATION-D-API-AVEC-NODE.JS

# Créer un nouveau dossier pour l'API
mkdir src

# Créer des fichiers dans ce dossier
touch src/index.js
touch src/routes.js

# Ajouter le dossier à Git
git add src/

# Vérifier ce qui va être commité
git status

# Créer un commit
git commit -m "Ajout du dossier src avec les fichiers de base"

# Envoyer vers GitHub
git push origin main
```

## Méthode 2 : Utiliser GitHub Desktop

1. **Ouvrez GitHub Desktop**
2. **Sélectionnez votre repository** dans la liste
3. **Copiez-collez** votre dossier directement dans le dossier du repository (via l'explorateur de fichiers)
4. GitHub Desktop détectera automatiquement les nouveaux fichiers
5. **Écrivez un message de commit** dans l'interface
6. **Cliquez sur "Commit to main"** (ou le nom de votre branche)
7. **Cliquez sur "Push origin"** pour envoyer vers GitHub

## Méthode 3 : Utiliser l'interface web GitHub (pour petits dossiers)

1. **Allez sur votre repository** sur GitHub.com
2. **Cliquez sur "Add file" → "Create new file"**
3. **Tapez le nom du dossier suivi de /** puis le nom du fichier
   - Exemple : `src/index.js`
   - GitHub créera automatiquement le dossier `src`
4. **Ajoutez le contenu du fichier**
5. **Cliquez sur "Commit changes"**
6. **Répétez** pour chaque fichier du dossier

> ⚠️ **Note** : Cette méthode est pratique uniquement pour quelques fichiers. Pour des dossiers complets, préférez la ligne de commande.

## Structure de dossiers recommandée pour une API Node.js

Voici une structure typique pour organiser votre projet :

```
CREATION-D-API-AVEC-NODE.JS/
├── src/
│   ├── controllers/      # Logique métier
│   ├── routes/           # Définition des routes
│   ├── models/           # Modèles de données
│   ├── middleware/       # Middleware personnalisés
│   └── index.js          # Point d'entrée principal
├── tests/                # Tests unitaires et d'intégration
├── config/               # Fichiers de configuration
├── node_modules/         # Dépendances (ne pas commiter)
├── .gitignore           # Fichiers à ignorer
├── package.json         # Dépendances et scripts
└── README.md            # Documentation
```

## Fichiers à ne PAS commiter (.gitignore)

Créez un fichier `.gitignore` pour exclure certains dossiers :

```
# Dépendances
node_modules/

# Fichiers d'environnement
.env
.env.local

# Logs
logs/
*.log

# Fichiers système
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
```

## Conseils importants

1. ✅ **Vérifiez toujours** ce que vous committez avec `git status`
2. ✅ **Utilisez .gitignore** pour exclure les fichiers sensibles ou volumineux
3. ✅ **Faites des commits atomiques** : un commit = une fonctionnalité/modification
4. ✅ **Écrivez des messages de commit clairs** en français ou en anglais
5. ❌ **N'ajoutez jamais** :
   - Le dossier `node_modules/`
   - Les fichiers `.env` avec des mots de passe
   - Les fichiers binaires volumineux

## Dépannage

### Problème : Le dossier est vide dans Git
Git ne suit pas les dossiers vides. Ajoutez au moins un fichier (même `.gitkeep`) :
```bash
touch mon-dossier/.gitkeep
git add mon-dossier/.gitkeep
```

### Problème : "Permission denied"
Vérifiez vos droits d'accès au repository :
```bash
git remote -v
```
Assurez-vous d'être authentifié sur GitHub.

### Problème : Conflit lors du push
Récupérez d'abord les modifications distantes :
```bash
git pull origin main
# Résolvez les conflits si nécessaire
git push origin main
```

## Ressources supplémentaires

- [Documentation Git officielle](https://git-scm.com/doc)
- [Guide GitHub en français](https://docs.github.com/fr)
- [Tutoriel Git interactif](https://learngitbranching.js.org/?locale=fr_FR)

---

**Besoin d'aide ?** Consultez la [documentation du projet](./README.md) ou ouvrez une issue sur GitHub.
