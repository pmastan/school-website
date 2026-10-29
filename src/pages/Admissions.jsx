
import "./Admissions.css";

import {
  FaUserGraduate,
  FaFileAlt,
  FaClipboardCheck,
  FaSchool,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  FaCheckCircle,
  FaCalendarAlt,
  FaStar,
  FaBookOpen,
  FaGraduationCap,
} from "react-icons/fa";

const process = [
  {
    icon: <FaFileAlt />,
    title: "Submit Application",
    desc: "Fill out the online/offline admission form with all required details.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Document Verification",
    desc: "Submit the required documents for verification.",
  },
  {
    icon: <FaSchool />,
    title: "Interaction / Assessment",
    desc: "Students may attend an interaction or entrance assessment depending on the class.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Admission Confirmation",
    desc: "After approval and fee payment, admission will be confirmed.",
  },
];

const documents = [
  "Birth Certificate",
  "Aadhaar Card (Student & Parent)",
  "Passport Size Photographs",
  "Previous Academic Report Card",
  "Transfer Certificate (TC)",
  "Study Certificate (if applicable)",
  "Address Proof",
  "Caste Certificate (if applicable)",
];

const eligibility = [
  "Nursery to UKG",
  "Grade I – V",
  "Grade VI – VIII",
  "Grade IX – X",
  "Grade XI – XII",
];

const dates = [
  { event: "Admissions Open", date: "01 August 2026" },
  { event: "Scholarship Test", date: "12 August 2026" },
  { event: "Last Date to Apply", date: "15 September 2026" },
  { event: "Academic Session Begins", date: "01 June 2027" },
];

function Admissions() {
  return (
    <main className="admissions">
      {/* Hero */}
      <section className="admission-hero">
        <div className="admission-hero-overlay"></div>

        <div className="container admission-hero-container">
          <div className="admission-hero-content">
            <span className="admission-badge">
              <FaStar />
              ADMISSIONS OPEN 2026–2027
            </span>

            <h1>
              Every Child Deserves
              <span> a Bright Beginning</span>
            </h1>

            <p>
              Discover a place where curiosity grows, talents shine,
              and young minds prepare for a brighter future.
              Start your child's educational journey with Padma Vidya
              Vikas School, Veldurthi.
            </p>

            <div className="admission-hero-buttons">
              <a href="#admission-process" className="admission-btn">
                Explore Admissions
                <FaArrowRight />
              </a>

              <a
                href="tel:+919878765432"
                className="admission-btn admission-btn-light"
              >
                <FaPhoneAlt />
                Contact School
              </a>
            </div>

            <div className="admission-hero-features">
              <span>
                <FaCheckCircle /> Learning
              </span>
              <span>
                <FaCheckCircle /> Growth
              </span>
              <span>
                <FaCheckCircle /> Excellence
              </span>
            </div>
          </div>

          <div className="admission-hero-decoration">
            <div className="admission-decoration-circle circle-one"></div>
            <div className="admission-decoration-circle circle-two"></div>

            <div className="admission-floating-card floating-card-one">
              <FaBookOpen />
              <span>Discover & Learn</span>
            </div>

            <div className="admission-floating-card floating-card-two">
              <FaGraduationCap />
              <span>Dream Big</span>
            </div>
          </div>
        </div>

        <div className="admission-hero-bottom"></div>
      </section>

      {/* Introduction */}
      <section className="admission-intro">
        <div className="container admission-intro-grid">
          <div className="admission-intro-image">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1100&q=85"
              alt="Students participating in classroom learning"
              loading="lazy"
            />

            <div className="admission-image-caption">
              <FaBookOpen />
              <div>
                <strong>Learning for Life</strong>
                <span>Building skills for tomorrow</span>
              </div>
            </div>
          </div>

          <div className="admission-intro-content">
            <span className="admission-section-label">
              YOUR JOURNEY STARTS HERE
            </span>

            <h2>
              A Great School Experience
              <span> Begins with One Step</span>
            </h2>

            <p>
              At Padma Vidya Vikas UP English Medium School,
              Veldurthi, we aim to provide a welcoming environment
              where children can learn, explore their interests,
              develop confidence, and build a strong educational
              foundation.
            </p>

            <p>
              Our admission process helps parents understand the
              requirements and prepare for their child's next
              educational milestone.
            </p>

            <a href="#required-documents" className="admission-learn-link">
              Get Ready to Apply
              <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section
        className="admission-process-section"
        id="admission-process"
      >
        <div className="container">
          <div className="admission-section-heading">
            <span className="admission-section-label">
              FOUR SIMPLE STEPS
            </span>

            <h2>
              How to Get <span>Admitted</span>
            </h2>

            <p>
              Our admission process guides parents and students
              through each step, from application to confirmation.
            </p>
          </div>

          <div className="process-grid">
            {process.map((item, index) => (
              <article
                className={`process-card process-card-${index + 1}`}
                key={item.title}
                style={{ "--card-index": index }}
              >
                <div className="process-card-top">
                  <div className="process-icon">{item.icon}</div>
                  <span className="process-number">
                    0{index + 1}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <div className="process-card-footer">
                  <span>STEP {index + 1}</span>
                  <FaArrowRight />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="admission-eligibility-section">
        <div className="container">
          <div className="admission-section-heading">
            <span className="admission-section-label">
              FIND YOUR CLASS
            </span>

            <h2>
              Admission <span>Eligibility</span>
            </h2>

            <p>
              Check the grade levels listed below and contact the
              school to confirm available classes, age requirements,
              and entry criteria.
            </p>
          </div>

          <div className="admission-info">
            <div className="info-card eligibility-card">
              <div className="admission-info-heading">
                <div className="admission-info-icon">
                  <FaUserGraduate />
                </div>

                <div>
                  <span>ADMISSION GUIDE</span>
                  <h3>Eligibility Criteria</h3>
                </div>
              </div>

              <ul>
                {eligibility.map((item, index) => (
                  <li key={item} style={{ "--item-index": index }}>
                    <FaCheckCircle />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="admission-info-note">
                Please confirm class availability with the school
                office before applying.
              </div>
            </div>

            <div
              className="info-card documents-card"
              id="required-documents"
            >
              <div className="admission-info-heading">
                <div className="admission-info-icon document-icon">
                  <FaFileAlt />
                </div>

                <div>
                  <span>APPLICATION CHECKLIST</span>
                  <h3>Required Documents</h3>
                </div>
              </div>

              <ul>
                {documents.map((doc, index) => (
                  <li key={doc} style={{ "--item-index": index }}>
                    <FaCheckCircle />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>

              <div className="admission-info-note">
                The school office can confirm which documents are
                necessary for your child's class.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="dates-section">
        <div className="container">
          <div className="admission-section-heading">
            <span className="admission-section-label">
              MARK YOUR CALENDAR
            </span>

            <h2>
              Important <span>Dates</span>
            </h2>

            <p>
              Keep track of the admission schedule and contact
              the school to verify the dates before planning your visit.
            </p>
          </div>

          <div className="admission-dates-layout">
            <div className="admission-dates-image">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=85"
                alt="Notebook and calendar for planning school admissions"
                loading="lazy"
              />

              <div className="admission-calendar-label">
                <FaCalendarAlt />
                <div>
                  <strong>Plan Ahead</strong>
                  <span>Stay prepared for admission</span>
                </div>
              </div>
            </div>

            <div className="admission-table-card">
              <div className="admission-table-heading">
                <FaCalendarAlt />
                <h3>Admission Schedule</h3>
              </div>

              <div className="admission-table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Event</th>
                      <th>Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    {dates.map((item, index) => (
                      <tr key={item.event}>
                        <td>
                          <span className="date-event-icon">
                            <FaCheckCircle />
                          </span>
                          {item.event}
                        </td>

                        <td className="date-value">{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="admission-date-note">
                Dates are retained from the original page and have
                not been independently verified. Please confirm
                the current schedule with the school.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-box">
        <div className="container">
          <div className="admission-contact-inner">
            <div className="admission-contact-decoration">
              <FaSchool />
            </div>

            <div className="admission-contact-content">
              <span className="admission-section-label">
                WE ARE HERE TO HELP
              </span>

              <h2>
                Let's Begin Your Child's
                <span> Bright Future</span>
              </h2>

              <p>
                Have questions about admissions, documents, or
                available classes? Get in touch with our school.
              </p>

              <div className="contact-grid">
                <a href="tel:+919878765432">
                  <span className="contact-icon">
                    <FaPhoneAlt />
                  </span>

                  <span>
                    <small>CALL OUR SCHOOL</small>
                    <strong>+91 9876543210</strong>
                  </span>
                </a>

                <a href="mailto:admissions@abcschool.com">
                  <span className="contact-icon">
                    <FaEnvelope />
                  </span>

                  <span>
                    <small>EMAIL US</small>
                    <strong>info.pvvs@gmail.com</strong>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Admissions;
