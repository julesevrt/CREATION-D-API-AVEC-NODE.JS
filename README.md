# API Node.js

Une API pour gérer les utilisateurs avec Node.js.

## Démarrage

//bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Compiler et lancer en production
npm run build
npm start
```

Le serveur démarre sur `http://localhost:4000`

## Endpoints

### GET `/`
Vérifier que l'API fonctionne
```
Réponse: 🚀 API Node.js avec TypeScript fonctionne !
```

### GET `/users`
Récupère la liste des utilisateurs
```bash
curl http://localhost:4000/users
```
```json
{
  "users": [
    { "name": "Alice", "email": "alice@example.com" }
  ]
}
```

### POST `/users`
Ajoute un nouvel utilisateur
```bash
curl -X POST http://localhost:4000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice", "email": "alice@example.com"}'
```
```json
{
  "message": "Utilisateur Alice ajouté avec succès !",
  "email": "alice@example.com"
}
```

## Scripts

- `npm run dev` - Lancer en développement avec rechargement automatique
- `npm run build` - Compiler TypeScript
- `npm start` - Lancer le serveur compilé

## Variables d'environnement

Créez un fichier `.env` :

PORT=4000
