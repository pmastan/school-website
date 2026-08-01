import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>Welcome to My School</h1>

          <p>
            Empowering students through quality education,
            innovation and excellence.
          </p>

          <div className="hero-buttons">
            <button>Apply Now</button>
            <button className="outline">Explore</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;