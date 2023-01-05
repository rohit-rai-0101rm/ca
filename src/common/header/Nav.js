import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleRight } from "react-icons/fa";


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
                        <li><Link to="/how-it-works">How it works</Link></li>
                        <li><Link to="/why-india" >Why India</Link></li>
                        <li><Link>Pricing</Link></li>

                    </ul>
                </li>

                <li className="menu-item-has-children2">
                    <Link to="#">Hire Top Talent<FaAngleDown /></Link>
                    <ul className="axil-submenu2">
                        <li>Digital Marketers
                       
                            <ul className='axil-submenu3'>
                                <li>

                                    SEM && PPC Specialist
                                </li>
                                <li>

                                    SEO Specialist
                                </li>

                                <li>

                                    Programmatic Specialist
                                </li>


                            </ul>
                       



                        </li>



                    </ul>
                  
                 

                </li>


                <li className="menu-item-has-children">
                    <Link to="#">Services<FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to="/services/digital-marketing" >Digital Marketing </Link></li>
                        <li><Link to="/services/seo" >SEO</Link></li>
                        <li><Link to="/services/web-development">Web Development</Link></li>
                        <li><Link to="/services/design">Design</Link></li>

                    </ul>
                </li>





                <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;