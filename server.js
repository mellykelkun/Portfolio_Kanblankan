require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🚀 Portfolio en ligne : http://localhost:${PORT}`);
  console.log(`📡 Environnement : ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 URL publique : ${process.env.PUBLIC_URL || `http://localhost:${PORT}`}\n`);
});
