import { useState,useEffect } from "react";
import axios from "axios";

const Project = () => {
    const [projects, setProjects] = useState([]);

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

    return(
        <div className="Project">
            <div className="project_wrap">
                <h2>PROJECT</h2>
                <div className="pjContainer">
                    {projects.map((project)=>(
                        <div className="pjBorder" key={project.id}>
                            <div className="pjInner">
                                <p>{project.title}</p>
                                <p>{project.intro}</p>
                                <div>
                                    <img src={`./img/projects/${project.img[0]}.jpg`} alt="프로젝트 이미지"/>
                                </div>
                                <div>
                                    {project.useSkill.map((skill, index)=>
                                        <span key={index}>#{skill}</span>
                                    )}
                                </div>
                                <div>
                                    {project.feature.map((feature, index)=>
                                        <span key={index}>{feature}</span>
                                    )}
                                </div>
                            </div>
                            <div className="borderBg"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project;