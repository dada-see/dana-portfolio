import { Link } from 'react-scroll';

const Header = () => {
    return (
        <div className="Header">
            <ul>
                <li>
                    <Link
                        to="Main"
                        smooth="true"
                        duration={500}
                    >
                        START
                    </Link>
                </li>
                <li>
                    <Link
                        to="MyInfo"
                        smooth="true"
                        duration={500}
                    >
                        PROFILE
                    </Link>
                </li>
                <li>
                    <Link
                        to="MyProjects"
                        smooth="true"
                        duration={500}
                    >
                        PROJECTS
                    </Link>
                </li>
                <li>
                    <Link
                        to="Contact"
                        smooth="true"
                        duration={500}
                    >
                        CONTACT
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;