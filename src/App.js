import './App.css';
import Contact from './component/Contact';
import Main from './component/Main';
import MyInfo from './component/MyInfo';
import MyProjects from './component/MyProjects';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './component/Header';
// import { init } from './dist/galaxy';

function App() {

    // useEffect(()=>{
    //     // window.addEventListener("load", init);
    //     init();
    // }, [])

    return (
        <div className="App">
            {/* <div className='bgImage'>backgroundImage</div> */}
            <Header />
            <Main />
            <MyInfo />
            <MyProjects />
            <Contact />
        </div>
    );
}

export default App;
