export default function Framework() {
  const items = [
    ["WHY", "Restore trust and meaning in a disrupted career ecosystem", "#155DFC"],
    ["WHAT", "A proof-driven career ecosystem delivering measurable, real value", "#9810FA"],
    ["WHOM", "Verified mentors, mentees, job seekers, and recruiters", "#FC156E"],
    ["WHERE", "India-first, built to scale globally", "#10A8FA"],
    ["WHEN", "Now. There is no later for careers.", "#1EAE3F"],
  ];

  return (
    <>
      {/* INTERNAL RESPONSIVE STYLES — ADDED ONLY */}
      <style>
        {`
          /* Laptop */
          @media (max-width: 1200px) {
            .framework-title {
              width: 100% !important;
              font-size: 40px !important;
            }

            .framework-card {
              width: 100% !important;
              height: auto !important;
            }
          }

          /* Tablet */
          @media (max-width: 992px) {
            .framework-title {
              font-size: 34px !important;
              flex-wrap: wrap;
            }

            .framework-desc {
              font-size: 16px !important;
              line-height: 24px !important;
            }
          }

          /* Mobile */
          @media (max-width: 576px) {
            .framework-title {
              font-size: 28px !important;
              gap: 6px !important;
            }

            .framework-desc {
              font-size: 15px !important;
              line-height: 22px !important;
            }

            .framework-card {
              padding: 24px !important;
            }
          }
        `}
      </style>

      <div className="container mt-5 text-center">
        <h3
          className="framework-title"
          style={{
            width: "639px",
            height: "58px",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "48px",
            lineHeight: "100%",
            letterSpacing: "0px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            textAlign: "center",
          }}
        >
<span
  style={{
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,       // Regular weight
    fontStyle: "normal",   // Regular style
    fontSize: "48px",
    lineHeight: "48px",    // 100% of 48px
    letterSpacing: "0px",
    color: "#101828",
  }}
>
  Our
</span>
         <span
  style={{
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,       // Bold
    fontStyle: "italic",   // Italic
    fontSize: "48px",
    lineHeight: "48px",    // 100% of 48px
    letterSpacing: "0px",
    color: "#155DFC",
  }}
>
  Future-First
</span>

          <span
  style={{
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,       // Bold
    fontStyle: "italic",   // Italic
    fontSize: "48px",
    lineHeight: "48px",    // 100% of 48px
    letterSpacing: "0px",
    color: "#101828",
  }}
>
  Framework
</span>

        </h3>

        <p
          className="framework-desc"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "18px",
            lineHeight: "28px",
            letterSpacing: "0px",
            color: "#64748B",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          Inspired by Simon Sinek’s Golden Circle, redesigned for a digital-first,
          human-centric world
        </p>

        <div className="row mt-4 g-4 justify-content-center">
          {items.map((x, i) => (
            <div key={i} className={`col-md-${i === 4 ? "6" : "5"}`}>
              <div
                className="p-4 rounded-4 text-start h-100 framework-card"
                style={{
                  width: "544px",
                  height: "184px",
                  paddingTop: "34px",
                  paddingRight: "34px",
                  paddingBottom: "2px",
                  paddingLeft: "34px",
                  background: "white",
                  border: `2px solid ${x[2]}`,
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  opacity: 1,
                }}
              >
                <span
                  className="badge mb-2"
                  style={{
                    background: x[2],
                    color: "white",
                    padding: "6px 14px",
                    borderRadius: "999px",
                  }}
                >
                  {x[0]}
                </span>

                <p
                  className="mt-2 mb-0"
                  style={{
                    color: "#64748B",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "18px",
                    lineHeight: "29.25px",
                    letterSpacing: "0px",
                  }}
                >
                  {x[1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
