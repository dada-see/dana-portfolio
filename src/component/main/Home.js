import ScrollTop from "../ScrollTop";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";

const Home = () => {
    return(
        <div className="Home">
            <About/>
            <Skills/>
            <Project/>
            <ScrollTop/>
        </div>
    )
}

export default Home;