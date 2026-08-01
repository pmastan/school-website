import "./Features.css";
import {
FaBook,
FaBus,
FaFlask,
FaLaptop,
FaFutbol,
FaUserGraduate
} from "react-icons/fa";

function Features() {

const data=[
{
icon:<FaBook/>,
title:"Smart Classes",
text:"Digital classrooms with modern technology."
},
{
icon:<FaLaptop/>,
title:"Computer Lab",
text:"Advanced computer laboratories."
},
{
icon:<FaFlask/>,
title:"Science Lab",
text:"Fully equipped laboratories."
},
{
icon:<FaBus/>,
title:"Transport",
text:"Safe transportation."
},
{
icon:<FaFutbol/>,
title:"Sports",
text:"Indoor & Outdoor games."
},
{
icon:<FaUserGraduate/>,
title:"Experienced Staff",
text:"Qualified teachers."
}
];

return(

<section className="features">

<h2>Our Facilities</h2>

<div className="feature-grid">

{data.map((item,index)=>(

<div className="card" key={index}>

<div className="icon">
{item.icon}
</div>

<h3>{item.title}</h3>

<p>{item.text}</p>

</div>

))}

</div>

</section>

);

}

export default Features;