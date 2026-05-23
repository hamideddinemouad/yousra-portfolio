import { ImageResponse } from "next/og";
import { portfolioData } from "@/data/portfolio";

export const alt = "Yousra Hamideddine portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(250,247,241,1) 0%, rgba(247,243,236,1) 45%, rgba(239,231,218,1) 100%)",
          color: "#1c1817",
          padding: "52px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            border: "1px solid rgba(217,201,175,0.9)",
            borderRadius: "34px",
            overflow: "hidden",
            boxShadow: "0 24px 60px rgba(50, 70, 59, 0.12)",
            background: "rgba(255,255,255,0.75)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "68%",
              padding: "60px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 24,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#c7a15b",
                  fontWeight: 700,
                }}
              >
                English Teacher
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 76,
                  lineHeight: 1,
                  fontWeight: 700,
                  color: "#32463b",
                }}
              >
                {portfolioData.profile.name}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 32,
                  lineHeight: 1.45,
                  color: "#4f4742",
                  maxWidth: 620,
                }}
              >
                Learner-centered English instruction, speaking support, grammar
                guidance, and structured student development.
              </div>
            </div>

            <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
              {["Teaching Experience", "Lesson Planning", "Student Support"].map(
                (label) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      padding: "14px 20px",
                      borderRadius: "999px",
                      border: "1px solid rgba(199,161,91,0.5)",
                      background: "rgba(255,255,255,0.9)",
                      fontSize: 22,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#3e5447",
                      fontWeight: 700,
                    }}
                  >
                    {label}
                  </div>
                ),
              )}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: "32%",
              background: "linear-gradient(180deg, #3e5447 0%, #32463b 100%)",
              color: "#f7f3ec",
              padding: "48px 34px",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 22,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "#c7a15b",
                  fontWeight: 700,
                }}
              >
                Based In
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 44,
                  lineHeight: 1.15,
                  fontWeight: 700,
                }}
              >
                Casablanca,
                <br />
                Morocco
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: 26,
                lineHeight: 1.4,
                color: "rgba(247,243,236,0.86)",
              }}
            >
              <div style={{ display: "flex" }}>
                Teaching, tutoring, and language support portfolio
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
