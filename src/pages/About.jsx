import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* Hero Banner */}

      <section className="about-banner">
        <div className="overlay">
          <h1>About Our School</h1>
          <p>
            Inspiring Excellence • Building Character • Creating Future Leaders
          </p>
        </div>
      </section>

      {/* School Introduction */}

      <section className="about-section container">

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"
            alt="School"
          />

        </div>

        <div className="about-content">

          <h2>Welcome to ABC School</h2>

          <p>
            ABC School is one of the leading educational institutions committed
            to academic excellence and holistic student development.
          </p>

          <p>
            We provide an innovative learning environment with modern
            classrooms, digital education, experienced faculty, laboratories,
            sports facilities, and extracurricular activities.
          </p>

          <p>
            Our mission is to develop confident, responsible, and successful
            students who become valuable citizens of society.
          </p>

        </div>

      </section>

      {/* Vision Mission */}

      <section className="vision-section">

        <div className="container vision-grid">

          <div className="vision-card">

            <h2>Our Vision</h2>

            <p>
              To become a globally respected educational institution that
              nurtures knowledge, leadership, creativity, and lifelong learning.
            </p>

          </div>

          <div className="vision-card">

            <h2>Our Mission</h2>

            <p>
              To provide quality education through innovative teaching methods,
              moral values, discipline, and student-centered learning.
            </p>

          </div>

        </div>

      </section>

      {/* Principal Message */}

      

      {/* Why Choose Us */}

      <section className="why-section">

        <div className="container">

          <h2 className="section-title">
            Why Choose Our School?
          </h2>

          <div className="why-grid">

            <div className="why-card">

              <h3>Experienced Faculty</h3>

              <p>
                Highly qualified teachers committed to student success.
              </p>

            </div>

            <div className="why-card">

              <h3>Digital Classrooms</h3>

              <p>
                Modern smart classrooms with interactive learning.
              </p>

            </div>

            <div className="why-card">

              <h3>Sports & Activities</h3>

              <p>
                Indoor and outdoor sports with cultural activities.
              </p>

            </div>

            <div className="why-card">

              <h3>Safe Campus</h3>

              <p>
                CCTV surveillance and secure transport facilities.
              </p>

            </div>

            <div className="why-card">

              <h3>Science Labs</h3>

              <p>
                Fully equipped laboratories for practical learning.
              </p>

            </div>

            <div className="why-card">

              <h3>Excellent Results</h3>

              <p>
                Outstanding academic achievements every year.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="stats">

        <div className="container stats-grid">

          <div>

            <h2>2500+</h2>

            <p>Students</p>

          </div>

          <div>

            <h2>150+</h2>

            <p>Teachers</p>

          </div>

          <div>

            <h2>25+</h2>

            <p>Years Experience</p>

          </div>

          <div>

            <h2>100%</h2>

            <p>Board Results</p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;