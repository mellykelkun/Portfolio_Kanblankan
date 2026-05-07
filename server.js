require('dotenv').config();
const http = require('http');
const app = require('./src/app');

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

// Timeouts synchronisés avec Render
server.keepAliveTimeout = 65000;
server.headersTimeout = 66000;
server.requestTimeout = 30000;

server.listen(PORT, '0.0.0.0', () => {
  const url = process.env.PUBLIC_URL || `http://localhost:${PORT}`;
  console.log(`\n`);
  console.log(`═══════════════════════════════════════`);
  console.log(`  🚀 Portfolio en ligne`);
  console.log(`  📡 ${url}`);
  console.log(`  ⚙️  ${process.env.NODE_ENV || 'development'}`);
  console.log(`═══════════════════════════════════════`);
  console.log(`\n`);
});
