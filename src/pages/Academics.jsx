
import "./Academics.css";

import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaFlask,
  FaGraduationCap,
  FaMedal,
  FaBrain,
  FaCalculator,
  FaLanguage,
  FaRunning,
  FaPalette,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const programs = [
  {
    title: "Primary Education",
    icon: <FaGraduationCap />,
    classes: "Classes 1 - 2",
    desc: "Building early literacy, numeracy, communication, creativity, and confidence through engaging classroom learning.",
  },
  {
    title: "Elementary Education",
    icon: <FaBookOpen />,
    classes: "Classes 3 - 5",
    desc: "Developing a strong foundation in English, Mathematics, Environmental Studies, and essential learning skills.",
  },
  {
    title: "Upper Primary Education",
    icon: <FaBrain />,
    classes: "Classes 6 - 7",
    desc: "Encouraging independent thinking, problem-solving, subject knowledge, teamwork, and personal development.",
  },
];

const subjects = [
  {
    title: "English",
    icon: <FaLanguage />,
    desc: "Reading, writing, grammar, vocabulary, and communication skills.",
  },
  {
    title: "Mathematics",
    icon: <FaCalculator />,
    desc: "Numerical skills, logical reasoning, calculations, and problem-solving.",
  },
  {
    title: "Environmental Studies",
    icon: <FaFlask />,
    desc: "Learning about nature, the environment, health, and the world around us.",
  },
  {
    title: "General Knowledge",
    icon: <FaBookOpen />,
    desc: "Developing curiosity and awareness of people, places, and everyday life.",
  },
];

const features = [
  "English-Medium Instruction",
  "Foundation in Mathematics",
  "Reading and Writing Skills",
  "Environmental Awareness",
  "Creative Activities",
  "Sports and Physical Education",
  "Moral Values and Discipline",
  "Teamwork and Communication",
];

function Academics() {
  return (
    <section className="academics">
      <div className="container">
        {/* Academic Hero Heading */}
        <div className="section-title">
          <span className="academic-subtitle">
            PADMA VIDYA VIKAS SCHOOL
          </span>

          <h2>Our Academics</h2>

          <p>
            At Padma Vidya Vikas UP English Medium School, Veldurthi,
            we aim to provide a strong educational foundation through
            English-medium instruction, effective teaching, practical
            activities, and the development of essential life skills.
          </p>
        </div>

        {/* Programs */}
        <div className="program-grid">
          {programs.map((item) => (
            <div className="program-card" key={item.title}>
              <div className="icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <h5>{item.classes}</h5>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Subjects */}
        <div className="subjects-section">
          <div className="section-title">
            <h2>Subjects and Learning</h2>

            <p>
              We focus on developing subject knowledge, communication,
              reasoning, and curiosity appropriate to each student's
              grade level.
            </p>
          </div>

          <div className="subjects-grid">
            {subjects.map((subject) => (
              <div className="subject-card" key={subject.title}>
                <div className="subject-icon">{subject.icon}</div>

                <h3>{subject.title}</h3>

                <p>{subject.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum */}
        <div className="curriculum">
          <div className="curriculum-left">
            <span className="academic-subtitle">
              LEARNING APPROACH
            </span>

            <h2>Our Curriculum</h2>

            <p>
              Our academic approach focuses on helping students build
              a solid foundation in essential subjects while developing
              confidence, creativity, discipline, and independent
              thinking. Classroom activities and age-appropriate
              learning exercises help students understand concepts
              and apply their knowledge.
            </p>

            <div className="curriculum-list">
              {features.map((item) => (
                <div key={item} className="feature">
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
                We aim to make learning engaging through clear
                explanations, classroom discussions, guided practice,
                exercises, and regular feedback to support student
                progress.
              </p>
            </div>

            <div className="info-card">
              <FaUsers className="big-icon" />

              <h3>Student Development</h3>

              <p>
                We encourage students to build communication skills,
                positive habits, cooperation, responsibility, respect,
                and confidence as they progress through their school
                years.
              </p>
            </div>

            <div className="info-card">
              <FaRunning className="big-icon" />

              <h3>Activities and Creativity</h3>

              <p>
                Age-appropriate creative activities, physical exercise,
                and opportunities to work with classmates can support
                well-rounded student development.
              </p>
            </div>

            <div className="info-card">
              <FaPalette className="big-icon" />

              <h3>Values and Character</h3>

              <p>
                We emphasize good manners, discipline, kindness,
                honesty, respect for others, and responsible behavior
                in everyday school life.
              </p>
            </div>
          </div>
        </div>

        {/* School Statistics */}
        <div className="academic-stats">
          <div className="academic-stat">
            <FaGraduationCap />

            <h3>Classes 1 - 7</h3>

            <p>Primary and Upper Primary</p>
          </div>

          <div className="academic-stat">
            <FaChalkboardTeacher />

            <h3>15</h3>

            <p>Teachers</p>
          </div>

          <div className="academic-stat">
            <FaBookOpen />

            <h3>318+</h3>

            <p>Students</p>
          </div>

          <div className="academic-stat">
            <FaMedal />

            <h3>Since 2017</h3>

            <p>Serving the Community</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="academic-cta">
          <h2>Building Bright Futures</h2>

          <p>
            Every child deserves the opportunity to learn, grow,
            discover their talents, and develop the confidence to
            achieve their goals.
          </p>

          <a href="tel:+919440851987" className="academic-cta-button">
            Contact Our School
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Academics;
