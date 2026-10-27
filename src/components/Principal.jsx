
import "./Principal.css";

const schoolLeaders = [
  {
    id: "principal",
    role: "Principal's Message",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Dr. Rajesh Kumar",
    designation: "Principal",
    message:
      "Welcome to our school. We believe every child has unique potential. Our mission is to nurture students through quality education, discipline, values, innovation and creativity. Together, we build future leaders.",
  },
  {
    id: "correspondent",
    role: "Correspondent's Message",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "School Correspondent",
    designation: "Correspondent",
    message:
      "At Padma Vidya Vikas School, we are committed to providing a supportive learning environment where every student can grow with confidence. We focus on academic excellence, good character, discipline and strong values to prepare children for a successful future.",
  },
];

function Principal() {
  return (
    <section
      className="school-leaders"
      aria-labelledby="leaders-title"
    >
      <div className="leaders-heading">
        <span className="leaders-subtitle">
          OUR LEADERSHIP
        </span>

        <h2 id="leaders-title">
          Messages from Our School Leaders
        </h2>

        <p>
          Guiding every student towards knowledge,
          character and success.
        </p>
      </div>

      <div className="leaders-container">
        {schoolLeaders.map((leader) => (
          <article
            className="principal"
            key={leader.id}
          >
            <div className="principal-img">
              <img
                src={leader.image}
                alt={`${leader.designation} portrait`}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="principal-content">
              <span className="leader-role">
                {leader.role}
              </span>

              <p className="leader-message">
                {leader.message}
              </p>

              <div className="leader-signature">
                <h3>{leader.name}</h3>
                <span>{leader.designation}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Principal;
