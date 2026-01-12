const Footer = () => {
  const styles = {
    footer: {
      fontFamily: "Lora, sans-serif",
      background: "#F7F9FF",
      color: "#0f172a",
      width: "100%",
      height: "472.5px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "12px",
      padding: "62px 64px 12px 64px",
      boxSizing: "border-box",
      borderTop: "0.5px solid #d1d5db",
    },

    top: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr 1fr",
      gap: "22px",
    },

    tagline: {
      maxWidth: "380px",
      color: "#475569",
      margin: 0,
      fontFamily: "Lora, sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0px",
    },

    officeText: {
      fontFamily: "Lora, sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0px",
      margin: 0,
    },

    divider: {
      height: "1px",
      background: "#d1d5db",
      width: "100%",
    },

    bottom: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    icons: {
      display: "flex",
      gap: "12px",
    },

    icon: {
      width: "38px",
      height: "38px",
      borderRadius: "50%",
      background: "#1f2937",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      cursor: "pointer",
      textDecoration: "none",
    },

    website: {
      color: "#0f172a",
      fontSize: "14px",
      textDecoration: "none",
    },

    copyright: {
      textAlign: "center",
      fontSize: "13px",
      color: "#475569",
    },
  };

  const headingStyle = {
    fontFamily: "Lora, serif",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "100%",
    letterSpacing: "2%",
    marginBottom: "6px",
  };

  return (
    <footer style={styles.footer}>
      {/* Logo */}
      {/* Logo + Top Layout */}
<div
  style={{
    width: "1312px",
    height: "178px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxSizing: "border-box",
  }}
>
  {/* Logo */}
  <div>
    <img
      src="/CareerCrush.png"
      alt="CareerCrush Logo"
      style={{
        width: "312.7px",
        height: "82px",
        objectFit: "contain",
        marginLeft: "-40px",
        
      }}
    />
  </div>

  {/* Top */}
  <div style={styles.top }>
    <div>
      <p style={{...styles.tagline, fontFamily:"Lora"}} >
        Empowering India's next generation of learners, earners & leaders
        through mindful mentoring and purposeful hiring.
      </p>
    </div>

    <div>
      <h4 style={headingStyle}>Our Addresses</h4>
      <h4 style={headingStyle}>Registered Office :</h4>
      <p style={{...styles.officeText, fontFamily:"Lora"}}>
        65-253, Malkapuram, Visakhapatnam (Urban), Andhra Pradesh
        <br />
        CIN: U63119AP2025OPC118880
      </p>
    </div>

    <div>
      <h4 style={headingStyle}>Branch Office :</h4>
      <p style={{...styles.officeText, fontFamily:"Lora"}}>
        Teachers Colony, Pathapatnam, Srikakulam – 532213, Andhra Pradesh
      </p>
    </div>
  </div>
</div>


    

     {/* Bottom */}
<div className="mt-4"
style={{
    width: "1312px",
    height: "122px",
    margin: "0 auto",
    paddingTop: "22px",
    paddingBottom: "22px",
    borderTop: "0.5px solid #d1d5db",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
  <div>
    <p
      style={{
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "100%",
        margin: 0,
      }}
    >
      Connect with us
    </p>

    <div style={{ ...styles.icons, marginTop: "12px" }}>
      <a href="mailto:contact@careercrushlabs.com" style={styles.icon}>✉</a>
      <a
        href="https://www.linkedin.com/company/career-crush-labs/"
        target="_blank"
        rel="noreferrer"
        style={styles.icon}
      >
        in
      </a>
      <a
        href="https://www.instagram.com/careercrush.in"
        target="_blank"
        rel="noreferrer"
        style={styles.icon}
      >
        ig
      </a>
      <a
        href="https://x.com/careercrush_in"
        target="_blank"
        rel="noreferrer"
        style={styles.icon}
      >
        X
      </a>
    </div>
  </div>

  <a
    href="https://www.careercrushlabs.com"
    target="_blank"
    rel="noreferrer"
    style={styles.website}
  >
    www.careercrushlabs.com
  </a>
</div>

 <div style={{
    width: "1312px",
    height: "122px",
    margin: "0 auto",
    paddingTop: "22px",
    paddingBottom: "22px",
    borderTop: "0.5px solid #d1d5db",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }}></div>
      <p style={styles.copyright}>
        © 2026 CareerCrush Labs. All rights reserved.
      </p>
      
    </footer>
  );
};

export default Footer;
