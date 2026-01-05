export default function Team() {
  const members = [
    {
      role: "Founder & Director",
      name: "Siddharth Kumar Padhi",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      desc: "10+ years across Project, Resource, BA, and Product roles in Aviation & Rail (Hi-Tech & Cloud), allocating talent and managing products for American Airlines, Dallas/Fort Worth International Airport, United States Postal Service, Apple, Meta, Samsung, and Sony across APAC, EMEA, and North America."
    },
    {
      role: "Co-Founder",
      name: "Ashok G",
      img: "https://randomuser.me/api/portraits/men/44.jpg",
      desc: "Tech Lead at a global technology organization, with 12+ years of deep Java expertise, focused on building scalable systems and training professionals in the Java domain with strong industry rigor."
    },
    {
      role: "QA Mentor · QA Manager & Scrum Master",
      name: "Sandhya Karthik",
      img: "https://randomuser.me/api/portraits/women/48.jpg",
      desc: "14+ years of QA expertise, mentoring professionals for interview preparation, with experience at First American and currently leading quality initiatives as a QA Manager and Scrum Master."
    },
    {
      role: "MERN Lead · Product Engineering",
      name: "Yaswanth M",
      img: "https://via.placeholder.com/150",
      desc: "7+ years of experience in Product Engineering and MERN stack development, with a strong focus on building scalable applications and mentoring individuals through real-world, production-grade engineering practices."
    }
  ];

  return (
    <div className="container mt-5">

      {/* Title */}
      <h3 className="text-center fw-bold">
        The People Behind the <span style={{ color: "#2563eb" }}>Purpose</span>
      </h3>

      {/* Description */}
      <div
        className="mx-auto mt-3 p-3 rounded-4 text-center"
        style={{
          maxWidth: "800px",
          background: "#f8fafc",
          border: "1px solid #e5e7eb",
          color: "#334155",
          fontSize: "14px"
        }}
      >
        India’s career and hiring crisis impacts 50M+ students, with 65%+ graduates unemployable —
        causing ₹45,000–₹70,000 crore in annual losses, including ₹20,000+ crore lost to inefficient hiring.
        Our team has embarked on solving this at the core — bringing career clarity and skill-fit hiring to
        turn confusion into employability.
      </div>

      {/* Cards */}
      <div className="mt-5 d-flex flex-column align-items-center gap-4">
        {members.map((m, i) => (
          <div
            key={i}
            className="d-flex align-items-start p-4 rounded-4 shadow"
            style={{
              background: "white",
              maxWidth: "900px",
              width: "100%",
              border: "1px solid #e5e7eb",
            }}
          >
            {/* Image */}
            <img
              src={m.img}
              alt={m.name}
              className="rounded-3"
              style={{ width: "90px", height: "90px", objectFit: "cover" }}
            />

            {/* Text */}
            <div className="ms-4">
              <small style={{ color: "#2563eb", fontWeight: 600 }}>{m.role}</small>
              <h5 className="fw-bold mb-1">{m.name}</h5>
              <p style={{ color: "#475569", fontSize: "14px", lineHeight: "1.6" }}>
                {m.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
