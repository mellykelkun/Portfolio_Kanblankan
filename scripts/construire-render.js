const { spawnSync } = require("child_process");

if (process.env.RENDER !== "true") {
  console.log("Build Render ignoré hors de Render.");
  process.exit(0);
}

console.log("Construction Next.js pour Render...");

const executableNext = require.resolve("next/dist/bin/next");
const resultat = spawnSync(process.execPath, [executableNext, "build"], {
  stdio: "inherit",
  env: process.env
});

if (resultat.error) {
  console.error("Erreur pendant la construction Next.js :", resultat.error);
  process.exit(1);
}

process.exit(resultat.status ?? 1);
