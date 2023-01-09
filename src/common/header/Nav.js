import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import Dropdown from 'react-multilevel-dropdown';


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
                <li className='menu-item-has-children'>
                    <Dropdown

                        openOnHover="true"
                        title='Dedicated Resources'

                    >
                        <Dropdown.Item className='axil-submenu2'>
                            Digital Marketers <FaAngleRight />

                            <Dropdown.Submenu position="right">
                                <Link to="/hire-ppc-expert">
                                </Link>

                                    <div className='biggerbox'>
                                    <Dropdown.Item>
                                        SEM && PPC specialist
                                    </Dropdown.Item>

                                <Dropdown.Item>
                                    SEO Specialist                            </Dropdown.Item>
                                <Dropdown.Item>
                                    Programmatic Specialist                            </Dropdown.Item>
                                    </div>
                                    
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Web Developers   <FaAngleRight />      <Dropdown.Submenu position="right">
                                <Dropdown.Item>
                                    React JS
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Angular JS
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Node JS
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Laravel JS                            </Dropdown.Item>
                                <Dropdown.Item>
                                    Shopify        Developer                    </Dropdown.Item>
                                <Dropdown.Item>
                                    PHP        Developer
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Wordpress Developer                            </Dropdown.Item>
                                <Dropdown.Item>
                                    Wordpress Plugin Developer                              </Dropdown.Item>
                                <Dropdown.Item>
                                    Wordpress Designer                             </Dropdown.Item>

                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Designers     <FaAngleRight />                     <Dropdown.Submenu position="right">
                                <Dropdown.Item>
                                    Graphics Designers                            </Dropdown.Item>
                                <Dropdown.Item>
                                    UX/UI Designer                           </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Salesforce Expert  <FaAngleRight />                        <Dropdown.Submenu position="right">
                                <Dropdown.Item>
                                    Salesforce Developer
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Salesforce Administrator
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Salesforce Consultant
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Software Developers <FaAngleRight />                       <Dropdown.Submenu position="right">
                                <Dropdown.Item>
                                    Java Developer                            </Dropdown.Item>
                                <Dropdown.Item>
                                    Python Developer                            </Dropdown.Item>
                                <Dropdown.Item>
                                    .NET Developer                            </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Mobile App Developers  <FaAngleRight />                         <Dropdown.Submenu position="right">
                                <Dropdown.Item>
                                    ios Developer
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Android Developer
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    React Native Developer
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                    </Dropdown>
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