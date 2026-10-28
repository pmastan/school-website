import "./Contact.css";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const subject = formData.get("subject")?.trim();
    const message = formData.get("message")?.trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const emailSubject = encodeURIComponent(`School Enquiry: ${subject}`);
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:?subject=${emailSubject}&body=${emailBody}`;
  };

  const mapUrl =
    "https://maps.google.com/maps?q=Padma%20Vidya%20Vikas%20UP%20English%20Medium%20School%2C%20Veldurthi%2C%20Andhra%20Pradesh%20518216&t=&z=15&ie=UTF8&iwloc=&output=embed";

  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=Padma+Vidya+Vikas+UP+English+Medium+School+Veldurthi+Andhra+Pradesh+518216";

  return (
    <section className="contact-page">
      {/* Contact Header */}
      <div className="contact-header">
        <span className="contact-subtitle">
          PADMA VIDYA VIKAS SCHOOL
        </span>

        <h1>Contact Us</h1>

        <p>
          We are happy to help parents and students.
          Contact Padma Vidya Vikas UP English Medium School
          for school enquiries and general information.
        </p>
      </div>

      {/* Contact Content */}
      <div className="contact-container">
        {/* School Information */}
        <div className="contact-info">
          <h2>School Information</h2>

          <p className="contact-description">
            Get in touch with our school for information about
            admissions, classes, and other school-related enquiries.
          </p>

          <div className="contact-detail">
            <div className="contact-icon" aria-hidden="true">
              📍
            </div>

            <div>
              <h3>School Address</h3>

              <p>
                H.No. 15-342/4, Near Government Hospital,
                Veldurthi, Andhra Pradesh – 518216
              </p>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Get Directions ↗
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon" aria-hidden="true">
              📞
            </div>

            <div>
              <h3>Phone Number</h3>

              <p>
                <a href="tel:+919440851987">
                  +91 94408 51987
                </a>
              </p>

              <a
                href="tel:+919440851987"
                className="contact-link"
              >
                Call Our School
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon" aria-hidden="true">
              🕒
            </div>

            <div>
              <h3>School Working Hours</h3>
              <p>Monday – Saturday</p>
              <p>8:45 AM – 5:00 PM</p>
              <p className="contact-muted">Sunday: Closed</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon" aria-hidden="true">
              🎓
            </div>

            <div>
              <h3>School Details</h3>
              <p>Established: 2017</p>
              <p>Medium: English</p>
              <p>Classes: 1 to 7</p>
            </div>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-directory-link"
          >
            View School on Google Maps ↗
          </a>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <h2>Send Us a Message</h2>

          <p className="contact-form-description">
            Fill in your details and prepare an enquiry using
            your default email application.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>

              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>

              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>

              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="e.g. Admission Enquiry"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Your Message</label>

              <textarea
                id="contact-message"
                name="message"
                rows="6"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit-btn">
              Prepare Email <span aria-hidden="true">→</span>
            </button>

            <p className="contact-form-note">
              Your email application will open with your enquiry.
              You can review and send it from there.
            </p>
          </form>
        </div>
      </div>

      {/* Interactive Moving Map */}
      <div className="contact-location">
        <div className="contact-location-heading">
          <span className="contact-subtitle">FIND US HERE</span>

          <h2>Visit Our School</h2>

          <p>
            Padma Vidya Vikas UP English Medium School,
            Near Government Hospital, Veldurthi,
            Andhra Pradesh – 518216.
          </p>
        </div>

        <div className="contact-map-wrapper">
          <iframe
            className="contact-map-frame"
            src={mapUrl}
            title="Interactive map showing Padma Vidya Vikas School in Veldurthi"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-map-btn"
        >
          <span aria-hidden="true">📍</span>
          Get Directions on Google Maps ↗
        </a>
      </div>
    </section>
  );
};

export default Contact;