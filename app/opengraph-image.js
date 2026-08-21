import { ImageResponse } from "next/og";

export const alt = "Portfolio de Kablankan Tiemele — Développeur Full Stack";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function ImagePartage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#ffffff",
          color: "#101010",
          padding: "64px 70px",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 310,
            height: 310,
            borderRadius: 999,
            border: "58px solid #fff2e8",
            right: -110,
            bottom: -120
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 42,
            right: 70,
            display: "flex",
            padding: "10px 16px",
            border: "1px solid #ffd9bd",
            borderRadius: 14,
            background: "#fffaf6",
            color: "#8a4b20",
            fontSize: 20,
            fontFamily: "monospace"
          }}
        >
          docker compose up -d
        </div>

        <div
          style={{
            position: "absolute",
            right: 85,
            bottom: 64,
            display: "flex",
            padding: "10px 16px",
            border: "1px solid #ececec",
            borderRadius: 14,
            background: "#ffffff",
            color: "#747474",
            fontSize: 18,
            fontFamily: "monospace",
            transform: "rotate(-4deg)"
          }}
        >
          const build = await deploy();
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 790,
            justifyContent: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 34
            }}
          >
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: 17,
                background: "#ff7a1a",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: 23,
                marginRight: 18
              }}
            >
              KT
            </div>
            <div style={{ display: "flex", fontSize: 26, fontWeight: 800 }}>
              Kablankan Tiemele Israël Kévin
            </div>
          </div>

          <div
            style={{
              display: "flex",
              color: "#ff7a1a",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              fontWeight: 800,
              fontSize: 18,
              marginBottom: 20
            }}
          >
            Full Stack · Backend · Infrastructure
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 66,
              lineHeight: 0.98,
              letterSpacing: "-0.045em",
              fontWeight: 900,
              maxWidth: 760
            }}
          >
            <span>Des produits numériques</span>
            <span style={{ color: "#ff7a1a" }}>clairs, solides et exploitables.</span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              color: "#676767",
              fontSize: 24,
              maxWidth: 710,
              lineHeight: 1.35
            }}
          >
            Applications web et mobiles, API, systèmes temps réel, DevOps et déploiement.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: 215,
            right: 92,
            width: 250,
            height: 250,
            borderRadius: 42,
            border: "1px solid #ececec",
            background: "linear-gradient(145deg, #ffffff, #fff5ed)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#ff7a1a",
              fontSize: 92,
              fontWeight: 900,
              letterSpacing: "-0.08em"
            }}
          >
            KT
          </div>
          <div style={{ display: "flex", fontSize: 19, fontWeight: 700, marginTop: 8 }}>
            Côte d’Ivoire
          </div>
        </div>
      </div>
    ),
    size
  );
}
