# Structure du dossier src/

Ce dossier contient le code source de l'API Node.js.

## Organisation

- **`index.js`** : Point d'entrée principal de l'application
- **`controllers/`** : Contient la logique métier (traitement des requêtes)
- **`routes/`** : Définit les endpoints de l'API
- **`models/`** : Définit les structures de données
- **`middleware/`** : Fonctions middleware personnalisées

## Comment utiliser cette structure

1. **Pour ajouter une nouvelle fonctionnalité** :
   - Créez un contrôleur dans `controllers/`
   - Créez les routes correspondantes dans `routes/`
   - Si nécessaire, créez un modèle dans `models/`

2. **Exemple de flux de requête** :
   ```
   Requête → Middleware → Route → Contrôleur → Modèle → Réponse
   ```

## Exemple pratique

Pour ajouter une gestion d'utilisateurs :

```bash
# Créer les fichiers nécessaires
touch src/controllers/userController.js
touch src/routes/userRoutes.js
touch src/models/User.js
```

Puis importez-les dans `index.js` et configurez les routes.

## Installation et démarrage

```bash
# Installer les dépendances
npm install

# Démarrer le serveur en mode développement
npm run dev

# Démarrer le serveur en mode production
npm start
```

## Ressources

Consultez le [guide d'importation de dossiers](../GUIDE_IMPORTATION_DOSSIER.md) pour plus d'informations.
