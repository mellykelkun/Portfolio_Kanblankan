const stickers = [
  { langage: "JS", code: "const api = await fetch('/api/projects');", classe: "sticker-1" },
  { langage: "DOCKER", code: "docker compose up -d", classe: "sticker-2" },
  { langage: "DART", code: "Future<void> main() async { ... }", classe: "sticker-3" },
  { langage: "WS", code: "new WebSocket('wss://api');", classe: "sticker-4" },
  { langage: "NODE", code: "async function deploy() { return ready; }", classe: "sticker-5" },
  { langage: "SQL", code: "SELECT * FROM projects;", classe: "sticker-6" },
  { langage: "REDIS", code: "redis.publish('events', payload);", classe: "sticker-7" },
  { langage: "GIT", code: "git push origin feature/ui", classe: "sticker-8" },
  { langage: "DART", code: "final app = MaterialApp(...);", classe: "sticker-9" },
  { langage: "DOCKER", code: "FROM node:24-alpine", classe: "sticker-10" }
];

export default function FondTechnique() {
  return (
    <div className="fond-technique" aria-hidden="true">
      {stickers.map((sticker) => (
        <div className={`sticker-code ${sticker.classe}`} key={sticker.code}>
          <span>{sticker.langage}</span>
          <code>{sticker.code}</code>
        </div>
      ))}
    </div>
  );
}
