import { useState, useEffect } from "react";
import Photo from "../Photo";
import axios from "axios";

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [viewModal, setViewModal] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState({}); 

    useEffect(() => {
        const getSkillList = () => {
            axios.get('/asset/SkillList.json')
                .then((res) => {
                    setSkills(res.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        getSkillList();
    }, []);

    const handleModal = (index) => {
        const selected = skills.find((skill) => skill.id === index);
        setSelectedSkill(selected);
        setViewModal(true);
    }

    return(
        <div className="Skills">
            <div className="skills_wrap">
                <h2>SKILL</h2>
                <div className="grid_wrap">
                    <div className="container">
                        { selectedSkill && viewModal ?
                            <div className="modal">
                                <div className="modal_content">   
                                    <h3>{selectedSkill.name}</h3>
                                    <p className="icon_img"><img src={`./img/icons/icon_${selectedSkill.src[0]}.png`} alt="아이콘"/></p>
                                    <div className="content_box">
                                        {selectedSkill.poss.map((text, index)=>(
                                            <p className={`skill_content ${index}`} key={index}>📌 {text}</p>
                                        ))}
                                    </div>
                                </div>
                                <span className="close" onClick={()=>setViewModal(false)}>&times;</span>
                            </div>
                            : 
                            skills.map((skill, index) => (
                                <Photo key={index} src={skill.src[0]} name={skill.name} onClick={() => handleModal(index)} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;