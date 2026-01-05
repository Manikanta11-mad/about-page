import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="container text-center"
      style={{ paddingTop: "120px", paddingBottom: "60px" }}
    >
      <span
        className="badge rounded-pill px-3 py-2 mb-3"
        style={{
          background: "#f1ecff",
          color: "#7c3aed",
          fontWeight: 500,
        }}
      >
        About Us
      </span>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ fontWeight: 700, fontSize: "2.8rem", lineHeight: "1.2" }}
      >
        Careers shouldn't feel{" "}
        <span style={{ color: "#2563eb" }}>Broken</span>, <br />
        Yet today,{" "}
        <span style={{ color: "#6366f1" }}>They Do</span>
      </motion.h1>

      <p
        className="mt-3"
        style={{
          maxWidth: "720px",
          margin: "auto",
          color: "#64748b",
          fontSize: "1.05rem",
        }}
      >
        Broken hiring practices and inauthentic mentoring have created confusion
        and mistrust. Careers are not built through shortcuts, hype, or cheap
        promises.
      </p>
    </section>
  );
}
