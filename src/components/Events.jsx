import "./Events.css";
import {
  FaRunning,
  FaFlask,
  FaMusic,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const events = [
  {
    title: "Annual Sports Day",
    date: "20 August 2026",
    time: "09:00 AM",
    venue: "School Playground",
    icon: <FaRunning />,
    category: "Sports",
    desc: "Students compete in athletics, football, volleyball, kabaddi, relay races, and indoor games.",
  },
  {
    title: "Science Exhibition",
    date: "10 September 2026",
    time: "10:00 AM",
    venue: "Science Block",
    icon: <FaFlask />,
    category: "Academic",
    desc: "Students present innovative science and technology projects with live demonstrations.",
  },
  {
    title: "Cultural Fest",
    date: "15 October 2026",
    time: "05:00 PM",
    venue: "School Auditorium",
    icon: <FaMusic />,
    category: "Cultural",
    desc: "Dance, singing, drama, fashion show, and various cultural performances.",
  },
  {
    title: "Graduation Ceremony",
    date: "30 March 2027",
    time: "10:30 AM",
    venue: "Main Auditorium",
    icon: <FaGraduationCap />,
    category: "Academic",
    desc: "Celebrating the achievements of Grade X & XII students with awards and certificates.",
  },
];

function Events() {
  return (
    <section className="events">

      {/* Hero */}
      <div className="events-hero">
        <h1>School Events & Activities</h1>
        <p>
          Every event at our school is designed to inspire creativity,
          leadership, teamwork, and holistic development.
        </p>
      </div>

      {/* Featured Event */}
      <div className="featured-event">
        <div className="featured-content">
          <span className="featured-badge">Featured Event</span>

          <h2>Annual Sports Meet 2026</h2>

          <p>
            Join us for an exciting day filled with athletic competitions,
            team games, cultural performances, and prize distribution.
          </p>

          <div className="featured-info">
            <span><FaCalendarAlt /> 20 August 2026</span>
            <span><FaClock /> 09:00 AM</span>
            <span><FaMapMarkerAlt /> School Playground</span>
          </div>

          <button>Register Now</button>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="section-title">
        <h2>Upcoming Events</h2>
      </div>

      <div className="event-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>

            <div className="event-icon">
              {event.icon}
            </div>

            <span className="category">
              {event.category}
            </span>

            <h3>{event.title}</h3>

            <div className="event-details">
              <p><FaCalendarAlt /> {event.date}</p>
              <p><FaClock /> {event.time}</p>
              <p><FaMapMarkerAlt /> {event.venue}</p>
            </div>

            <p className="desc">
              {event.desc}
            </p>

            <button>Read More</button>

          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="event-stats">

        <div>
          <h2>50+</h2>
          <p>Events Every Year</p>
        </div>

        <div>
          <h2>5000+</h2>
          <p>Student Participants</p>
        </div>

        <div>
          <h2>100+</h2>
          <p>Competitions</p>
        </div>

        <div>
          <h2>25+</h2>
          <p>Guest Speakers</p>
        </div>

      </div>

      {/* CTA */}
      <div className="events-cta">
        <h2>Be a Part of Our School Events</h2>

        <p>
          Explore exciting academic, sports, cultural, and community events
          throughout the year.
        </p>

        <button>View Event Calendar</button>
      </div>

    </section>
  );
}

export default Events;