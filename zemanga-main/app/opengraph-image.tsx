import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Mobutu Zemanga - Chef d'Entreprises & Consultant International";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
          fontFamily: "serif",
        }}
      >
        {/* Gold accent line top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #1a5f2a, #d4a017, #1a5f2a)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* Decorative line */}
          <div
            style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg, #d4a017, #1a5f2a)",
              borderRadius: "4px",
            }}
          />

          {/* Name */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#d4a017",
              letterSpacing: "8px",
              textAlign: "center",
            }}
          >
            MOBUTU ZEMANGA
          </div>

          {/* Motto */}
          <div
            style={{
              fontSize: "28px",
              fontStyle: "italic",
              color: "#d4a017",
              opacity: 0.8,
            }}
          >
            &ldquo;Ad majoribus dei auxilio&rdquo;
          </div>

          {/* Decorative line */}
          <div
            style={{
              width: "120px",
              height: "2px",
              background: "linear-gradient(90deg, transparent, #d4a017, transparent)",
            }}
          />

          {/* Titles */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
              maxWidth: "900px",
            }}
          >
            {[
              "Chef d'Entreprises",
              "Dirigeant d'ONGs",
              "Directeur de Centres de Recherches",
              "Consultant International",
            ].map((title) => (
              <div
                key={title}
                style={{
                  fontSize: "20px",
                  color: "#ffffff",
                  padding: "8px 20px",
                  border: "1px solid rgba(212, 160, 23, 0.4)",
                  borderRadius: "30px",
                  background: "rgba(212, 160, 23, 0.1)",
                }}
              >
                {title}
              </div>
            ))}
          </div>
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "4px",
          }}
        >
          mobutuzemanga.com
        </div>

        {/* Gold accent line bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #1a5f2a, #d4a017, #1a5f2a)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
