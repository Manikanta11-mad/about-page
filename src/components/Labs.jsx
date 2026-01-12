import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Labs() {
  return (
    <section
      className="container mt-5 labs-root"
      style={{
        width: "1120px",
        height: "620px",
        borderRadius: "24px",
        boxSizing: "border-box",
      }}
    >
      {/* INTERNAL RESPONSIVE STYLES – ONLY ADDITION */}
      <style>
        {`
          /* Laptop */
          @media (max-width: 1199px) {
            .labs-root {
              width: 100% !important;
              height: auto !important;
            }

            .labs-left,
            .labs-right-card {
              width: 100% !important;
            }
          }

          /* Tablet */
          @media (max-width: 991px) {
            .labs-left,
            .labs-right {
              text-align: center;
            }

            .labs-right-card {
              margin-left: 0 !important;
              margin-top: 40px;
            }
          }

          /* Mobile */
          @media (max-width: 767px) {
            .labs-heading,
            .labs-subheading {
              font-size: 32px !important;
              line-height: 40px !important;
              width: 100% !important;
            }

            .labs-desc {
              width: 100% !important;
              font-size: 16px !important;
              line-height: 26px !important;
            }

            .labs-right-card {
              width: 100% !important;
              height: auto !important;
              padding: 24px !important;
              row-gap: 30px !important;
            }
          }
        `}
      </style>

      <div className="row align-items-center g-5">

        {/* LEFT CONTENT */}
        <div className="col-md-6 labs-left">

          {/* Heading */}
          <div
            className="labs-heading"
            style={{
              width: "421px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: "48px",
              lineHeight: "60px",
              letterSpacing: "0px",
              color: "#155DFC",
            }}
          >
            CareerCrush Labs
          </div>

          {/* Subheading */}
          <div
            className="labs-subheading"
            style={{
              width: "500px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "48px",
              lineHeight: "60px",
              letterSpacing: "0px",
              marginTop: "12px",
            }}
          >
            exists to re-engineer <br /> careers for the future
          </div>

          {/* Description */}
          <p
            className="labs-desc"
            style={{
              width: "528px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "20px",
              lineHeight: "32.5px",
              letterSpacing: "0px",
              color: "#64748b",
              marginTop: "20px",
            }}
          >
            With clarity, proof, and dignity at the core. We are building a career
            operating system where talent is understood faster, evaluated fairly,
            and trusted by default.
          </p>
        </div>

       {/* RIGHT CARD */}
<div className="col-md-6 labs-right">
  <div
    className="labs-right-card"
    style={{
      width: "528px",
      height: "387px",
      background: "#ffffff",
      border: "2px solid #E2E8F0",
      borderRadius: "24px",
      padding: "50px",
      boxSizing: "border-box",
      marginLeft: "auto",
      display: "grid",
      gridTemplateRows: "repeat(3, 1fr)",
      rowGap: "60px",
       boxShadow: "0 0 30px 10px rgba(0, 0, 0, 0.1)", // EVEN shadow on all sides
    }}
  >
    {[
      ["Understood Faster", "Clear signals, no noise", "💬", "#6366f1", "#F8EFFF"],
      ["Evaluated Fairly", "Merit-based, transparent", "⚖️", "#9810FA", "#F8EFFF"],
      ["Trusted by Default", "Verified, authentic connections", "🛡️", "#f59e0b", "#FFF7ED"],
    ].map((item, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "40px",
            height: "40px",
            background: item[4],
            fontSize: "18px",
            color: item[3],
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "16px",
            flexShrink: 0,
          }}
        >
          {item[2]}
        </div>

        {/* Text */}
        <div>
          <div style={{ fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>
            {item[0]}
          </div>
          <div style={{ fontSize: "14px", color: "#64748b" }}>
            {item[1]}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


      </div>
    </section>
  );
}
