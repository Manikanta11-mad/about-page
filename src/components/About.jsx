export default function About() {
  return (
    <section
      style={{
        paddingTop: "120px", // because navbar is fixed
        paddingBottom: "60px",
      }}
    >
      <div className="container">
        <h1 className="fw-bold mb-3">About CareerCrush</h1>

        <p className="text-muted mb-4">
          CareerCrush is built to bridge the gap between education and
          employability. We focus on real-world skills, guided mentorship,
          and hands-on experience.
        </p>

        <div className="row g-4">
          <div className="col-12 col-md-6">
            <h4 className="fw-semibold">🎯 Our Mission</h4>
            <p>
              To empower students and professionals with industry-ready
              skills that lead to meaningful careers.
            </p>
          </div>

          <div className="col-12 col-md-6">
            <h4 className="fw-semibold">🚀 Our Vision</h4>
            <p>
              To become the most trusted career transformation platform in
              India and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
