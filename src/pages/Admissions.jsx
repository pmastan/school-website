import "./Admissions.css";
import {
  FaUserGraduate,
  FaFileAlt,
  FaClipboardCheck,
  FaSchool,
  FaPhoneAlt,
  FaEnvelope,
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

function Admissions() {
  return (
    <section className="admissions">
      <div className="container">

        {/* Hero */}
        <div className="admission-hero">
          <h1>Admissions Open 2026 - 2027</h1>
          <p>
            Join our school and provide your child with quality education,
            modern learning facilities, experienced teachers, and a bright future.
          </p>

          <button>Apply Now</button>
        </div>

        {/* Process */}
        <div className="section-title">
          <h2>Admission Process</h2>
        </div>

        <div className="process-grid">
          {process.map((item, index) => (
            <div className="process-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Eligibility */}
        <div className="admission-info">

          <div className="info-card">
            <h2>Eligibility</h2>

            <ul>
              <li>Nursery to UKG</li>
              <li>Grade I – V</li>
              <li>Grade VI – VIII</li>
              <li>Grade IX – X</li>
              <li>Grade XI – XII</li>
            </ul>
          </div>

          <div className="info-card">
            <h2>Required Documents</h2>

            <ul>
              {documents.map((doc, index) => (
                <li key={index}>✔ {doc}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Important Dates */}
        <div className="dates-section">
          <h2>Important Dates</h2>

          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Admissions Open</td>
                <td>01 August 2026</td>
              </tr>

              <tr>
                <td>Scholarship Test</td>
                <td>12 August 2026</td>
              </tr>

              <tr>
                <td>Last Date to Apply</td>
                <td>15 September 2026</td>
              </tr>

              <tr>
                <td>Academic Session Begins</td>
                <td>01 June 2027</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Contact */}
        <div className="contact-box">

          <h2>Need Help?</h2>

          <div className="contact-grid">

            <div>
              <FaPhoneAlt />
              <span>+91 9876543210</span>
            </div>

            <div>
              <FaEnvelope />
              <span>admissions@abcschool.com</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Admissions;