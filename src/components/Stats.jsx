import { motion } from "framer-motion";

export default function Stats() {
  const data = [
    {
      value: "50–60%",
      title: "Unemployability Rate",
      text:
        "Despite education and degrees, over half of graduates remain unemployable",
      icon: "🎓",
      accent: "#155DFC",
    },
    {
      value: "60%",
      title: "Daily Ghosting Rate",
      text:
        "Job seekers are left in silence, ghosted by recruiters every single day",
      icon: "💬",
      accent: "#9810FA",
    },
    {
      value: "48%",
      title: "Career Burnout",
      text:
        "Professionals face disengagement and burnout from broken systems",
      icon: "💡",
      accent: "#F28A02",
    },
  ];

  return (
    <>
      {/* INTERNAL RESPONSIVE STYLES — ADDED ONLY */}
      <style>
        {`
          /* Laptop / Tablet */
          @media (max-width: 1200px) {
            .stats-wrapper { padding: 60px 40px !important; height: auto !important; }
            .stats-card { width: 100% !important; height: auto !important; }
          }

          /* Tablet */
          @media (max-width: 992px) {
            .stats-wrapper { padding: 60px 24px !important; }
            .stats-quote { padding: 20px 32px !important; height: auto !important; }
            .stats-quote p { font-size: 26px !important; line-height: 38px !important; }
          }

          /* Mobile */
          @media (max-width: 576px) {
            .stats-wrapper { padding: 48px 16px !important; }
            .stats-card { width: 100% !important; height: auto !important; }
            .stats-quote { padding: 16px !important; height: auto !important; }
            .stats-quote p { font-size: 20px !important; line-height: 30px !important; }
          }
        `}
      </style>

      <div
        className="stats-wrapper"
        style={{
          background: "linear-gradient(to top, #F8EFFF, #FAFAFA)",
          padding: "80px 160px",
          height: "742px",
        }}
      >
        {/* STAT CARDS */}
        <div className="container">
          <div className="row g-5  justify-content-center">
            {data.map((d, i) => (
              <div key={i} className="col-md-4 me-4" style={{ width: "352px", gap: "16px", }}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="shadow-sm stats-card " 
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    background: "#ffffff",
                    border: "none", // ✅ removed border to match image
                    padding: "32px",
                    height: "362px", // ✅ adjusted height to match image
                    width: "352px", // match card width
                    borderRadius: "24px", // ✅ rounded corners like image
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.05)", // subtle shadow
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    gap: "16px",
                  }}
                >
                  {/* TOP RIGHT DECORATIVE SHAPE */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-80px",
                      right: "-80px",
                      width: "140px",
                      height: "140px",
                      background: d.accent,
                      borderRadius: "0 0 0 60px",
                      opacity: 0.1,
                    }}
                  />

                  {/* ICON */}
                  <div
  className="mb-3 d-flex align-items-center justify-content-center"
  style={{
    width: "64px",
    height: "64px",
    background: "#F0F0FF",
    fontSize: "50px",
    borderRadius: "16px",
    position: "relative",
    zIndex: 1,
    opacity: 1,
  }}
>
  {d.icon}
</div>


                  {/* VALUE */}
                <h3
  className="fw-bold mb-1"
  style={{
    position: "relative",
    zIndex: 1,

    width: "193px",
    height: "48px",
    opacity: 1,

    fontFamily: "Inter, sans-serif",
    fontWeight: 700,        // Bold
    fontStyle: "normal",
    fontSize: "48px",
    lineHeight: "48px",
    letterSpacing: "0px",
  }}
>
  {d.value}
</h3>


                  {/* TITLE */}
                 <p
  className="fw-semibold mb-1"
  style={{
    position: "relative",
    zIndex: 1,

    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontStyle: "normal", // Regular
    fontSize: "18px",
    lineHeight: "28px",
    letterSpacing: "0px",
    color:"#64748B",
  }}
>
  {d.title}
</p>


                  {/* DESCRIPTION */}
                  <small
                    style={{
                      position: "relative",
                      zIndex: 1,
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "14px",
                      lineHeight: "20px",
                      letterSpacing: "0px",
                      color: "#6B7280",
                    }}
                  >
                    {d.text}
                  </small>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* QUOTE BOX */}
        <div className="container mt-4">
          <div
            className="rounded-4 text-center mx-auto stats-quote"
            style={{
              background: "linear-gradient(135deg, #f5f3ff, #eef2ff)",
              border: "1px solid #770DC3",
              color: "#1e293b",
              width: "100%",
              maxWidth: "1120px",
              height: "205px",
              padding: "20px 60px",
              borderRadius: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "32px",
                lineHeight: "48px",
                textAlign: "center",
              }}
            >
              People are navigating systems built on{" "}
              <span
                style={{
                  fontStyle: "italic",
                  color: "#2563eb",
                }}
              >
                noise, delay, and weak signals
              </span>{" "}
              – sold certifications, dummy projects, and silent hiring.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
