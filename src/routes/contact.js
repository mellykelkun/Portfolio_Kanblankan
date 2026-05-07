const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Validation simple
const validateContactForm = (data) => {
  const errors = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Le nom est requis (minimum 2 caractères)');
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Un email valide est requis');
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Le message est requis (minimum 10 caractères)');
  }

  return errors;
};

// Configurer le transporteur email (optionnel)
const getTransporter = () => {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }
  return null;
};

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    const errors = validateContactForm({ name, email, message });
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        errors
      });
    }

    // Log du message (toujours fonctionnel)
    console.log(`\n📬 Nouveau message de contact:`);
    console.log(`   De : ${name} <${email}>`);
    console.log(`   Sujet : ${subject || 'Non spécifié'}`);
    console.log(`   Message : ${message.substring(0, 200)}${message.length > 200 ? '...' : ''}\n`);

    // Tentative d'envoi d'email si configuré
    const transporter = getTransporter();
    if (transporter) {
      try {
        await transporter.sendMail({
          from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_EMAIL || 'kablankankevinisrael@gmail.com',
          subject: `[Portfolio] ${subject || 'Nouveau message'} - ${name}`,
          html: `
            <h2>Nouveau message depuis votre portfolio</h2>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Sujet :</strong> ${subject || 'Non spécifié'}</p>
            <p><strong>Message :</strong></p>
            <blockquote style="background:#f5f5f5;padding:15px;border-left:3px solid #6c5ce7;">
              ${message.replace(/\n/g, '<br>')}
            </blockquote>
            <p><small>Envoyé le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}</small></p>
          `
        });
        console.log('✅ Email envoyé avec succès');
      } catch (emailError) {
        console.error('⚠️ Erreur envoi email:', emailError.message);
      }
    } else {
      console.log('ℹ️ Email non configuré - message uniquement loggé');
    }

    res.json({
      success: true,
      message: 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.'
    });

  } catch (error) {
    console.error('❌ Erreur contact:', error);
    res.status(500).json({
      success: false,
      error: 'Une erreur est survenue. Veuillez réessayer.'
    });
  }
});

module.exports = router;
