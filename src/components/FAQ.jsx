import { useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import "./FAQ.css";

const faqData = [
  {
    question: "What classes does the school offer?",
    answer:
      "We offer education from Nursery to Grade 12 with experienced faculty and modern teaching methods.",
  },
  {
    question: "How can I apply for admission?",
    answer:
      "You can apply online through our Admission page or visit the school office with the required documents.",
  },
  {
    question: "What documents are required?",
    answer:
      "Birth Certificate, Aadhaar Card, Passport-size Photos, Previous Report Card and Transfer Certificate.",
  },
  {
    question: "Does the school provide transportation?",
    answer:
      "Yes, GPS-enabled buses cover all major routes with trained drivers and attendants.",
  },
  {
    question: "What are the school timings?",
    answer:
      "Monday to Saturday from 8:30 AM to 3:30 PM. Office timings are 9:00 AM to 5:00 PM.",
  },
  {
    question: "Are extracurricular activities available?",
    answer:
      "Yes. Sports, Music, Dance, Robotics, Coding, Yoga, Arts, Science Clubs and Cultural Activities.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [search, setSearch] = useState("");

  const filteredFAQ = faqData.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">

      <div className="faq-left">

        <span className="faq-subtitle">
          Frequently Asked Questions
        </span>

        <h2>
          Have Any Questions?
        </h2>

        <p>
          Find answers to the most common questions about our school,
          admissions, academics, transport and facilities.
        </p>

        <div className="search-box">

          <FaSearch className="search-icon"/>

          <input
            type="text"
            placeholder="Search your question..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />

        </div>

      </div>

      <div className="faq-right">

        {filteredFAQ.map((item,index)=>(

          <div
            className={`faq-card ${
              activeIndex===index ? "active" : ""
            }`}
            key={index}
          >

            <button
              className="faq-question"
              onClick={()=>toggleFAQ(index)}
            >

              {item.question}

              <FaChevronDown
                className={`arrow ${
                  activeIndex===index ? "rotate" : ""
                }`}
              />

            </button>

            <div
              className={`faq-answer ${
                activeIndex===index ? "show" : ""
              }`}
            >

              <p>{item.answer}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FAQ;