import { Link } from 'react-scroll';

const MyInfo = () => {
    return (
        <div className="MyInfo" id="MyInfo">
            <div className="MyInfo_wrap">
                <h1>Frontend</h1>
                <div className="profile">
                    <p className="photo">
                        <img src="./img/profile.jpg" alt="myphoto" />
                    </p>
                    <div>
                        <p className="name">이다나</p>
                        <div className="myLink">
                            <p>
                                <a href="/">
                                    dn100210@gmail.com
                                </a>
                            </p>
                            <p>
                                <a href="https://github.com/dada-see?tab=repositories">
                                    GITHUB
                                </a>
                            </p>
                            <p>
                                <a href="/">
                                    RESUME
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="career">
                    <h3>Career</h3>
                    <p className="university">
                        <span>2023.02 ~ &nbsp;</span>
                        <span>한국방송통신대학교&nbsp;</span>
                        <span>컴퓨터 과학과</span>
                    </p>
                </div>
                <div className="skills">
                    <h3>Skills</h3>
                    <div className="skillsTxt">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>SCSS</p>
                        <p>React</p>
                        <p>JavaScript</p>
                        <p>TypeScript</p>
                        <p>node.js</p>
                        <p>JQuery</p>
                        <p>MySQL</p>
                        <p>Styled-Component</p>
                        <p>GitHub</p>
                        <p>Figma</p>
                    </div>
                </div>
                <Link 
                    to="MySkills" 
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

export default MyInfo;