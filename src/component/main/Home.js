import About from "./About";
import Project from "./Project";
import Skills from "./Skills";

const Home = () => {
    return(
        <div className="Home">
            <About/>
            <Skills/>
            <Project/>
        </div>
    )
}

export default Home;