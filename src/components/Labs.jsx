export default function Labs() {
  return (
    <section className="container mt-5">
      <div className="row align-items-center g-5">
        
        {/* LEFT TEXT */}
        <div className="col-md-6">
          <h2 style={{ fontWeight: 700 }}>
            <span style={{ color: "#2563eb" }}>CareerCrush Labs</span> exists to re-engineer careers for the future
          </h2>

          <p className="mt-3" style={{ color: "#64748b", maxWidth: "480px" }}>
            With clarity, proof, and dignity at the core. We are building a career
            operating system where talent is understood faster, evaluated fairly,
            and trusted by default.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="col-md-6">
          <div
            className="p-4 rounded-4 shadow"
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              maxWidth: "420px",
              marginLeft: "auto",
            }}
          >
            {[
              ["Understood Faster", "Clear signals, no noise", "💬", "#6366f1"],
              ["Evaluated Fairly", "Merit-based, transparent", "⚖️", "#8b5cf6"],
              ["Trusted by Default", "Verified, authentic connections", "🛡️", "#f59e0b"],
            ].map((x, i) => (
              <div key={i} className="d-flex align-items-start mb-3">
                <div
                  className="me-3 rounded-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#f1f5f9",
                    fontSize: "18px",
                    color: x[3],
                  }}
                >
                  {x[2]}
                </div>
                <div>
                  <b>{x[0]}</b>
                  <div style={{ color: "#64748b", fontSize: "14px" }}>{x[1]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
