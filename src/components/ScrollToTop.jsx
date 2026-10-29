
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import "./ScrollToTop.css";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      className="scroll-to-top"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <ArrowUp
        className="scroll-to-top-icon"
        size={23}
        strokeWidth={2.5}
        aria-hidden="true"
      />
    </button>
  );
}

export default ScrollToTop;
