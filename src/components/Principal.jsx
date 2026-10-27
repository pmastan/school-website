
import "./Principal.css";
import image from "../assets/image.webp";
import image1 from "../assets/image1.webp";
import meo from "../assets/meo.webp";
import meo1 from "../assets/meo1.webp";



const schoolLeaders = [
  {
    id: "principal",
    role: "Principal's Message",
    image: image,
    name: "D. Badesaheb",
    designation: "Founder & HM",
    message:
      "Welcome to our school. We believe every child has unique potential. Our mission is to nurture students through quality education, discipline, values, innovation and creativity. Together, we build future leaders.",
  },
  {
    id: "correspondent",
    role: "Correspondent's Message",
    image: image1,
    name: "D. Asha",
    designation: "School Correspondent",
    message:
      "At Padma Vidya Vikas School, we are committed to providing a supportive learning environment where every student can grow with confidence. We focus on academic excellence, good character, discipline and strong values to prepare children for a successful future.",
  },
  
{
  id: "meo",
  role: "MEO's Message",
  image: meo,
  name: "Indira mam",
  designation: "Mandal Educational Officer (MEO)",
  message:
    "Education is the foundation of a strong and progressive society. We encourage every student to pursue academic excellence, develop discipline, build good character and uphold strong moral values. Let us work together to create a supportive learning environment that empowers students with knowledge, confidence and the skills needed for a bright future.",
},

{
  id: "meo",
  role: "MEO's Message",
  image: meo1,
  name: "Ramesh Sir",
  designation: "Mandal Educational Officer (MEO)",
  message:
    "Education plays a vital role in shaping responsible citizens and building a brighter future. I appreciate the efforts of Padma Vidya Vikas School in providing quality education and encouraging students to achieve their full potential. I encourage teachers to inspire young minds through dedication and innovation, and students to develop discipline, confidence, moral values and a lifelong love of learning. Let us work together to ensure every child receives the opportunity to succeed.",
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
