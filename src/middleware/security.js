/**
 * Middlewares de sécurité additionnels
 */

// Vérification de l'origine des requêtes
const validateOrigin = (req, res, next) => {
  const origin = req.get('origin');
  const allowedOrigins = process.env.CORS_ORIGIN
    ? process.env.CORS_ORIGIN.split(',')
    : ['http://localhost:3000'];

  if (process.env.NODE_ENV === 'production') {
    if (!origin || !allowedOrigins.some(allowed => origin.startsWith(allowed))) {
      return res.status(403).json({
        success: false,
        error: 'Origine non autorisée'
      });
    }
  }

  next();
};

// Anti-bot simple (honeypot)
const honeypotCheck = (req, res, next) => {
  if (req.body && req.body._honeypot) {
    return res.status(200).json({
      success: true,
      message: 'Message envoyé avec succès !'
    });
  }
  next();
};

// Nettoyage des entrées
const sanitizeInput = (req, res, next) => {
  if (req.body) {
    const sanitize = (obj) => {
      if (typeof obj === 'string') {
        return obj
          .replace(/<[^>]*>/g, '')
          .replace(/javascript:/gi, '')
          .replace(/on\w+\s*=/gi, '')
          .trim();
      }
      if (Array.isArray(obj)) return obj.map(sanitize);
      if (obj && typeof obj === 'object') {
        const cleaned = {};
        for (const [key, value] of Object.entries(obj)) {
          cleaned[key] = sanitize(value);
        }
        return cleaned;
      }
      return obj;
    };

    req.body = sanitize(req.body);
  }
  next();
};

module.exports = {
  validateOrigin,
  honeypotCheck,
  sanitizeInput
};
