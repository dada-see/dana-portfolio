import './App.css';
import Contact from './component/Contact';
import Main from './component/Main';
import MyInfo from './component/MyInfo';
import MyProjects from './component/MyProjects';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './component/Header';

function App() {


    return (
        <div className="App">
            <Header />
            <Main />
            <MyInfo />
            <MyProjects />
            <Contact />
        </div>
    );
}

export default App;
