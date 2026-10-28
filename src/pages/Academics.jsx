
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
  FaCheckCircle,
  FaPhoneAlt,
  FaStar,
  FaLightbulb,
  FaGlobeAsia,
} from "react-icons/fa";

const programs = [
  {
    title: "Primary Education",
    number: "01",
    icon: <FaGraduationCap />,
    classes: "Classes 1–2",
    color: "blue",
    desc: "Building early literacy, numeracy, communication, creativity, and confidence through engaging classroom learning.",
  },
  {
    title: "Elementary Education",
    number: "02",
    icon: <FaBookOpen />,
    classes: "Classes 3–5",
    color: "green",
    desc: "Developing a strong foundation in English, Mathematics, Environmental Studies, and essential learning skills.",
  },
  {
    title: "Upper Primary Education",
    number: "03",
    icon: <FaBrain />,
    classes: "Classes 6–7",
    color: "purple",
    desc: "Encouraging independent thinking, problem-solving, subject knowledge, teamwork, and personal development.",
  },
];

const subjects = [
  {
    title: "English",
    icon: <FaLanguage />,
    desc: "Reading, writing, grammar, vocabulary, and communication skills.",
    color: "blue",
  },
  {
    title: "Mathematics",
    icon: <FaCalculator />,
    desc: "Numerical skills, logical reasoning, calculations, and problem-solving.",
    color: "green",
  },
  {
    title: "Environmental Studies",
    icon: <FaFlask />,
    desc: "Learning about nature, the environment, health, and the world around us.",
    color: "orange",
  },
  {
    title: "General Knowledge",
    icon: <FaGlobeAsia />,
    desc: "Developing curiosity and awareness of people, places, and everyday life.",
    color: "purple",
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

const learningCards = [
  {
    title: "Teaching Methodology",
    icon: <FaChalkboardTeacher />,
    desc: "Clear explanations, classroom discussions, guided practice, and regular feedback to support student progress.",
    color: "blue",
  },
  {
    title: "Student Development",
    icon: <FaUsers />,
    desc: "Building communication skills, positive habits, cooperation, responsibility, respect, and confidence.",
    color: "green",
  },
  {
    title: "Activities and Creativity",
    icon: <FaRunning />,
    desc: "Creative activities, physical exercise, and opportunities to collaborate with classmates.",
    color: "orange",
  },
  {
    title: "Values and Character",
    icon: <FaPalette />,
    desc: "Encouraging kindness, honesty, discipline, good manners, and responsible behavior.",
    color: "pink",
  },
];

function Academics() {
  return (
    <main className="academics-page">
      {/* Hero Section */}
      <section className="academic-hero">
        <div className="academic-hero-overlay"></div>

        <div className="academic-hero-content">
          <span className="academic-eyebrow">
            <FaStar /> PADMA VIDYA VIKAS SCHOOL
          </span>

          <h1>
            Discover the Joy
            <br />
            of <span>Learning</span>
          </h1>

          <p>
            At Padma Vidya Vikas UP English Medium School,
            Veldurthi, we nurture young minds through quality
            education, creative learning, and essential life skills.
          </p>

          <a href="#academic-programs" className="academic-primary-btn">
            Explore Our Programs
            <FaArrowRight />
          </a>

          <div className="academic-hero-note">
            <FaBookOpen />
            <span>Learn Today. Lead Tomorrow.</span>
          </div>
        </div>

        <div className="academic-hero-bottom"></div>
      </section>

      {/* Programs Section */}
      <section
        className="academic-section academic-programs"
        id="academic-programs"
      >
        <div className="academic-container">
          <div className="academic-heading">
            <span className="academic-kicker">
              OUR EDUCATIONAL PROGRAMS
            </span>

            <h2>
              Learning at <span>Every Stage</span>
            </h2>

            <p>
              We provide age-appropriate education that builds a
              strong foundation and prepares students for a brighter
              future.
            </p>
          </div>

          <div className="academic-program-grid">
            {programs.map((item, index) => (
              <article
                className={`academic-program-card ${item.color}`}
                key={item.title}
                style={{ "--card-index": index }}
              >
                <div className="academic-card-top">
                  <div className="academic-program-icon">
                    {item.icon}
                  </div>

                  <span className="academic-card-number">
                    {item.number}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <span className="academic-class-badge">
                  {item.classes}
                </span>

                <p>{item.desc}</p>

                <a
                  href="tel:+919440851987"
                  className="academic-card-link"
                  aria-label={`Contact the school about ${item.title}`}
                >
                  <FaArrowRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="academic-subjects-section">
        <div className="academic-subjects-image"></div>

        <div className="academic-container academic-subjects-content">
          <div className="academic-heading">
            <span className="academic-kicker">
              KNOWLEDGE AND DISCOVERY
            </span>

            <h2>
              Subjects That Inspire
              <br />
              <span>Young Minds</span>
            </h2>

            <p>
              We focus on subject knowledge, communication, logical
              reasoning, creativity, and curiosity appropriate to
              every student's grade level.
            </p>
          </div>

          <div className="academic-subject-grid">
            {subjects.map((subject, index) => (
              <article
                className={`academic-subject-card ${subject.color}`}
                key={subject.title}
                style={{ "--card-index": index }}
              >
                <div className="academic-subject-icon">
                  {subject.icon}
                </div>

                <h3>{subject.title}</h3>

                <p>{subject.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="academic-section academic-curriculum">
        <div className="academic-container academic-curriculum-layout">
          <div className="academic-curriculum-photo">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85"
              alt="Students enjoying classroom learning"
              loading="lazy"
            />

            <div className="academic-photo-caption">
              <FaLightbulb />
              <div>
                <strong>Every Child Can Shine</strong>
                <span>Learning with confidence and curiosity</span>
              </div>
            </div>
          </div>

          <div className="academic-curriculum-main">
            <span className="academic-kicker">
              OUR LEARNING APPROACH
            </span>

            <h2>
              Building Strong
              <br />
              <span>Foundations for Life</span>
            </h2>

            <p className="academic-curriculum-description">
              Our academic approach helps students develop a solid
              foundation in essential subjects while building
              confidence, creativity, discipline, and independent
              thinking. Classroom activities and age-appropriate
              exercises help students understand and apply what
              they learn.
            </p>

            <div className="academic-feature-list">
              {features.map((feature) => (
                <div className="academic-feature" key={feature}>
                  <FaCheckCircle />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="academic-container">
          <div className="academic-learning-grid">
            {learningCards.map((card, index) => (
              <article
                className={`academic-learning-card ${card.color}`}
                key={card.title}
                style={{ "--card-index": index }}
              >
                <div className="academic-learning-icon">
                  {card.icon}
                </div>

                <div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* School Statistics */}
      <section className="academic-stats-section">
        <div className="academic-stats-overlay"></div>

        <div className="academic-container academic-stats-content">
          <div className="academic-stats-heading">
            <span className="academic-kicker">
              OUR SCHOOL COMMUNITY
            </span>

            <h2>
              Growing Together,
              <br />
              <span>Achieving More</span>
            </h2>

            <p>
              A commitment to learning, growth, and a brighter future
              for every student.
            </p>
          </div>

          <div className="academic-stats-grid">
            <div className="academic-stat-card">
              <div className="academic-stat-icon">
                <FaGraduationCap />
              </div>
              <h3>Classes 1–7</h3>
              <p>Primary and Upper Primary</p>
            </div>

            <div className="academic-stat-card">
              <div className="academic-stat-icon">
                <FaChalkboardTeacher />
              </div>
              <h3>15</h3>
              <p>Teachers</p>
            </div>

            <div className="academic-stat-card">
              <div className="academic-stat-icon">
                <FaUsers />
              </div>
              <h3>318+</h3>
              <p>Students</p>
            </div>

            <div className="academic-stat-card">
              <div className="academic-stat-icon">
                <FaMedal />
              </div>
              <h3>Since 2017</h3>
              <p>Serving Our Community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="academic-cta-section">
        <div className="academic-container academic-cta">
          <div className="academic-cta-content">
            <span className="academic-kicker">
              YOUR CHILD'S FUTURE STARTS HERE
            </span>

            <h2>
              Building Bright <span>Futures</span>
            </h2>

            <p>
              Every child deserves the opportunity to learn, grow,
              discover their talents, and develop the confidence to
              achieve their goals.
            </p>

            <a
              href="tel:+919440851987"
              className="academic-primary-btn academic-cta-btn"
            >
              <FaPhoneAlt />
              Contact Our School
              <FaArrowRight />
            </a>
          </div>

          <div className="academic-cta-image">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
              alt="Young child enjoying learning"
              loading="lazy"
            />

            <div className="academic-cta-floating">
              <FaStar />
              <span>Learn. Grow. Succeed.</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Academics;
