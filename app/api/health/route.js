export function GET() {
  return Response.json({
    status: "ok",
    service: "portfolio-kablankan",
    version: "2.0.0"
  });
}
