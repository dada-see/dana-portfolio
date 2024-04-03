import { useEffect, useRef, useState } from "react";
import { Link } from 'react-scroll';


const Main = () => {
    const frontRef = useRef(null);
    const [scrollMargin, setScrollMargin] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const newMargin = scrollPosition;
            setScrollMargin(newMargin);
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div className="Main" id="Main">
            <div className="main_wrap">
                <div className="txt back">
                    <p className="frontend" ref={frontRef} style={{transform: `translateX(-${scrollMargin}px)`}}>FRONTEND</p>
                    <p className="myName" style={{transform: `translateX(${scrollMargin}px)`}}>LEE DANA</p>
                </div>
                <div className="circle">
                    <p>circle</p>
                </div>
                <div className="txt front">
                    <p className="frontend" ref={frontRef} style={{transform: `translateX(-${scrollMargin}px)`}}>FRONTEND</p>
                    <p className="myName" style={{transform: `translateX(${scrollMargin}px)`}}>LEE DANA</p>
                </div>
                <div className="scrollDown">
                    <Link
                        to="MyInfo" 
                        smooth="true"
                        duration={500}
                        className="material-symbols-outlined"
                    >Double_Arrow</Link>
                </div>
            </div>
        </div>
    )
}

export default Main;