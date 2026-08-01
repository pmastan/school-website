import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-page">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We are happy to answer your questions. Feel free to contact us anytime.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h2>School Information</h2>

          <p>
            <strong>Address:</strong><br />
            ABC Public School,<br />
            Hyderabad, Telangana
          </p>

          <p>
            <strong>Phone:</strong><br />
            +91 9876543210
          </p>

          <p>
            <strong>Email:</strong><br />
            info@abcschool.com
          </p>

          <p>
            <strong>Office Hours:</strong><br />
            Monday - Saturday<br />
            8:00 AM - 5:00 PM
          </p>

        </div>

        <form className="contact-form">

          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Email Address" />

          <input type="text" placeholder="Subject" />

          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <button>Send Message</button>

        </form>

      </div>

    </section>
  );
};

export default Contact;