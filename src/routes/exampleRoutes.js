// Exemple de fichier de routes
// Ce fichier définit les endpoints de l'API

const express = require('express');
const router = express.Router();
const ExampleController = require('../controllers/exampleController');

// Routes pour les exemples
router.get('/examples', ExampleController.getAll);
router.get('/examples/:id', ExampleController.getById);
router.post('/examples', ExampleController.create);
router.put('/examples/:id', ExampleController.update);
router.delete('/examples/:id', ExampleController.delete);

module.exports = router;
