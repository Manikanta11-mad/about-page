import React from "react";

export default function Team() {
  const members = [
    {
      role: "Founder & Director",
      name: "Siddharth Kumar Padhi",
      img: "/siddharth.jpg",
      desc:
        "10+ years across Project, Resource, BA, and Product roles in Aviation & Rail (Hi-Tech & Cloud), allocating talent and managing products for American Airlines, Dallas/Fort Worth International Airport, United States Postal Service, Apple, Meta, Samsung, and Sony across APAC, EMEA, and North America."
    },
    {
      role: "Co-Founder",
      name: "Ashok G",
      img: "/ashok.jpg",
      desc:
        "Tech Lead at a global technology organization, with 12+ years of deep Java expertise, focused on building scalable systems and training professionals in the Java domain with strong industry rigor."
    },
    {
      role: "QA Mentor · QA Manager & Scrum Master",
      name: "Sandhya Karthik",
      img: "/sandhya.jpg",
      desc:
        "14+ years of QA expertise, mentoring professionals for interview preparation, with experience at First American and currently leading quality initiatives as a QA Manager and Scrum Master."
    },
    {
      role: "MERN Lead · Product Engineering",
      name: "Yaswanth M",
      img: "/YMM.png",
      desc:
        "7+ years of experience in Product Engineering and MERN stack development, with a strong focus on building scalable applications and mentoring individuals through real-world, production-grade engineering practices."
    }
  ];

  return (
    <div className="container mt-5 team-root">
      {/* INTERNAL RESPONSIVE STYLES – ONLY ADDITION */}
      <style>
        {`
          @media (max-width: 1199px) {
            .team-desc-box,
            .team-cards-container,
            .team-card {
              width: 100% !important;
            }
          }

          @media (max-width: 991px) {
            .team-card {
              flex-direction: column !important;
              height: auto !important;
              text-align: center;
            }

            .team-card img {
              width: 291px !important;
              height: 303px !important;
            }

            .team-text {
              margin-left: 0 !important;
              margin-top: 20px;
            }
          }

          @media (max-width: 767px) {
            h3 span {
              font-size: 32px !important;
            }

            .team-desc-box {
              padding: 20px !important;
              height: auto !important;
            }

            .team-card {
              padding: 20px !important;
            }

            .team-text p {
              font-size: 16px !important;
              line-height: 26px !important;
            }
          }
        `}
      </style>

      {/* Title */}
      <h3 className="text-center fw-bold">
        <span
          style={{
            color: "#101828",
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "48px",
            lineHeight: "100%"
          }}
        >
          The People Behind the
        </span>{" "}
        <span
          style={{
            color: "#155DFC",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontStyle: "italic",
            fontSize: "48px",
            lineHeight: "100%"
          }}
        >
          Purpose
        </span>
      </h3>

      {/* Description */}
      <div
        className="mx-auto mt-3 team-desc-box"
        style={{
          width: "1120px",
          height: "205px",
          background: "#f8fafc",
          border: "1px solid #770DC3",
          borderRadius: "24px",
          fontSize: "22px",
          lineHeight: "29px",
          padding: "30px 60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          textAlign: "center"
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "22px",
            lineHeight: "29px",
            margin: 0,
            width: "1068px"
          }}
        >
          India’s career and hiring crisis impacts 50M+ students, with 65%+
          graduates unemployable — causing ₹45,000–₹70,000 crore in annual
          losses, including ₹20,000+ crore lost to inefficient hiring. Our team
          has embarked on solving this at the core — bringing career clarity and
          skill-fit hiring to turn confusion into employability.
        </p>
      </div>

      {/* Cards */}
      <div className="d-flex justify-content-center mt-5">
        <div
          className="d-flex flex-column gap-5 team-cards-container"
          style={{ width: "1123px" }}
        >
          {members.map((m, i) => (
            <div
              key={i}
              className="d-flex p-4 rounded-4 shadow team-card"
              style={{
                width: "1123px",
                height: "352px",
                border: "2px solid #E2E8F0",
                borderRadius: "24px",
                alignItems: "center"
              }}
            >
              {/* Yaswanth M custom image size */}
             <img
  src={m.img}
  alt={m.name}
  style={{
    width: m.name === "Yaswanth M" ? "200px" : "251px",
    height: m.name === "Yaswanth M" ? "310px" : "253px",
    borderRadius: m.name === "Yaswanth M" ? "50px" : "24px", // only ONE borderRadius
    objectFit: "cover",
    opacity: 1
  }}
/>


              <div className="ms-4 team-text">
                <small
                  style={{
                    color: "#155DFC",
                    backgroundColor: "#E2E8F0",
                    borderRadius: "9999px",
                    fontWeight: 600,
                    fontSize: "14px",
                    padding: "4px 12px",
                    display: "inline-block",
                    marginBottom: "20px"
                  }}
                >
                  {m.role}
                </small>

                <h5
                  style={{
                    color: "#0F172A",
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: "30px"
                  }}
                >
                  {m.name}
                </h5>

                <p
                  style={{
                    color: "#000",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "32.5px"
                  }}
                >
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
