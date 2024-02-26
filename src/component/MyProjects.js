import Slider from "react-slick";
import Project from "./Project";
import { Link } from 'react-scroll';



const MyProjects = () => {
    const settings = {
        // className: "center",
        arrows: false,
        // centerMode: true,
        infinite: false,
        // centerPadding: "60px",
        slidesToShow: 1,
        // speed: 500
    };

    return (
        <div className="MyProjects" id="MyProjects">
            <div className="myProjects_wrap">
                <h1>Projects</h1>
                <div className="projectBox">
                    {/* <Slider {...settings}> */}
                        <Project
                            pjNum={'pj1'}
                            photo={
                                <>
                                    <img src="./img/projects/pj1_1.jpg" alt="petdoc1" />
                                    <img src="./img/projects/pj1_2.jpg" alt="petdoc2" />
                                    <img src="./img/projects/pj1_3.jpg" alt="petdoc3" />
                                </>
                            }
                            projectTitle={'Petdoc'}
                            typeProject={'팀 프로젝트'}
                            portfolioLink={'https://petdoc-1fd2a.web.app/'}
                            gitLink={'https://github.com/dada-see/petdoc'}
                            content={
                                <>
                                    <p>React 사용</p>
                                    <p>네이버 지도 api 활용</p>
                                    <p>React Sikck 라이브러리 활용</p>
                                    <p>Styled-Component 활용</p>
                                    <p>반려동물 데이터 생성, 삭제, 수정</p>
                                </>
                            }
                            icon={
                                <>
                                    <p className="html_icon">HTML</p>
                                    <p className="css_icon">CSS</p>
                                    <p className="react_icon">React</p>
                                    <p className="figma_icon">Figma</p>
                                </>
                            }
                        />
                        <Project
                            pjNum={'pj2'}
                            photo={
                                <>
                                    <img src="./img/projects/pj2.jpg" alt="mujagi" />
                                </>
                            }
                            projectTitle={'Mujagi'}
                            typeProject={'개인 프로젝트'}
                            portfolioLink={'https://tubular-cendol-e7cebe.netlify.app/'}
                            gitLink={'https://github.com/dada-see/mujagi'}
                            content={
                                <>
                                    <p>반응형 웹 페이지</p>
                                    <p>JQuery로 동적인 페이지 구현</p>
                                    <p>Slick 라이브러리 사용</p>
                                </>
                            }
                            icon={
                                <>
                                    <p className="html_icon">HTML</p>
                                    <p className="css_icon">CSS</p>
                                    <p className="jquery_icon">JQuery</p>
                                    <p className="figma_icon">Figma</p>
                                </>
                            }
                        />
                        <Project
                            pjNum={'pj3'}
                            photo={
                                <>
                                    <img src="./img/projects/pj3.jpg" alt="bookstore" />
                                </>
                            }
                            projectTitle={'영풍문고'}
                            typeProject={'개인 프로젝트'}
                            portfolioLink={'https://ypbook.netlify.app/'}
                            gitLink={'https://github.com/dada-see/ypBook'}
                            content={
                                <>
                                    <p>반응형 웹 페이지</p>
                                </>
                            }
                            icon={
                                <>
                                    <p className="html_icon">HTML</p>
                                    <p className="css_icon">CSS</p>
                                    <p className="figma_icon">Figma</p>
                                </>
                            }
                        />
                        <Project
                            pjNum={'pj4'}
                            photo={
                                <>
                                    <img src="./img/projects/pj4.jpg" alt="ulsantour" />
                                </>
                            }
                            projectTitle={'울산 관광'}
                            typeProject={'개인 프로젝트'}
                            portfolioLink={'https://ulsantour.netlify.app/'}
                            gitLink={'https://github.com/dada-see/ulsanTour'}
                            content={
                                <>
                                    <p>고정형 웹 페이지</p>
                                </>
                            }
                            icon={
                                <>
                                    <p className="html_icon">HTML</p>
                                    <p className="css_icon">CSS</p>
                                    <p className="figma_icon">Figma</p>
                                </>
                            } import
                        />
                        <Project
                            pjNum={'pj5'}
                            photo={
                                <>
                                    <img src="./img/projects/pj5.jpg" alt="bose" />
                                </>
                            }
                            projectTitle={'Bose'}
                            typeProject={'개인 프로젝트'}
                            portfolioLink={'https://timely-biscochitos-83a12b.netlify.app/'}
                            gitLink={'https://github.com/dada-see/bose'}
                            content={
                                <>
                                    <p>고정형 웹 페이지</p>
                                    <p>JQuery로 동적인 페이지 구현</p>
                                </>
                            }
                            icon={
                                <>
                                    <p className="html_icon">HTML</p>
                                    <p className="css_icon">CSS</p>
                                    <p className="jquery_icon">JQuery</p>
                                    <p className="figma_icon">Figma</p>
                                </>
                            }
                        />
                    {/* </Slider> */}
                </div>
                <div className="scrollDown">
                    <Link
                        to="Contact" 
                        smooth="true"
                        duration={500}
                        className="material-symbols-outlined"
                    >Double_Arrow</Link>
                </div>
            </div>
        </div>
    )
}

export default MyProjects;