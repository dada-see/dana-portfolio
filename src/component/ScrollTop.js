import { useEffect } from "react";
import { useState } from "react";


const ScrollTop = () => {
    const [isScroll, setIsScroll] = useState(false);

    //화면 스크롤 조건에 따라 scrollTop 버튼 보이기
    const handleScroll = () => {
        window.scrollY > 100 ? setIsScroll(true) : setIsScroll(false);
    }

    //스크롤 이벤트 (마운트 될 떄 실행, 언마운트 될 떄 해제) 
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