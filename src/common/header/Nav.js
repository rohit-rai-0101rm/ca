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
                                        <Link to="/hire-ppc-expert">
                                        SEM && PPC specialist

                                        </Link>
                                    </Dropdown.Item>

                                <Dropdown.Item>
                                    <Link to="/hire-seo-expert">   SEO Specialist   </Link>
                                    </Dropdown.Item>
                                <Dropdown.Item> 
                                  <Link to="/programmatic-advertising">  Programmatic Specialist </Link>                           </Dropdown.Item>
                                    </div>
                                    
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Web Developers   <FaAngleRight />      <Dropdown.Submenu position="right">
                                <Dropdown.Item>
                                  <Link to="/hire-reactjs-developers">  React JS</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                   <Link to="/hire-angularjs-developers"> Angular JS</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/hire-nodejs-developers">   Node JS</Link>
                                 
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to= "/hire-laravel-developers">    Laravel JS   </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/hire-shopify-developers"> Shopify        Developer  </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/hire-php-developers">   PHP        Developer</Link>
                                 
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/hire-wordpress-developers">
                                        Wordpress Developer

                                    </Link>




                                </Dropdown.Item>
                                <Dropdown.Item>

                                    <Link to="/hire-wordpress-plugin-developer">
                                        Wordpress Plugin Developer
                                    </Link>
                                </Dropdown.Item>

                                <Link to="/hire-wordpress-designer">
                                    <Dropdown.Item>
                                        <Link to="/hire-wordpress-designer">Wordpress Designer </Link>
                                    </Dropdown.Item>
                                </Link>


                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Designers     <FaAngleRight />                     <Dropdown.Submenu position="right">
                                <Dropdown.Item>
                                    <Link to="/hire-graphic-designers">    Graphics Designers </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to ="/hire-ui-ux-designers">   UX/UI Designer  </Link>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Salesforce Expert  <FaAngleRight />                        <Dropdown.Submenu position="right">
                                <Dropdown.Item>
                                    <Link to ="/hire-salesforce-developer">  Salesforce Developer</Link>
                                  
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/hire-salesforce-administrator">        Salesforce Administrator</Link>
                                    
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to ="/hire-salesforce-consultant">    Salesforce Consultant</Link>
                                
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Software Developers <FaAngleRight />                       <Dropdown.Submenu position="right">
                                <Dropdown.Item>
                                    <Link to="/hire-java-developers"> Java Developer  </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to ="/hire-python-developers">  Python Developer </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/hire-dot-net-developers">   .NET Developer    </Link>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Mobile App Developers  <FaAngleRight />                         <Dropdown.Submenu position="right">
                                <Dropdown.Item>
                                    <Link to="/hire-ios-developers"> ios Developer</Link>
                                   
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/hire-android-developers">  Android Developer</Link>
                                  
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/hire-react-native-developers">  React Native Developer</Link>
                                  
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