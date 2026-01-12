import React from "react";

export default function Pricing() {
  return (
    <>
      {/* INTERNAL RESPONSIVE STYLES */}
      <style>
        {`
          @media (max-width: 992px) {
            section.container {
              padding-left: 16px;
              padding-right: 16px;
            }
          }

          @media (max-width: 576px) {
            h3 span {
              font-size: 32px !important;
            }

            .pricing-cards {
              flex-direction: column !important;
              align-items: center !important;
            }

            .pricing-card {
              max-width: 100% !important;
              height: auto !important;
            }
          }
        `}
      </style>

      <section
        className="container mt-5 mb-5 text-center"
        style={{
          maxWidth: "1120px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          rowGap: "48px",
          columnGap: "48px",
          marginTop: "50px",
        }}
      >
        {/* Heading */}
        <div style={{ gridColumn: "1 / -1" }}>
          <h3 className="fw-bold">
            <span
              style={{
                color: "#101828",
                fontSize: "48px",
                fontWeight: 400,
              }}
            >
              Designed for
            </span>{" "}
            <span
              style={{
                color: "#155DFC",
                fontSize: "48px",
                fontWeight: 600,
                fontStyle: "italic",
              }}
            >
              Scale
            </span>
          </h3>

          <p style={{ color: "#64748B", fontSize: "18px", lineHeight: "28px" }}>
            Two editions built to serve everyone — from individuals to enterprises.
          </p>
        </div>

        {/* COMMUNITY CARD */}
        <div
          className="pricing-card shadow d-flex flex-column text-start"
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "24px",
            padding: "24px",
            height: "480px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              background: "#F8F0FF",
              color: "#155DFC",
              borderRadius: "16px",
              fontSize: "24px",
              lineHeight: "56px",
              textAlign: "center",
              marginBottom: "8px",
            }}
          >
            👥
          </div>

           <div
              style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                background: "#F8F0FF",
                color: "#155DFC",
                fontSize: "14px",
                fontWeight: 600,
                padding: "4px 12px",
                borderRadius: "999px",
                marginBottom: "16px",
              }}
            >
              Free Access
            </div>

          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "30px",
              lineHeight: "36px",
              marginBottom: "16px",
            }}
          >
            Community Edition
          </div>

          <p style={{ fontSize: "14px", lineHeight: "22px", color: "#475569" }}>
            Free, accessible, and cost-efficient, enabling broad and inclusive participation.
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              fontSize: "14px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {[
              "Open learning with free mentor access.",
              "Sandbox projects to build proof, not profiles.",
              "Start free. Grow when ready.",
              "AI-Optimised Profile",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "10px" }} className="mt-3">
                <span
                  style={{
                    width: "24px",
                    height: "24px",
                    background: "#155DFC",
                    color: "#ffffff",
                    borderRadius: "50%",
                    fontWeight: 700,
                    textAlign: "center",
                    lineHeight: "24px",
                  }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ELITE CARD */}
        <div
          className="pricing-card d-flex flex-column text-start"
          style={{
            background: "linear-gradient(180deg,#175AF9 0%, #1E293B 100%)",
            borderRadius: "24px",
            padding: "24px",
            color: "#ffffff",
            height: "480px",
            boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              background: "rgba(255,255,255,0.15)",
              borderRadius: "16px",
              fontSize: "24px",
              lineHeight: "56px",
              textAlign: "center",
              marginBottom: "8px",
            }}
          >
            ⚡
          </div>

          <div
              style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                background: "#F59E0B",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 600,
                padding: "4px 12px",
                borderRadius: "999px",
                marginBottom: "16px",
              }}
            >
              Premium
            </div>

          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "30px",
              lineHeight: "36px",
              marginBottom: "16px",
            }}
          >
            Elite Edition
          </div>

          <p style={{ fontSize: "15px", lineHeight: "24px", color: "#E5E7EB" }}>
            Advanced decision intelligence and workflow systems for high-quality hiring and mentoring
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              fontSize: "14px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {[
              "Mentor-led acceleration with outcome-driven depth.",
              "Elite Production Project",
              "Real projects → real interviews → real outcomes.",
              "AI Career Persona",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "10px" }} className="mt-2">
                <span
                  style={{
                    width: "24px",
                    height: "24px",
                    background: "#F59E0B",
                    color: "#ffffff",
                    borderRadius: "50%",
                    fontWeight: 700,
                    textAlign: "center",
                    lineHeight: "24px",
                  }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
