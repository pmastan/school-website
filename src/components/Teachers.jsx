import "./Teachers.css";

const teachers = [
  {
    name: "Dr. Rajesh Kumar",
    subject: "Principal",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Mrs. Priya Sharma",
    subject: "Mathematics",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Mr. Arjun Reddy",
    subject: "Science",
    image: "https://randomuser.me/api/portraits/men/50.jpg"
  },
  {
    name: "Mrs. Sneha Rao",
    subject: "English",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

function Teachers() {
  return (
    <section className="teachers">
      <h2>Meet Our Teachers</h2>

      <div className="teacher-grid">
        {teachers.map((teacher, index) => (
          <div className="teacher-card" key={index}>
            <img src={teacher.image} alt={teacher.name} />
            <h3>{teacher.name}</h3>
            <p>{teacher.subject}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Teachers;