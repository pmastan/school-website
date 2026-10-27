
import "./Gallery.css";

import img1 from "../gellary/img1.webp";
import img2 from "../gellary/img2.webp";
import img3 from "../gellary/img3.webp";
import img4 from "../gellary/img4.webp";
import img5 from "../gellary/img5.webp";
import img6 from "../gellary/img6.webp";
import img7 from "../gellary/img7.webp";
import img8 from "../gellary/img8.webp";
import img9 from "../gellary/img9.webp";
import img10 from "../gellary/img10.webp";
import img11 from "../gellary/img11.webp";
import img12 from "../gellary/img12.webp";


const images = [
  { id: 1, src: img1, alt: "School gallery image 1" },
  { id: 2, src: img2, alt: "School gallery image 2" },
  { id: 3, src: img3, alt: "School gallery image 3" },
  { id: 4, src: img4, alt: "School gallery image 4" },
  { id: 5, src: img5, alt: "School gallery image 5" },
  { id: 6, src: img6, alt: "School gallery image 6" },
  { id: 7, src: img7, alt: "School gallery image 7" },
  { id: 8, src: img8, alt: "School gallery image 8" },
  { id: 9, src: img9, alt: "School gallery image 9" },
  { id: 10, src: img10, alt: "School gallery image 10" },
  { id: 11, src: img11, alt: "School gallery image 11" },
  { id: 12, src: img12, alt: "School gallery image 12" },

];

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h2>School Gallery</h2>

      <div className="gallery-grid">
        {images.map((image) => (
          <div className="gallery-item" key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
