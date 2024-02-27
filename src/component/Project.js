const Project = ({ pjNum, photo, projectTitle, typeProject, portfolioLink, gitLink, content, icon }) => {
    return (
        <div className={`Project ${pjNum}`}>
            <div className="project_wrap">
                <div className="photo">
                    {photo}
                </div> 
                <div className="titleBox">
                    <div className="title">
                        <h3>{projectTitle}</h3>
                        <p>{typeProject}</p>
                    </div>
                    <div className="linkBox">
                        <p className="portfolioLink">
                            <a href={portfolioLink} target="_blank" rel="noreferrer">
                                <span className="material-symbols-outlined">language</span>
                            </a>
                        </p>
                        <p className="portfolioGit">
                            <a href={gitLink} target="_blank" rel="noreferrer">
                                <span className="github_icon">git</span>
                            </a>
                        </p>
                    </div>
                </div>
                <div className="content">
                    {content}
                </div>
                <div className="skills_Icon">
                    <h3>Skills</h3>
                    {icon}
                </div>
            </div>
        </div>
    )
}

export default Project;