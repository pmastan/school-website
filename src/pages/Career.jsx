
import { useState } from "react";
import "./Career.css";

const openings = [
  {
    title: "Primary School Teacher",
    department: "Teaching",
    qualification: "D.Ed / B.Ed preferred",
    type: "Full-time",
    description:
      "Help young learners build strong foundations in English, Mathematics, Science, and essential life skills.",
    icon: "📚",
  },
  {
    title: "English Teacher",
    department: "Teaching",
    qualification: "Relevant teaching qualification",
    type: "Full-time",
    description:
      "Develop students' English reading, writing, grammar, communication, and speaking abilities.",
    icon: "✏️",
  },
  {
    title: "Mathematics Teacher",
    department: "Teaching",
    qualification: "Relevant subject qualification",
    type: "Full-time",
    description:
      "Make mathematics engaging through clear explanations, practical activities, and problem-solving.",
    icon: "🔢",
  },
  {
    title: "School Administrative Assistant",
    department: "Administration",
    qualification: "Graduate preferred",
    type: "Full-time",
    description:
      "Support school administration, parent communication, record keeping, and day-to-day coordination.",
    icon: "🏫",
  },
];

function Career() {
  const [selectedPosition, setSelectedPosition] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = data.get("name")?.trim();
    const email = data.get("email")?.trim();
    const phone = data.get("phone")?.trim();
    const position = data.get("position");
    const qualification = data.get("qualification")?.trim();
    const experience = data.get("experience");
    const message = data.get("message")?.trim();

    if (
      !name ||
      !email ||
      !phone ||
      !position ||
      !qualification ||
      !experience
    ) {
      alert("Please complete all required fields.");
      return;
    }

    const subject = encodeURIComponent(
      `Career Application - ${position}`
    );

    const body = encodeURIComponent(
      `JOB APPLICATION\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Position: ${position}\n` +
        `Qualification: ${qualification}\n` +
        `Experience: ${experience}\n\n` +
        `Additional Information:\n${message || "Not provided"}`
    );

    setSubmitted(true);

    // Opens the applicant's default email application.
    // Replace the recipient below with the school's real email.
    window.location.href =
      `mailto:?subject=${subject}&body=${body}`;
  };

  const scrollToApplication = (position = "") => {
    setSelectedPosition(position);

    document.getElementById("career-application")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="career-page">
      {/* Hero Banner */}
      <section className="career-hero">
        <div className="career-hero-overlay"></div>

        <div className="career-hero-content">
          <span className="career-eyebrow">
            BUILD YOUR FUTURE WITH US
          </span>

          <h1>
            Make a Difference.
            <span> Inspire Young Minds.</span>
          </h1>

          <p>
            Join Padma Vidya Vikas UP English Medium School
            and help shape the future of the next generation
            through education, dedication, and care.
          </p>

          <div className="career-hero-actions">
            <button
              type="button"
              className="career-btn career-btn-primary"
              onClick={() => scrollToApplication()}
            >
              Apply for a Position <span>→</span>
            </button>

            <a href="#career-openings" className="career-btn career-btn-outline">
              Explore Opportunities
            </a>
          </div>

          <div className="career-hero-note">
            <span>✓</span> Passion for teaching
            <span>✓</span> Commitment to students
            <span>✓</span> A positive learning environment
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="career-intro">
        <div className="career-container career-intro-grid">
          <div className="career-intro-image">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85"
              alt="Teacher supporting students in a classroom"
              loading="lazy"
            />
            <div className="career-image-caption">
              <span>🌱</span>
              <div>
                <strong>Growing Together</strong>
                <p>Every child deserves an opportunity to learn.</p>
              </div>
            </div>
          </div>

          <div className="career-intro-content">
            <span className="career-section-label">
              CAREERS AT OUR SCHOOL
            </span>

            <h2>
              Your Passion for Education Can Create a Lasting Impact
            </h2>

            <p>
              At Padma Vidya Vikas UP English Medium School,
              we believe that dedicated educators play an important
              role in every child's development.
            </p>

            <p>
              We welcome enthusiastic, responsible, and caring
              professionals who want to contribute to students'
              academic progress, confidence, creativity, and values.
            </p>

            <div className="career-values">
              <div>
                <span>✓</span> Student-focused teaching
              </div>
              <div>
                <span>✓</span> Positive school environment
              </div>
              <div>
                <span>✓</span> Continuous learning
              </div>
              <div>
                <span>✓</span> Teamwork and responsibility
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="career-benefits">
        <div className="career-container">
          <div className="career-section-heading">
            <span className="career-section-label">
              WHY JOIN OUR TEAM?
            </span>
            <h2>A Place to Learn, Teach, and Grow</h2>
            <p>
              Be part of a school community that values education
              and the people who make it meaningful.
            </p>
          </div>

          <div className="career-benefit-grid">
            <article className="career-benefit-card">
              <div className="career-benefit-icon">🎓</div>
              <h3>Meaningful Work</h3>
              <p>
                Make a positive difference in students' education
                and everyday learning experiences.
              </p>
            </article>

            <article className="career-benefit-card">
              <div className="career-benefit-icon">🤝</div>
              <h3>Team Collaboration</h3>
              <p>
                Work with colleagues and families to support
                children's learning and development.
              </p>
            </article>

            <article className="career-benefit-card">
              <div className="career-benefit-icon">🌟</div>
              <h3>Professional Growth</h3>
              <p>
                Continue developing your teaching skills,
                subject knowledge, and professional abilities.
              </p>
            </article>

            <article className="career-benefit-card">
              <div className="career-benefit-icon">💡</div>
              <h3>Creative Teaching</h3>
              <p>
                Encourage curiosity through engaging lessons,
                activities, and student participation.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="career-openings" id="career-openings">
        <div className="career-container">
          <div className="career-section-heading">
            <span className="career-section-label">
              OPPORTUNITIES
            </span>
            <h2>Explore Career Opportunities</h2>
            <p>
              Review the example roles below and submit your
              interest. Please confirm current vacancies with
              the school before applying.
            </p>
          </div>

          <div className="career-opening-grid">
            {openings.map((job) => (
              <article className="career-opening-card" key={job.title}>
                <div className="career-opening-top">
                  <div className="career-job-icon">{job.icon}</div>
                  <span className="career-job-type">{job.type}</span>
                </div>

                <span className="career-department">
                  {job.department}
                </span>

                <h3>{job.title}</h3>

                <p className="career-job-description">
                  {job.description}
                </p>

                <div className="career-qualification">
                  <strong>Qualification</strong>
                  <span>{job.qualification}</span>
                </div>

                <button
                  type="button"
                  className="career-apply-link"
                  onClick={() => scrollToApplication(job.title)}
                >
                  Express Your Interest <span>→</span>
                </button>
              </article>
            ))}
          </div>

          <p className="career-vacancy-note">
            Note: These are example role categories, not confirmed
            vacancies. Contact the school to check availability,
            eligibility, and recruitment dates.
          </p>
        </div>
      </section>

      {/* Application Process */}
      <section className="career-process">
        <div className="career-container">
          <div className="career-section-heading">
            <span className="career-section-label">
              HOW TO APPLY
            </span>
            <h2>Your Application Journey</h2>
            <p>
              Follow these steps to express interest in joining our school.
            </p>
          </div>

          <div className="career-process-grid">
            <div className="career-process-card">
              <span className="career-step-number">01</span>
              <h3>Choose a Role</h3>
              <p>
                Select the position that best matches your skills
                and qualifications.
              </p>
            </div>

            <div className="career-process-card">
              <span className="career-step-number">02</span>
              <h3>Submit Details</h3>
              <p>
                Complete the application form with your contact
                details and professional background.
              </p>
            </div>

            <div className="career-process-card">
              <span className="career-step-number">03</span>
              <h3>School Review</h3>
              <p>
                The school can review your enquiry and contact you
                if a suitable opportunity is available.
              </p>
            </div>

            <div className="career-process-card">
              <span className="career-step-number">04</span>
              <h3>Next Steps</h3>
              <p>
                Follow any further instructions provided by the
                school regarding interviews or documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section
        className="career-application-section"
        id="career-application"
      >
        <div className="career-container career-application-grid">
          <div className="career-application-info">
            <span className="career-section-label">
              TAKE THE NEXT STEP
            </span>

            <h2>Interested in Joining Our School?</h2>

            <p>
              Tell us about yourself, your qualifications, and the
              position you are interested in. We look forward to
              hearing from people who are passionate about education.
            </p>

            <div className="career-contact-box">
              <span className="career-contact-icon">📍</span>
              <div>
                <strong>School Location</strong>
                <p>
                  Near Government Hospital, Veldurthi,
                  Andhra Pradesh – 518216
                </p>
              </div>
            </div>

            <div className="career-contact-box">
              <span className="career-contact-icon">📞</span>
              <div>
                <strong>Contact the School</strong>
                <a href="tel:+919440851987">
                  +91 94408 51987
                </a>
              </div>
            </div>

            <a
              className="career-directions-link"
              href="https://www.google.com/maps/search/?api=1&query=Padma+Vidya+Vikas+UP+EM+School+Veldurthi+Andhra+Pradesh+518216"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find Us on Google Maps ↗
            </a>
          </div>

          <div className="career-form-card">
            <h3>Career Enquiry Form</h3>
            <p className="career-form-intro">
              Enter your details below. Required fields are marked
              by the browser.
            </p>

            {submitted && (
              <div className="career-form-notice" role="status">
                Your email application has been prepared. If your
                email application did not open, contact the school
                directly by phone.
              </div>
            )}

            <form className="career-form" onSubmit={handleSubmit}>
              <div className="career-form-row">
                <div className="career-form-group">
                  <label htmlFor="career-name">Full Name *</label>
                  <input
                    id="career-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="career-form-group">
                  <label htmlFor="career-phone">Phone Number *</label>
                  <input
                    id="career-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    required
                  />
                </div>
              </div>

              <div className="career-form-group">
                <label htmlFor="career-email">Email Address *</label>
                <input
                  id="career-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="career-form-group">
                <label htmlFor="career-position">
                  Position Interested In *
                </label>
                <select
                  id="career-position"
                  name="position"
                  value={selectedPosition}
                  onChange={(event) =>
                    setSelectedPosition(event.target.value)
                  }
                  required
                >
                  <option value="">Select a position</option>
                  {openings.map((job) => (
                    <option key={job.title} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="career-form-row">
                <div className="career-form-group">
                  <label htmlFor="career-qualification">
                    Qualification *
                  </label>
                  <input
                    id="career-qualification"
                    name="qualification"
                    type="text"
                    placeholder="e.g. B.Ed, D.Ed, Degree"
                    required
                  />
                </div>

                <div className="career-form-group">
                  <label htmlFor="career-experience">
                    Experience *
                  </label>
                  <select
                    id="career-experience"
                    name="experience"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select experience
                    </option>
                    <option value="Fresher">Fresher</option>
                    <option value="Less than 1 year">
                      Less than 1 year
                    </option>
                    <option value="1–3 years">1–3 years</option>
                    <option value="3–5 years">3–5 years</option>
                    <option value="5+ years">5+ years</option>
                  </select>
                </div>
              </div>

              <div className="career-form-group">
                <label htmlFor="career-message">
                  Additional Information
                </label>
                <textarea
                  id="career-message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your skills or teaching experience..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="career-submit-btn"
              >
                Prepare Application Email <span>→</span>
              </button>

              <p className="career-privacy-note">
                This form opens your default email application.
                It does not upload or store your application online.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Closing Banner */}
      <section className="career-cta">
        <div className="career-container">
          <span>YOUR TALENT CAN MAKE A DIFFERENCE</span>
          <h2>Help Us Build a Brighter Future for Every Child</h2>
          <p>
            Bring your enthusiasm, knowledge, and commitment
            to a learning community that values education.
          </p>
          <button
            type="button"
            className="career-btn career-btn-primary"
            onClick={() => scrollToApplication()}
          >
            Start Your Application <span>→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Career;
