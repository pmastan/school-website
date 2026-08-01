import "./News.css";

const announcements = [
  {
    title: "Admissions Open 2026-2027",
    desc: "Online and Offline admissions are open for Nursery to Grade XII.",
    date: "01 Aug 2026",
  },
  {
    title: "Scholarship Test",
    desc: "Scholarship examination will be conducted on 12 August 2026.",
    date: "04 Aug 2026",
  },
  {
    title: "Smart Classrooms",
    desc: "All classrooms are now equipped with interactive smart boards.",
    date: "06 Aug 2026",
  },
  {
    title: "New Computer Lab",
    desc: "Modern computer laboratory inaugurated with 60 latest systems.",
    date: "08 Aug 2026",
  },
];

const news = [
  "📢 Admissions Open for Academic Year 2026-2027",
  "🏆 Our students secured 1st Prize in State Science Fair.",
  "⚽ Annual Sports Day will be held on 20 August 2026.",
  "🎓 Parent-Teacher Meeting on 15 August 2026.",
  "📚 Mid-Term Examinations begin from 5 September.",
  "🎉 Independence Day Celebrations on 15 August.",
  "🚌 New Transport Routes Added for Rural Students.",
  "💻 Robotics & AI Workshop starts next Monday.",
  "📖 Library Week Celebration from 18 August.",
  "🌱 Tree Plantation Program organized by Eco Club.",
  "🎭 Cultural Fest registrations are now open.",
  "🏅 National Level Quiz Competition on 25 August.",
];

function News() {
  return (
    <section className="news-section">
      <div className="container">
        <div className="news-grid">

          {/* Left Side */}
          <div className="announcement-box">
            <h2>📢 Latest Announcements</h2>

            {announcements.map((item, index) => (
              <div className="announcement-card" key={index}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span>{item.date}</span>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="scroll-news">
            <div className="news-header">
              <h2>📰 Latest News</h2>
              <span className="live-badge">LIVE</span>
            </div>

            <div className="scroll-box">
              <div className="scroll-content">
                {[...news, ...news, ...news].map((item, index) => (
                  <div className="scroll-item" key={index}>
                    <span className="new-tag">NEW</span>
                    <span className="news-text">{item}</span>
                    <span className="news-date">Aug 2026</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default News;