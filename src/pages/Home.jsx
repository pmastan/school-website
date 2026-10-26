
import { useState } from "react";
import "./Home.css";

import Hero from "../components/Hero";
import About from "../pages/About";
import Features from "../components/Features";
import Principal from "../components/Principal";
import Gallery from "../pages/Gallery";
import News from "../components/News";
import Events from "../components/Events";
import Teachers from "../components/Teachers";
import Testimonials from "../components/Testimonials";
import Contact from "../pages/Contact";
import FAQ from "../components/FAQ";

function Home() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((previous) => ({
      ...previous,
      [section]: !previous[section],
    }));
  };

  const sections = [
    { id: "news", title: "Latest News", component: <News /> },
    { id: "about", title: "About Our School", component: <About /> },
    { id: "features", title: "Our Features", component: <Features /> },
    { id: "principal", title: "Principal's Message", component: <Principal /> },
    { id: "gallery", title: "School Gallery", component: <Gallery /> },
    { id: "events", title: "School Events", component: <Events /> },
    { id: "teachers", title: "Our Teachers", component: <Teachers /> },
    {
      id: "testimonials",
      title: "Testimonials",
      component: <Testimonials />,
    },
    { id: "contact", title: "Contact Us", component: <Contact /> },
    { id: "faq", title: "Frequently Asked Questions", component: <FAQ /> },
  ];

  return (
    <main className="home-page">
      <Hero />

      {sections.map((section) => {
        const isExpanded = Boolean(expandedSections[section.id]);

        return (
          <section
            className={`home-preview-section ${
              isExpanded ? "expanded" : ""
            }`}
            key={section.id}
            aria-label={section.title}
          >
            <div
              className={`home-preview-content ${
                isExpanded ? "show-full-content" : ""
              }`}
              id={`section-${section.id}`}
            >
              {section.component}
            </div>

            <div className="home-read-more-wrapper">
              <button
                type="button"
                className="home-read-more-btn"
                onClick={() => toggleSection(section.id)}
                aria-expanded={isExpanded}
                aria-controls={`section-${section.id}`}
              >
                {isExpanded ? "Show Less ↑" : "Read More →"}
              </button>
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default Home;
