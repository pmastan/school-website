
import "./Teachers.css";
import staffGroup from "../assets/staff.webp";

function Teachers() {
  return (
    <section
      className="teachers"
      aria-labelledby="teachers-heading"
    >
      <div className="teachers-banner">
        <img
          src={staffGroup}
          alt="Teaching staff of Padma Vidya Vikas School, Veldurti"
          className="teachers-banner-image"
          loading="lazy"
          decoding="async"
        />

        <div className="teachers-banner-overlay">
          <span className="teachers-subtitle">
            OUR DEDICATED TEAM
          </span>

          <h2 id="teachers-heading">
            Meet Our Teachers
          </h2>

          <p>
            Dedicated educators inspiring young minds,
            nurturing talent, and shaping a brighter future
            for every student.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Teachers;
