
import Hero from "../components/Hero";
import About from "../pages/About";
import Features from "../components/Features";
import Principal from "../components/Principal";


import Academics from "../pages/Academics";
import Gallery from "../pages/Gallery";
import News from "../components/News";


import Events from "../components/Events";
import Teachers from "../components/Teachers";
import Testimonials from "../components/Testimonials";
import Contact from "../pages/Contact";

import FAQ from "../components/FAQ";

function Home() {
  return (

    
    <>

     <Hero />
       <News />
      <About />
      <Features />
      <Principal />
       {/* <Academics /> */}
      <Gallery />


       <Events />
      <Teachers />
      <Testimonials />
      <Contact />
      <FAQ />


      
    </>
  );
}

export default Home;