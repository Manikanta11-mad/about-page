import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkStyle = (path) => ({
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "18px",
    color: location.pathname === path ? "#E68200" : "#000000",
    fontFamily: "Inter, sans-serif",
    whiteSpace: "nowrap",
  });

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "72px",
        background: "#ffffff",
        borderBottom: "2px solid #e5e7eb",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        padding: "12px 20px",
      }}
    >
      {/* LOGO */}
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/CareerCrush.png"
          alt="logo"
          style={{ width: "160px", height: "auto" }}
        />
      </Link>

      {/* RIGHT SIDE ITEMS */}
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Link to="/" style={linkStyle("/")}>
          Home
        </Link>

        <Link to="/about" style={linkStyle("/about")}>
          About us
        </Link>

        <Link to="/contact" style={linkStyle("/contact")}>
          Contact us
        </Link>

        {/* JOIN WISHLIST BUTTON */}
        <button
          style={{
            width: "196px",
            height: "38px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "1px solid #F28A02",
            background: "#F28A02",
            opacity: 1,
            cursor: "pointer",
          }}
        >
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "100%",
              letterSpacing: "0.02em",
              color: "#FFFFFF",
              whiteSpace: "nowrap",
            }}
          >
            <b>Join Wishlist – Free</b>
          </span>
        </button>
      </div>
    </nav>
  );
}
