import ActiveLink from "../../hooks/ActiveLink/ActiveLink";


const NavBar = () => {
    return (
        <nav>
            <div className="navbar bg-transparent">


                <div className="navbar-start">
                    <div className="dropdown">
                        <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><ActiveLink>Home</ActiveLink></li>
                            <li><ActiveLink> Portfolio </ActiveLink></li>
                            <li><ActiveLink>About</ActiveLink></li>
                            {/* <li><ActiveLink>About</ActiveLink></li> */}
                            <li><ActiveLink>Contact</ActiveLink></li>
                            <li><ActiveLink>Resume</ActiveLink></li>
                            <li><ActiveLink>Cover letter</ActiveLink></li>

                        </ul>
                    </div>
                    <a className=" text-3xl font-bold"><p>Sayhan</p></a>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects"> Projects </a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li tabIndex="0">
                            <details>
                                <summary>Documents</summary>
                                <ul className="p-2">
                                    <li><a>Resume</a></li>
                                    <li><a>Cover</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="btn btn-warning normal-case">Hire Me</div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;