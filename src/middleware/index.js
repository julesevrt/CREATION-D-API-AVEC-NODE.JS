// Exemple de middleware personnalisé
// Les middlewares traitent les requêtes avant qu'elles n'atteignent les contrôleurs

// Logger middleware - enregistre toutes les requêtes
const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
};

// Middleware d'authentification (exemple simple)
const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  
  if (!token) {
    return res.status(401).json({ 
      error: 'Token d\'authentification manquant' 
    });
  }
  
  // Ici, vous vérifieriez le token
  // Pour l'exemple, on accepte tous les tokens
  next();
};

// Middleware de validation
const validateRequest = (schema) => {
  return (req, res, next) => {
    // Ici, vous pourriez utiliser une librairie comme Joi ou Yup
    // pour valider le corps de la requête
    next();
  };
};

module.exports = {
  logger,
  authenticate,
  validateRequest
};
