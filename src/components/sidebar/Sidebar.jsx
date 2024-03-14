import React from "react"; 
import './sidebar.css';
import Logo from "../../assets/logo.svg"

const Sidebar = () => {
    return (
        <aside className="aside">
            <a href="#home" className="nav__logo">
                <img src={Logo} alt="" />
            </a>
            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="icon-home"></i>
                            </a>
                        </li>
                        <li className="nav__link"><a href="#about" className="nav__link">
                                <i className="icon-user-following"></i>
                            </a></li>
                        <li className="nav__link"> <a href="#services" className="nav__link">
                                <i className="icon-briefcase"></i>
                            </a></li>
                        <li className="nav__link"><a href="#resume" className="nav__link">
                                <i className="icon-graduation"></i>
                            </a></li>
                        <li className="nav__link"><a href="#portfolio" className="nav__link">
                                <i className="icon-layers"></i>
                            </a></li>
                        <li className="nav__link"><a href="#blog" className="nav__link">
                            <i className="icon-note"></i>
                        </a></li>
                        <li className="nav__link"><a href="#contact" className="nav__link">
                            <i className="icon-bubble"></i>
                        </a></li>
                    </ul>
                </div>
            </nav>
            <div className="nav__footer">
                <spam className="copyright">&copy; 2023 - 2024</spam>
                <spam className="copyright">&copy; 2023 - 2024</spam>
            </div>
        </aside>
    )
}
export default Sidebar