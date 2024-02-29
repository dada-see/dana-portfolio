import { Link } from 'react-scroll';

const Header = () => {
    return (
        <div className="Header">
            <ul>
                <li>
                    <Link
                        to="Main"
                        spy={true}
                        smooth="true"
                        duration={500}
                    >
                        <p className='txt'>START !</p>
                        <p className='dot'>dot</p>
                    </Link>

                </li>
                <li>
                    <Link
                        to="MyInfo"
                        spy={true}
                        smooth="true"
                        duration={500}
                    >
                        <p className='txt'>PROFILE</p>
                        <p className='dot'>dot</p>
                    </Link>
                </li>
                <li>
                    <Link
                        to="MyProjects"
                        spy={true}
                        smooth="true"
                        duration={500}
                    >
                        <p className='txt'>PROJECTS</p>
                        <p className='dot'>dot</p>
                    </Link>
                </li>
                <li>
                    <Link
                        to="Contact"
                        spy={true}
                        smooth="true"
                        duration={500}
                    >
                        <p className='txt'>CONTACT</p>
                        <p className='dot'>dot</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;