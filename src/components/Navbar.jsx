export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "white",
        zIndex: 1000,
        borderBottom: "1px solid #e5e7eb",
        padding: "12px 0"
      }}
    >
      <div
        className="container d-flex justify-content-between align-items-center"
        style={{ maxWidth: "1200px" }}
      >
        {/* Logo */}
        <div className="d-flex align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Lightning_bolt_simple.svg"
            alt="logo"
            style={{ width: "28px", marginRight: "8px" }}
          />
          <span style={{ fontWeight: 700, fontSize: "20px" }}>CareerCrush</span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <a href="#home" style={linkStyle}>Home</a>
          <a href="#about" style={linkStyle}>About us</a>
          <a href="#contact" style={linkStyle}>Contact us</a>
        </div>
      </div>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#0f172a",
  fontSize: "15px",
  fontWeight: 500
};
