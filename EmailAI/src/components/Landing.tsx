import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

function Landing(){
    return (<>
    <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Contact></Contact>
      <Pricing></Pricing>
      {/* <Testimonials></Testimonials> */}
      <Footer></Footer>
    </>);
}

export default Landing;