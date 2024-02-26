import './App.css';
import Contact from './component/Contact';
import Main from './component/Main';
import MyInfo from './component/MyInfo';
import MyProjects from './component/MyProjects';
import MySkills from './component/MySkills';
// import { init } from './dist/galaxy';

function App() {

    // useEffect(()=>{
    //     // window.addEventListener("load", init);
    //     init();
    // }, [])

    return (
        <div className="App">
            <Main />
            <MyInfo />
            <MySkills />
            <MyProjects />
            <Contact />
        </div>
    );
}

export default App;
