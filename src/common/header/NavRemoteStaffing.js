import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import Dropdown from 'react-multilevel-dropdown';


const NavRemoteStaffing = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
            <li className="menu-item-has-children">
                    <Link to="#">Digital Marketers <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/hire-ppc-expert"}>SEM && PPC specialist</Link></li>
                        <li><Link to="/hire-seo-expert">SEO Specialist</Link></li>
                        <li><Link to="/programmatic-advertising" >Programmatic Specialist</Link></li>

                    </ul>
                </li>

                <li className="menu-item-has-children">
                    <Link to="#">Web Developers <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/hire-reactjs-developers"}>React Js</Link></li>
                        <li><Link to="/hire-angularjs-developers">Angular Js</Link></li>
                        <li><Link to="/hire-nodejs-developers" >Node js </Link></li>
                        <li><Link to="/hire-laravel-developers">Laravel Js</Link></li>

                        <li><Link to={process.env.PUBLIC_URL + "/hire-shopify-developers"}>Shopify Developer</Link></li>
                        <li><Link to="/hire-php-developers">PHP Developer</Link></li>
                        <li><Link to="/hire-wordpress-developers" >Wordpress Developer </Link></li>
                        <li><Link to="/hire-wordpress-plugin-developer">Wordpress Plugin Developer</Link></li>
                        <li><Link to="hire-wordpress-designer">Wordpress  Designer</Link></li>


                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link to="#">Designers <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/hire-graphic-designers"}>Graphics Designer</Link></li>
                        <li><Link to="/hire-ui-ux-designers">UI/UX Designer</Link></li>
                      

                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link to="#">Salesforce Expert <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/hire-salesforce-developer"}>Salesforce Developer</Link></li>
                        <li><Link to="/hire-salesforce-administrator">Salesforce Administrator</Link></li>
                        <li><Link to="/hire-salesforce-consultant" >Salesforce Consultant</Link></li>

                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link to="#">Software Developers <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/hire-java-developers"}>Java Developer</Link></li>
                        <li><Link to="/hire-python-developers">Python Developer</Link></li>
                        <li><Link to="/hire-dot-net-developers" >.NET Developer</Link></li>

                    </ul>
                </li>

                <li className="menu-item-has-children">
                    <Link to="#">Mobile App Developers <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/hire-ios-developers"}>ios Developer</Link></li>
                        <li><Link to="/hire-android-developers">Android Developer</Link></li>
                        <li><Link to="/hire-react-native-developers" >React Native Developer</Link></li>

                    </ul>
                </li>
            
            














            </ul>
        </nav>
    )
}

export default NavRemoteStaffing;