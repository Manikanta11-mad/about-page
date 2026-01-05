import { motion } from "framer-motion";

export default function Stats() {
  const data = [
    {
      value: "50–60%",
      title: "Unemployability Rate",
      text:
        "Despite education and degrees, over half of graduates remain unemployable",
      bg: "#f5f3ff",
      icon: "🎓",
    },
    {
      value: "60%",
      title: "Daily Ghosting Rate",
      text:
        "Job seekers are left in silence, ghosted by recruiters every single day",
      bg: "#eef2ff",
      icon: "💬",
    },
    {
      value: "48%",
      title: "Career Burnout",
      text:
        "Professionals face disengagement and burnout from broken systems",
      bg: "#fff7ed",
      icon: "💡",
    },
  ];

  return (
    <>
      {/* STAT CARDS */}
      <div className="container">
        <div className="row g-4 justify-content-center">
          {data.map((d, i) => (
            <div key={i} className="col-md-4">
              <motion.div
                whileHover={{ y: -6 }}
                className="p-4 rounded-4 shadow-sm h-100"
                style={{
                  background: d.bg,
                  border: "1px solid #e5e7eb",
                }}
              >
                <div
                  className="mb-3 d-flex align-items-center justify-content-center rounded-3"
                  style={{
                    width: "42px",
                    height: "42px",
                    background: "#ffffff",
                    boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
                    fontSize: "20px",
                  }}
                >
                  {d.icon}
                </div>

                <h3 className="fw-bold mb-1">{d.value}</h3>
                <p className="fw-semibold mb-1">{d.title}</p>
                <small style={{ color: "#64748b" }}>{d.text}</small>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* QUOTE BOX */}
      <div className="container mt-4">
        <div
          className="p-4 rounded-4 text-center"
          style={{
            background: "linear-gradient(135deg,#f5f3ff,#eef2ff)",
            border: "1px solid #e0e7ff",
            color: "#1e293b",
            fontSize: "1rem",
          }}
        >
          People are navigating systems built on{" "}
          <span style={{ color: "#2563eb", fontWeight: 600 }}>
            noise, delay, and weak signals
          </span>{" "}
          – sold certifications, dummy projects, and silent hiring.
        </div>
      </div>
    </>
  );
}
