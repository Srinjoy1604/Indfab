import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from "./Footer.module.css";
import logo from "../../images/Home/TRANSPARENT BACKGROUND(NEW).png";
import { HashLink } from 'react-router-hash-link';
function Footer() {
    return (
        <div className={`${styles.FooterMain}`}>
            <div className={`${styles.FooterMainInside}`}>
                <div className={`${styles.FooterList}`}>
                    <div className={`${styles.FooterItem}`}>
                        <h2>Company Insights</h2>
                        <ul>
                            <li><HashLink to="/aboutus#keyarea">Key Area</HashLink></li>
                            <li><HashLink to="/productsservices#achievments">Our Achievements</HashLink></li>
                            <li><HashLink to="/productsservices#Refurbish">Refurbishing Works</HashLink></li>
                            <li><HashLink to="/productsservices#ProcessWork">Our Process of Work</HashLink></li>
                            <li><HashLink to="/clients">Our Clients</HashLink></li>
                        </ul>
                    </div>
                    <div className={`${styles.FooterItem}`}>
                        <h2>Infrastructure</h2>
                        <ul>
                            <li><HashLink to="/manufacturing_unit#mainMachines">Main Machines</HashLink></li>
                            <li><HashLink to="/manufacturing_unit#OurWorkshops">Our Workshops</HashLink></li>
                            <li><HashLink to="/QualitySafety">Quality & Safety</HashLink></li>
                            <li><HashLink to="/certificate">Certifications</HashLink></li>
                        </ul>
                    </div>
                    <div className={`${styles.FooterItem} ${styles.LastGroup}`}>
                        <h2>More About Us</h2>
                        <ul>
                            <li><Link to="/aboutus">About us</Link></li>
                            <li><Link to="/MSME2">NALCO WORKSHOP</Link></li>
                            <li><Link to="/MSME1">MERAMANDALI WORKSHOP</Link></li>
                            <li><HashLink to="/contact">Contact us</HashLink></li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles.FooterTag}`}>
                    <div><img src={logo}></img></div>
                    <p>FCI road Nalco Nagar- 759145 Angul,Odisha,India</p>
                </div>
            </div>
            <div className={`${styles.FooterBottom}`}><p>&copy; {new Date().getFullYear()} Indfab, All rights reserved. | Developed by <a href="https://www.linkedin.com/in/srinjoy-roy-161003251/">Srinjoy Roy</a></p>
                {/*<p>designed by <a href="/">Srinjoy Roy</a></p>*/}
            </div>
        </div>
    );
}
export default Footer;