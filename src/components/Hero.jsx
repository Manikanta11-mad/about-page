import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="container text-center"
      style={{ maxWidth: "1440px", paddingTop: "120px", paddingBottom: "60px", minHeight: "510px", margin: "0 auto" }}
    >
      <span
        className="badge rounded-pill px-3 py-2 mb-3"
        style={{
          background: "#F8EFFF",
          color: "#9810FA",
          fontWeight: "400",
          lineHeight: "20px",
          letterSpacing: "0px",
          fontFamily: "'Inter', sans-serif",
          border: "1px solid #E9D5FF",
          fontSize: "14px"
        }}
      >
        About Us
      </span>

      <div style={{ maxWidth: "924px", minHeight: "146px", margin: "0 auto" }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            color: "#101828",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "60px",
            lineHeight: "100%",
            letterSpacing: "0px",
            textAlign: "center"
          }}
        >
          Careers shouldn't feel{" "}
          <span
            style={{
              color: "#155DFC",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: "60px",
              lineHeight: "100%",
              letterSpacing: "0px"
            }}
          >
            Broken
          </span>
          , <br />
          Yet today,{" "}
          <span
            style={{
              color: "#155DFC",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: "60px",
              lineHeight: "100%",
              letterSpacing: "0px"
            }}
          >
            They Do
          </span>
        </motion.h1>
      </div>

      <p
        className="mt-3"
        style={{
          maxWidth: "720px",
          margin: "auto",
          color: "#64748B",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "20px",
          lineHeight: "32.5px",
          letterSpacing: "0px",
          textAlign: "center"
        }}
      >
        Broken hiring practices and inauthentic mentoring have created confusion
        and mistrust. Careers are not built through shortcuts, hype, or cheap
        promises.
      </p>
    </section>
  );
}
