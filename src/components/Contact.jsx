import React from "react";
import ContactFooter from "./ContactFooter";

export default function Contact() {
  return (
    <>
      {/* INTERNAL RESPONSIVE STYLES – ONLY ADDITION */}
      <style>
        {`
          /* Laptop & below */
          @media (max-width: 1200px) {
            .contact-form-box {
              width: 100% !important;
              height: auto !important;
            }

            .contact-image-box {
              width: 100% !important;
              height: auto !important;
            }
          }

          /* Tablet */
          @media (max-width: 992px) {
            .contact-wrapper {
              padding: 120px 5% 60px 5% !important;
            }

            .contact-heading {
              font-size: 48px !important;
            }

            .contact-subheading {
              font-size: 24px !important;
            }
          }

          /* Mobile */
          @media (max-width: 768px) {
            .contact-wrapper {
              padding: 110px 4% 40px 4% !important;
            }

            .contact-heading {
              font-size: 36px !important;
            }

            .contact-subheading {
              font-size: 18px !important;
              line-height: 130% !important;
            }

            .contact-image-box {
              height: 320px !important;
            }

            .investor-text {
              font-size: 16px !important;
            }

            .investor-sub {
              font-size: 14px !important;
            }
          }

          /* Investor note styles */
          .investor-wrapper {
            max-width: 1120px;
            margin: 30px auto 0 auto;
            text-align: center;
          }

          .investor-text {
            font-size: 24px;
            font-weight: 500;
            color: #6f6f6f;
            line-height: 1.4;
          }

          .investor-sub {
            font-size: 18px;
            color: #6f6f6f;
            margin-top: 6px;
          }
        `}
      </style>

      <div
        className="contact-wrapper"
        style={{
          background: "#ffffff",
          minHeight: "100vh",
          padding: "120px 8% 60px 8%",
        }}
      >
        {/* Heading */}
        <h1
          className="contact-heading"
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 700,
            fontSize: "60px",
            textAlign: "center",
          }}
        >
          Reach out to Us
        </h1>

        <p
          className="contact-subheading"
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 500,
            fontSize: "30px",
            textAlign: "center",
            marginBottom: "3rem",
            color: "#808080",
          }}
        >
          Let's build clarity around your next step.
        </p>


            <p
  className="mt-4 ms-4"
  style={{
    fontFamily: "'Ubuntu', sans-serif",
    fontWeight: 400,          // Regular
    fontStyle: "normal",
    fontSize: "25px",
    lineHeight: "1",          // 100%
    letterSpacing: "0.0em",  // 2%
    color: "#6F6F6F",
  }}
>
  I am reaching out as :
</p>

<div
  className="d-flex mb-4 ms-4 flex-wrap"
  style={{
    width: "572px",
    height: "40px",
    opacity: 1,
    gap: "16px",
  }}
>
  {["Investor", "Mentor", "Mentee", "Recruiter", "Job Seeker"].map((item) => (
    <label
      key={item}
      style={{
        fontFamily: "Lora, serif",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "16px",
        lineHeight: "1",
        letterSpacing: "0.02em",
        color: "#272727",
        display: "flex",
        alignItems: "center",
      }}
    >
      <input type="radio" name="role" className="me-1" /> {item}
    </label>
  ))}
</div>


        <div className="row  align-items-center">
          {/* LEFT FORM */}
          <div className="col-md-6">
            <div
              className="p-4 contact-form-box"
              style={{
                width: "572px",
                height: "574px",
                borderRadius: "12px",
                boxShadow: "0px 10px 40px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                backgroundColor: "transparent", // ✅ BACKGROUND REMOVED
              }}
               >
              

              <label
                className="fw-semibold"
                style={{
                  fontFamily: "Lora, serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "1",
                  letterSpacing: "0.02em",
                }}
              >
                Full Name
              </label>

              <input
                className="form-control"
                placeholder="Enter your Full Name"
                style={{
                  width: "572px",
                  height: "64px",
                  opacity: 1,
                  borderRadius: "16px",
                  padding: "22px",
                  borderWidth: "1.5px",
                }}
              />

              <label
                className="fw-semibold"
                style={{
                  fontFamily: "Lora, serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "1",
                  letterSpacing: "0.02em",
                }}
              >
                Email
              </label>

              <input
                className="form-control"
                placeholder="Enter your Email"
                style={{
                  width: "572px",
                  height: "64px",
                  opacity: 1,
                  borderRadius: "16px",
                  padding: "22px",
                  borderWidth: "1.5px",
                }}
              />

              <label
                className="fw-semibold"
                style={{
                  fontFamily: "Lora, serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "1",
                  letterSpacing: "0.02em",
                }}
              >
                Phone Number
              </label>

              <input
                className="form-control"
                placeholder="Enter your Phone Number"
                style={{
                  width: "572px",
                  height: "64px",
                  opacity: 1,
                  borderRadius: "16px",
                  padding: "22px",
                  borderWidth: "1.5px",
                }}
              />

              <label
                className="fw-semibold"
                style={{
                  fontFamily: "Lora, serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "1",
                  letterSpacing: "0.02em",
                  
                }}
              >
                Your Details :
              </label>

              <textarea
                className="form-control"
                placeholder="Type your Message"
                style={{
                  width: "572px",
                  height: "100px",
                  opacity: 1,
                  borderRadius: "16px",
                  padding: "22px",
                  borderWidth: "1.5px",
                  
                }}
              ></textarea>

                           <button
                     className="btn  text-white"
                    style={{
                      width: "572px",
                    height: "60px",
                        opacity: 1,
                          background: "orange",
                         borderRadius: "16px",
                          padding: "10px",
                         fontSize: "16px",
                         }}
                           >
                        Send Message
                                  </button>

                          </div>
              </div>

                 {/* RIGHT IMAGE */}
              <div className="col-md-6 text-center mt-4 mt-md-0">
                  <div
                    className="contact-image-box"
                       style={{
                width: "613px",
                height: "540px",
                borderRadius: "16px",
                overflow: "hidden",
                     }}
                      >
                    <img
                src="/Contact.jpg"
                alt="contact"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                     />
               </div>
                   </div>
              </div>
      </div>

      <ContactFooter />
    </>
  );
}
