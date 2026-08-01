import "./Gallery.css";

const images = [
  "https://picsum.photos/500/350?random=1",
  "https://picsum.photos/500/350?random=2",
  "https://picsum.photos/500/350?random=3",
  "https://picsum.photos/500/350?random=4",
  "https://picsum.photos/500/350?random=5",
  "https://picsum.photos/500/350?random=6"
];

function Gallery(){

return(

<section className="gallery">

<h2>School Gallery</h2>

<div className="gallery-grid">

{images.map((img,index)=>(

<img src={img} alt="" key={index}/>

))}

</div>

</section>

);

}

export default Gallery;