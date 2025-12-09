// Point d'entrée de l'API
// Ce fichier démontre comment structurer une API Node.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Route de base
app.get('/', (req, res) => {
  res.json({ 
    message: 'Bienvenue dans votre API Node.js !',
    documentation: 'Consultez GUIDE_IMPORTATION_DOSSIER.md pour apprendre à organiser vos dossiers'
  });
});

// Exemple de route API
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  console.log(`📖 Accédez à http://localhost:${PORT}`);
});

module.exports = app;
