export default function Pricing() {
  return (
    <section className="container mt-5 mb-5 text-center">

      <h3 className="fw-bold">
        Designed for <span style={{ color: "#2563eb" }}>Scale</span>
      </h3>

      <p style={{ color: "#64748b", fontSize: "14px" }}>
        Two editions built to serve everyone — from individuals to enterprises.
      </p>

      <div className="row mt-5 g-4 justify-content-center">

        {/* Community */}
        <div className="col-md-5">
          <div className="p-4 shadow rounded-4 text-start"
            style={{ background: "white", border: "1px solid #e5e7eb" }}>

            <div className="d-flex align-items-center mb-3">
              <div className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "#e0f2fe",
                  color: "#0284c7",
                  fontWeight: "bold"
                }}>
                👥
              </div>
              <h5 className="ms-3 fw-bold">Community Edition</h5>
            </div>

            <p style={{ color: "#475569", fontSize: "14px" }}>
              Free, accessible, and career-efficient, creating trust and skills acceleration.
            </p>

            <ul style={{ listStyle: "none", padding: 0, fontSize: "14px", color: "#334155" }}>
              <li>✔ Open learning with mentors</li>
              <li>✔ Sandbox projects to build proof</li>
              <li>✔ Skill flow, grow when ready</li>
              <li>✔ AI-optimized profile</li>
            </ul>

          </div>
        </div>

        {/* Elite */}
        <div className="col-md-5">
          <div className="p-4 rounded-4 text-white shadow"
            style={{
              background: "linear-gradient(135deg,#2563eb,#1e40af)",
              height: "100%"
            }}>

            <div className="d-flex align-items-center mb-3">
              <div className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "#1e3a8a",
                  fontWeight: "bold"
                }}>
                ⚡
              </div>
              <h5 className="ms-3 fw-bold">Elite Edition</h5>
            </div>

            <p style={{ fontSize: "14px", opacity: 0.9 }}>
              Advanced decision intelligence and workflow systems for high-quality hiring and mentoring.
            </p>

            <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
              <li>🟡 Measurable, verified talent outcomes</li>
              <li>🟡 Elite production projects</li>
              <li>🟡 Real-world interview readiness</li>
              <li>🟡 AI career processes</li>
            </ul>

          </div>
        </div>

      </div>

    </section>
  );
}
