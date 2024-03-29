import { Link } from 'react-scroll';
import { CopyToClipboard, Text } from 'react-copy-to-clipboard';
import { Button } from '@mui/material';

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
                                <CopyToClipboard className="email" text="dn100210@gmail.com" onCopy={() => { alert('클립보드에 복사되었습니다.') }} >
                                    <text>dn100210@gmail.com
                                        <span className="material-symbols-outlined">
                                            content_copy
                                        </span>
                                    </text>

                                </CopyToClipboard>
                            </p>
                            <p>
                                <a href="https://github.com/dada-see?tab=repositories" target='_blank' rel="noreferrer">
                                    GITHUB
                                </a>
                            </p>
                            <p>
                                <a href="/" target='_blank'>
                                    RESUME
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="career">
                    <h3>Study</h3>
                    <p className="university">
                        <span className='date'>2023.02 ~ &nbsp;</span>
                        <span>한국방송통신대학교&nbsp;</span>
                        <span className='import'>컴퓨터 과학과</span>
                        <br/><br/>
                        <span className='date'>2023.09 ~ 2024.03 &nbsp;</span>
                        <span>반응형 웹 & 프론트엔드 개발 실무 양성 과정 수료</span>
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
                <div className="scrollDown">
                    <Link
                        to="MyProjects"
                        smooth="true"
                        duration={500}
                        className="material-symbols-outlined"
                    >Double_Arrow</Link>
                </div>
            </div>
        </div>
    )
}

export default MyInfo;