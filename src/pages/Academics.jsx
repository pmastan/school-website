import "./Academics.css";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaFlask,
  FaGlobe,
  FaGraduationCap,
  FaMedal,
  FaBrain,
} from "react-icons/fa";

const programs = [
  {
    title: "Pre Primary",
    icon: <FaGraduationCap />,
    classes: "Nursery - UKG",
    desc: "Activity-based learning that develops creativity, communication, and confidence.",
  },
  {
    title: "Primary School",
    icon: <FaBookOpen />,
    classes: "Grade I - V",
    desc: "Strong foundation in Mathematics, Science, English, and Social Studies.",
  },
  {
    title: "Middle School",
    icon: <FaBrain />,
    classes: "Grade VI - VIII",
    desc: "Project-based learning with emphasis on analytical thinking and teamwork.",
  },
  {
    title: "Secondary School",
    icon: <FaFlask />,
    classes: "Grade IX - X",
    desc: "Focused preparation for board examinations with continuous assessments.",
  },
  {
    title: "Senior Secondary",
    icon: <FaLaptopCode />,
    classes: "Grade XI - XII",
    desc: "Science, Commerce, and Humanities streams with career guidance.",
  },
];

const features = [
  "Smart Classrooms",
  "Digital Learning",
  "Science Laboratories",
  "Computer Laboratory",
  "English Communication",
  "Sports & Physical Education",
  "Robotics & Coding",
  "Library & Reading Programs",
];

function Academics() {
  return (
    <section className="academics">
      <div className="container">
        {/* Heading */}
        <div className="section-title">
          <h2>Academics</h2>
          <p>
            Our academic program is designed to inspire curiosity, creativity,
            and lifelong learning while ensuring excellent academic results.
          </p>
        </div>

        {/* Programs */}
        <div className="program-grid">
          {programs.map((item, index) => (
            <div className="program-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <h5>{item.classes}</h5>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Curriculum */}
        <div className="curriculum">
          <div className="curriculum-left">
            <h2>Curriculum</h2>
            <p>
              Our curriculum follows a balanced approach combining academics,
              practical learning, life skills, sports, arts, and technology.
              Students participate in classroom activities, laboratory
              experiments, projects, seminars, and educational tours.
            </p>

            <div className="curriculum-list">
              {features.map((item, index) => (
                <div key={index} className="feature">
                  <FaMedal />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="curriculum-right">
            <div className="info-card">
              <FaChalkboardTeacher className="big-icon" />
              <h3>Teaching Methodology</h3>
              <p>
                Student-centered teaching with interactive smart classrooms,
                practical demonstrations, digital content, and regular
                assessments.
              </p>
            </div>

            <div className="info-card">
              <FaGlobe className="big-icon" />
              <h3>Global Learning</h3>
              <p>
                International teaching practices, communication skills, coding,
                AI awareness, and leadership programs prepare students for the
                future.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="academic-cta">
          <h2>Building Bright Futures</h2>
          <p>
            Empowering students with knowledge, skills, values, and confidence
            to excel in academics and life.
          </p>

          <button>Explore Programs</button>
        </div>
      </div>
    </section>
  );
}

export default Academics;