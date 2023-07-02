import ShortDiscription from "../../ShortDiscription/ShortDiscription";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Experience from "../Experiance/Experience";
import Plane from "../Plane/Plane";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import Talk from "../Talk/Talk";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div >
            <Banner />
            <Experience />
            <About />
            <ShortDiscription />
            <Services />
            <Projects />
            <Skills />
            <Plane />
            <Testimonial />
            <Talk />
        </div>
    );
};

export default Home;