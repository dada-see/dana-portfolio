import { useState } from "react";
import Button from "../component/Button"
import { Link } from 'react-scroll';

const MySkills = () => {
    const [btnToggle, setBtnToggle] = useState(true);
    const handleBtn = () => {
        setBtnToggle(!btnToggle);
    }

    return (
        <div className="MySkills" id="MySkills">
            <div className="mySkills_wrap">
                <div className="btn_box">
                    <Button
                        btnName={btnToggle ? 'select' : ''}
                        btnText={'FRONTEND'}
                        click={handleBtn} />
                    <Button
                        btnName={btnToggle ? '' : 'select'}
                        btnText={'ETC.'}
                        click={handleBtn} />
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

export default MySkills;