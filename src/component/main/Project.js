import { useState,useEffect } from "react";
import axios from "axios";
import ProjectModal from "./ProjectModal";

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectProject, setSelectProject] = useState({}); 
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

    //모바일 화면 state 변경 함수
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1023);
    };

    //윈도우 사이즈 변경 이벤트
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    //프로젝트 json 파일 가져오기
    useEffect(() => {
        const getSkillList = () => {
            axios.get('/asset/ProjectList.json')
                .then((res) => {
                    setProjects(res.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        getSkillList();
    }, []);

    //닫힘버튼 함수 (모달창 열림/닫힘 & 열려있을 시에 원래 페이지 스크롤 방지)
    const handleModal = (index) => {
        if(openModal){
            document.body.style.overflow = 'auto';
            setOpenModal(false);
        } else{
            const selected = projects.find((project) => project.id === index);
            document.body.style.overflow = 'hidden';
            setSelectProject(selected);
            setOpenModal(true);
        }
    }
    


    return(
        <div className="Project">
            <div className="project_wrap">
                <h2>PROJECT</h2>
                <div className="pjContainer">
                    {projects.map((project)=>(
                        <div className="pjBorder" key={project.id}>
                            <div className="pjInner">
                                <div className="main_photo">
                                    <img src={`./img/projects/${project.img[0]}.jpg`} alt="프로젝트 이미지"/>
                                </div>
                                <div className="text">
                                    <h5 className="title">{project.title}</h5>
                                    <p className="intro">{project.intro}</p>
                                    <div className="usedSkill">
                                        {project.useSkill.map((skill, index)=>
                                            <span key={index}>#{skill} </span>
                                        )}
                                    </div>
                                    <div className="feature">
                                        {project.feature.map((feature, index)=>
                                            <span key={index}>{feature}</span>
                                        )}
                                    </div>
                                </div>
                                <div className={isMobile? 'btn_box': 'btn_box PC' }>
                                    <h5 style={isMobile? {display:"none"}: {display: "block"}}>{project.title}</h5>
                                    <p onClick={()=>handleModal(project.id)}>자세히 보기</p>
                                    <p>
                                        <a href={project.url[0]} target='_blank' rel="noreferrer" >
                                            Github {isMobile? '': '바로가기'}
                                        </a>
                                    </p>
                                    <p className="icon">
                                        <a href={project.url[1]} target="_blank" rel="noreferrer">
                                            {isMobile?
                                            <span className="material-symbols-outlined">
                                                link
                                            </span>
                                            : "사이트 바로가기"
                                            }
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {openModal && selectProject && 
                <ProjectModal project={selectProject} handleModal={handleModal} openModal={openModal} setOpenModal={setOpenModal}/>
            }
        </div>
    )
}

export default Project;