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
                            <a href={portfolioLink}>
                                <span className="material-symbols-outlined">language</span>
                            </a>
                        </p>
                        <p className="portfolioGit">
                            <a href={gitLink}>
                                <img src="./img/icons/icon_github_bk.png" alt="git" />
                            </a>
                        </p>
                    </div>
                </div>
                <div className="content">
                    {content}
                </div>
                <div className="skills_Icon">
                    {icon}
                </div>
            </div>
        </div>
    )
}

export default Project;