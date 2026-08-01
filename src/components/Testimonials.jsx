import "./Testimonials.css";

const testimonials = [
  {
    name: "Ravi Kumar",
    text: "Excellent school with caring teachers and a great learning environment."
  },
  {
    name: "Anjali",
    text: "The facilities and extracurricular activities are outstanding."
  },
  {
    name: "Parent",
    text: "My child has grown academically and personally since joining."
  }
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Parents Say</h2>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{item.text}"</p>
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;