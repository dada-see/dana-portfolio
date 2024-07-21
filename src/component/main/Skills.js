import { useState, useEffect, useContext, useRef } from "react";
import Photo from "../Photo";
import axios from "axios";
import { DarkMode } from "../../App";

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [viewModal, setViewModal] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState({}); 
    const isDark = useContext(DarkMode);
    const modalRef = useRef();

    //skill json 파일 불러오기
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

    //스킬 모달창 select state 변경과 창 열기
    const handleModal = (index) => {
        const selected = skills.find((skill) => skill.id === index);
        setSelectedSkill(selected);
        setViewModal(true);
    }

    // 모달 외부 클릭 시 모달 닫기
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setViewModal(false);
            }
        };

        if (viewModal) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [viewModal]);

    return(
        <div className="Skills">
            <div className="skills_wrap">
                <h2>SKILL</h2>
                <div className="grid_wrap">
                    <div className={isDark? "container" : "container dark"}>
                        { selectedSkill && viewModal ?
                            <div className="modal" ref={modalRef}>
                                <div className="modal_content">   
                                    <h3>{selectedSkill.name}</h3>
                                    <p className="icon_img">
                                        <img src={`./img/icons/icon_${isDark? selectedSkill.src[0]: selectedSkill.src[1]}.png`} alt="아이콘"/>
                                    </p>
                                    <div className="content_box">
                                        {selectedSkill.poss.map((text, index)=>(
                                            <p className={`skill_content ${index}`} key={index}>📌 &nbsp; {text}</p>
                                        ))}
                                    </div>
                                </div>
                                <span className="close" onClick={()=>setViewModal(false)}>&times;</span>
                            </div>
                            : 
                            skills.map((skill, index) => (
                                <Photo key={index} src={isDark?skill.src[0]: skill.src[1]} name={skill.name} onClick={() => handleModal(index)}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;