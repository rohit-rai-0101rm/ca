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
                        <li><Link>How it works</Link></li>
                        <li><Link >Why India</Link></li>
                        <li><Link>Pricing</Link></li>

                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link to="#">Services<FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link >Digital Marketing</Link></li>
                        <li><Link >SEO</Link></li>
                        <li><Link >Web Development</Link></li>
                        <li><Link >Design</Link></li>

                    </ul>
                </li>
            
               
             
                <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;