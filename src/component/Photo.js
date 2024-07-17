import { useState } from "react";


const Photo = ({name, src, onClick}) => {
    const [isHovering, setIsHovering] = useState(true);

    //hover 이벤트
    const handleMouseOver = () => {
        if (window.innerWidth >= 1024) {
            setIsHovering(false);
        }
    };

    //hover 이벤트
    const handleMouseOut = () => {
        if (window.innerWidth >= 1024) {
            setIsHovering(true);
        }
    };
    
    return(
        <div className={`item ${name}`} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}
            onClick={onClick}
        >
            <div className="Photo">
                {isHovering?
                    <img src={`./img/icons/icon_${src}.png`} alt="아이콘"/>
                    :<p>{name}</p>
                }
            </div>
        </div>
    )
}

export default Photo;