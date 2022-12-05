import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";


const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li className="menu-item-has-children">
                    <Link to="/">Home </Link>
               
                </li>
                <li className="menu-item-has-children">
                    <Link to="#">Why Dignifyd <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/about"}>About</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/how-it-works"}>How it works</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/service-details/design"}>Why India</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/service-details/design"}>Pricing</Link></li>

                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link to="#">Services<FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/about"}>Digital Marketing</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/how-it-works"}>SEO</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/services/web-development"}>Web Development</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/services/design"}>Design</Link></li>

                    </ul>
                </li>
            
               
             
                <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;