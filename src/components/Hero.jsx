
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=85",
    title: "Welcome to Padma Vidya Vikas School",
    description:
      "Empowering students through quality education, innovation and excellence.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=85",
    title: "Learn Today, Lead Tomorrow",
    description:
      "Building knowledge, confidence and skills for a brighter future.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1920&q=85",
    title: "Inspiring Young Minds",
    description:
      "Encouraging curiosity, creativity and a lifelong love of learning.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1920&q=85",
    title: "Growing Together, Achieving Together",
    description:
      "Developing teamwork, leadership and strong values in every student.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=85",
    title: "A Bright Future Starts Here",
    description:
      "Discover an environment where every student can learn and succeed.",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url("${slides[currentSlide].image}")`,
      }}
    >
      <div className="overlay">
        <button
          className="slider-arrow prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &#10094;
        </button>

        <div className="hero-content" key={currentSlide}>
          <span className="hero-label">
            PADMA VIDYA VIKAS SCHOOL · VELDURTI
          </span>

          <h1>{slides[currentSlide].title}</h1>

          <p>{slides[currentSlide].description}</p>

          <div className="hero-buttons">
            <Link to="/admissions" className="hero-btn primary">
              Apply Now
            </Link>

            <Link to="/about" className="hero-btn outline">
              Explore
            </Link>
          </div>

          <div className="slider-dots">
            {slides.map((slide, index) => (
              <button
                key={index}
                className={`slider-dot ${
                  currentSlide === index ? "active" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={
                  currentSlide === index ? "true" : undefined
                }
              />
            ))}
          </div>
        </div>

        <button
          className="slider-arrow next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default Hero;
