import CopyToClipboard from "react-copy-to-clipboard";
import { ReactTyped } from "react-typed";

const About = () => {
    return(
        <div className="About" id="About">
            <div className="about_wrap">
                <div className="main_box">
                    <div className="title">
                        <p>안녕하세요, 저는</p>
                        <ReactTyped
                            strings={[ "웹 개발자", "프론트엔드 개발자", "리액트 개발자"]}
                            typeSpeed={70}
                            backSpeed={40}
                            loop
                            style={{
                                fontSize: "22px"
                            }}
                        />
                        <p>입니다.</p>
                        <p className="sub">소통과 새로운 도전을 망설이지 않는 개발자 <span>이다나</span>입니다.</p>
                    </div>
                    <div className="photo">
                        <img src="./img/profile.jpg" alt="프로필 사진" />
                    </div>
                    <div className="contact_box">
                        <div className="text" onClick={()=>window.location.href = `tel:010-5484-6446`}>
                            <p>010 - 5484 - 6446</p>
                        </div>
                        <CopyToClipboard className="email round" text="dn100210@gmail.com" onCopy={() => alert('클립보드에 복사되었습니다.')}>
                            <div>
                                <p className="material-symbols-outlined">
                                    mail
                                </p>
                            </div>
                        </CopyToClipboard>
                        <div className="round">
                            <a href="https://github.com/dada-see?tab=repositories" target='_blank' rel="noreferrer" >
                                <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="info_box">  
                    <h2>Education</h2>
                    <div className="school">
                        <p className="date">2023.02 -</p>
                        <p className="what">한국방송통신대학교 컴퓨터과학과</p>
                        <ul>
                            <li>자료구조, 컴퓨터 과학개론, 데이터베이스, 알고리즘 등 학습</li>
                            <li>HTML, CSS, C언어 프로그래밍 언어 학습</li>
                        </ul>
                    </div>
                    <div className="academy">
                        <p className="date">2023.09 - 2024.03</p>
                        <p className="what">반응형 웹 & 프론트엔드 개발 실무 양성 과정 수료</p>
                        <ul>
                            <li>HTML, CSS, JQuery, JavaScript, React등 학습</li>
                            <li>약 6개월간 개인 프로젝트 5회, 협업 프로젝트 1회 진행</li>
                            <li>협업 프로젝트 리더로서 업무 분배 및 서포트</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;