import { useEffect } from "react";
import { useState } from "react";


const ScrollTop = () => {
    const [isScroll, setIsScroll] = useState(false);

    const handleScroll = () => {
        window.scrollY > 100 ? setIsScroll(true) : setIsScroll(false);
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return(
        <div className={`scrollTop ${isScroll? 'show' : 'hide'}`} onClick={scrollToTop}>
            <p className="changeFontNum">TOP</p>
        </div>
    )
}

export default ScrollTop;