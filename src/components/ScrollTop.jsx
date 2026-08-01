import { useEffect, useState } from "react";
import "./ScrollTop.css";

const ScrollTop = () => {

const [show,setShow]=useState(false);

useEffect(()=>{

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

setShow(true);

}else{

setShow(false);

}

});

},[]);

const top=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

return(

show&&(

<button
className="scroll-top"
onClick={top}
>

↑

</button>

)

);

};

export default ScrollTop;