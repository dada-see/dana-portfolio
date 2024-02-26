import { useEffect, useRef, useState } from "react";
import { Link } from 'react-scroll';

const Main = () => {
    const frontRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        if (position > 0) {
            frontRef.current.style.left = '10px';
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            window.addEventListener("scroll", handleScroll);
        }, 100);
        return () => {
            clearInterval(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div className="Main" id="Main">
            <div className="main_wrap">
                <div className="txt back">
                    <p className="frontend" ref={frontRef}>FRONTEND</p>
                    <p className="myName">LEE DANA</p>
                </div>
                <div className="circle">
                    <p>circle</p>
                </div>
                <div className="txt front">
                    <p className="frontend" ref={frontRef}>FRONTEND</p>
                    <p className="myName">LEE DANA</p>
                </div>
                <Link 
                    to="MyInfo" 
                    smooth="true"
                    duration={500}
                    className="scrollDown"
                >
                    <span className="material-symbols-outlined">Double_Arrow</span>
                </Link>
            </div>
        </div>
    )
}

export default Main;