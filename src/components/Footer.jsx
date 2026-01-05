export default function Footer() {
  return (
    <footer style={{ background: "#f8fafc", padding: "40px 0", borderTop: "1px solid #e5e7eb" }}>
      <div className="container d-flex justify-content-between align-items-center flex-wrap">

        {/* Left */}
        <div>
          <div className="d-flex align-items-center">
            <span style={{
              background: "#2563eb",
              color: "white",
              fontWeight: "bold",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "10px"
            }}>
              C
            </span>
            <b style={{ fontSize: "18px" }}>CareerCrush</b>
          </div>

          <p style={{ fontSize: "13px", color: "#64748b", maxWidth: "300px", marginTop: "10px" }}>
            Empowering real talent through real systems, mentors & career-ready proof.
          </p>

          <small style={{ color: "#94a3b8" }}>
            © 2025 CareerCrush Labs. All rights reserved.
          </small>
        </div>

        {/* Right */}
        <div>
          <p className="fw-bold">Connect with us</p>
          <div className="d-flex gap-3">
            <div className="rounded-circle border d-flex align-items-center justify-content-center"
              style={{ width: "36px", height: "36px", cursor: "pointer" }}>𝕏</div>

            <div className="rounded-circle border d-flex align-items-center justify-content-center"
              style={{ width: "36px", height: "36px", cursor: "pointer" }}>in</div>

            <div className="rounded-circle border d-flex align-items-center justify-content-center"
              style={{ width: "36px", height: "36px", cursor: "pointer" }}>📷</div>
          </div>
        </div>

      </div>
    </footer>
  );
}
