export default function Framework() {
  const items = [
    ["WHY", "Restore trust and meaning in a disrupted career ecosystem", "#3b82f6"],
    ["WHAT", "A proof-driven career ecosystem delivering measurable, real value", "#8b5cf6"],
    ["WHOM", "Verified mentors, mentees, job seekers, and recruiters", "#ec4899"],
    ["WHERE", "India-first, built to scale globally", "#06b6d4"],
    ["WHEN", "Now. There is no later for careers.", "#22c55e"],
  ];

  return (
    <div className="container mt-5 text-center">

      <h3 className="fw-bold">
        Our <span style={{ color: "#2563eb" }}>Future-First</span> Framework
      </h3>

      <p style={{ color: "#64748b", fontSize: "14px" }}>
        Inspired by Simon Sinek’s Golden Circle, redesigned for a digital-first, human-centric world
      </p>

      <div className="row mt-4 g-4 justify-content-center">
        {items.map((x, i) => (
          <div key={i} className={`col-md-${i === 4 ? "6" : "5"}`}>
            <div
              className="p-4 rounded-4 text-start h-100"
              style={{
                background: "white",
                border: `2px solid ${x[2]}`,
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
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

              <p className="mt-2 mb-0" style={{ color: "#1e293b" }}>
                {x[1]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
