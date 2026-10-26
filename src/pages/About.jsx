
import "./About.css";

function About() {
  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="about-banner">
        <div className="overlay">
          <h1>About Padma Vidya Vikas School</h1>
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
            alt="Students learning in a school classroom"
          />
        </div>

        <div className="about-content">
          <h2>Welcome to Padma Vidya Vikas School</h2>

          <p>
            Padma Vidya Vikas UP English Medium School is a recognized
            private unaided educational institution located near the
            Government Hospital in Veldurthi, Andhra Pradesh.
          </p>

          <p>
            Established in 2017, our school provides English-medium
            education for students from Class 1 to Class 7. We aim to
            create a supportive learning environment that encourages
            academic growth, creativity, discipline, and good values.
          </p>

          <p>
            With approximately 318 students and 15 teachers, we focus
            on helping every child develop knowledge, confidence,
            responsibility, and the skills needed for a successful future.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Padma+Vidya+Vikas+UP+EM+School+Veldurthi+Andhra+Pradesh+518216"
            target="_blank"
            rel="noopener noreferrer"
            className="school-location-link"
          >
            View School Location
          </a>
        </div>
      </section>

      {/* School Information */}
      <section className="school-info-section">
        <div className="container">
          <h2 className="section-title">Our School at a Glance</h2>

          <div className="school-info-grid">
            <div className="school-info-card">
              <h3>Established</h3>
              <p>2017</p>
            </div>

            <div className="school-info-card">
              <h3>Classes Offered</h3>
              <p>Class 1 – Class 7</p>
            </div>

            <div className="school-info-card">
              <h3>Medium of Instruction</h3>
              <p>English</p>
            </div>

            <div className="school-info-card">
              <h3>Management</h3>
              <p>Private Unaided (Recognized)</p>
            </div>

            <div className="school-info-card">
              <h3>School Hours</h3>
              <p>8:45 AM – 5:00 PM</p>
              <small>Monday to Saturday</small>
            </div>

            <div className="school-info-card">
              <h3>Sunday</h3>
              <p>Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="vision-section">
        <div className="container vision-grid">
          <div className="vision-card">
            <h2>Our Vision</h2>
            <p>
              To nurture knowledgeable, confident, creative, and
              responsible students who can contribute positively to
              society and build a brighter future.
            </p>
          </div>

          <div className="vision-card">
            <h2>Our Mission</h2>
            <p>
              To provide quality English-medium education through
              effective teaching, discipline, moral values, individual
              attention, and a student-centered learning environment.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our School */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title">
            Why Choose Our School?
          </h2>

          <div className="why-grid">
            <div className="why-card">
              <h3>Dedicated Teachers</h3>
              <p>
                Our team of 15 teachers supports students in their
                academic and personal development.
              </p>
            </div>

            <div className="why-card">
              <h3>English-Medium Education</h3>
              <p>
                We encourage students to develop communication skills
                and a strong foundation in English.
              </p>
            </div>

            <div className="why-card">
              <h3>Primary Education</h3>
              <p>
                Learning opportunities for Classes 1 through 7,
                supporting children at important stages of growth.
              </p>
            </div>

            <div className="why-card">
              <h3>Student Development</h3>
              <p>
                We encourage confidence, discipline, creativity,
                good habits, and responsible behavior.
              </p>
            </div>

            <div className="why-card">
              <h3>Supportive Learning</h3>
              <p>
                We aim to provide a welcoming environment where
                students can learn, ask questions, and grow.
              </p>
            </div>

            <div className="why-card">
              <h3>Recognized Institution</h3>
              <p>
                A recognized private unaided school serving families
                in Veldurthi and nearby communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Statistics */}
      <section className="stats">
        <div className="container stats-grid">
          <div>
            <h2>318+</h2>
            <p>Students</p>
          </div>

          <div>
            <h2>15</h2>
            <p>Teachers</p>
          </div>

          <div>
            <h2>2017</h2>
            <p>Year Established</p>
          </div>

          <div>
            <h2>1–7</h2>
            <p>Classes Offered</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="school-contact-section">
        <div className="container">
          <h2 className="section-title">Visit or Contact Our School</h2>

          <div className="school-contact-card">
            <div className="contact-item">
              <h3>Address</h3>
              <p>
                H.No. 15-342/4, Near Government Hospital,
                Veldurthi, Andhra Pradesh – 518216
              </p>
            </div>

            <div className="contact-item">
              <h3>Phone Number</h3>
              <p>
                <a href="tel:+919440851987">
                  +91 94408 51987
                </a>
              </p>
            </div>

            <div className="contact-item">
              <h3>Working Hours</h3>
              <p>Monday – Saturday: 8:45 AM – 5:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

            <div className="contact-item">
              <h3>School Rating</h3>
              <p className="school-rating">
                <span aria-label="5 out of 5 stars">★★★★★</span>
                <span> 5.0 / 5</span>
              </p>
              <small>
                Rating reported by the supplied local directory listing.
              </small>
            </div>
          </div>

          <div className="school-contact-actions">
            <a
              href="tel:+919440851987"
              className="contact-button"
            >
              Call Our School
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Padma+Vidya+Vikas+UP+EM+School+Veldurthi+Andhra+Pradesh+518216"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button location-button"
            >
              Get Directions
            </a>

            <a
              href="https://www.justdial.com/Kurnool/Padma-Vidya-Vikas-UP-EM-School-Near-Govt-Hospital-Veldurthi/9999P8518-8518-250625155620-N9J7_BZDET"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button directory-button"
            >
              View School Listing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
