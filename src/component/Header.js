import { Link } from "react-scroll";

const Header = ({setIsDark, isDark}) => {
    const changeTheme = () => {
        setIsDark(prevIsDark => !prevIsDark);
    };

    return (
        <div className="Header">
            <div className="header_wrap">
                <div className="navBox">
                    <nav>
                        <Link                    
                            to="About"
                            spy={true}
                            smooth="true"
                            duration={500}
                        >
                            <span>A</span>
                            <span>b</span>
                            <span>o</span>
                            <span>u</span>
                            <span>t</span>
                        </Link>
                        <Link                   
                            to="Skills"
                            spy={true}
                            smooth="true"
                            duration={500}
                        >
                            <span>S</span>
                            <span>k</span>
                            <span>i</span>
                            <span>l</span>
                            <span>l</span>
                        </Link>
                        <Link                    
                            to="Project"
                            spy={true}
                            smooth="true"
                            duration={500}
                        >
                            <span>P</span>
                            <span>r</span>
                            <span>o</span>
                            <span>j</span>
                            <span>e</span>
                            <span>c</span>
                            <span>t</span>
                        </Link>
                    </nav>
                </div>
                <div className="mode" onClick={changeTheme}>
                    <span className="material-symbols-outlined">
                        {isDark? 'dark_mode' : 'light_mode'}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header;