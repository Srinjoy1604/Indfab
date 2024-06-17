import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from "./Footer.module.css";
import logo from "../../images/Home/logo.png";
function Footer() {
    return (
        <div className={`${styles.FooterMain}`}>
            <div className={`${styles.FooterMainInside}`}>
                <div className={`${styles.FooterList}`}>
                    <div className={`${styles.FooterItem}`}>
                        <h2>KEY SERVICES</h2>
                        <ul>
                            <li><Link to="/">Aluminium Busbar</Link></li>
                            <li><Link to="/">Structural Steel Work</Link></li>
                            <li><Link to="/">Equipment Fabrication</Link></li>
                            <li><Link to="/">Manufacturing/Supply</Link></li>
                        </ul>
                    </div>
                    <div className={`${styles.FooterItem}`}>
                        <h2>PROJECT EXECUTED</h2>
                        <ul>
                            <li><Link to="/">HINDALCO GROUP</Link></li>
                            <li><Link to="/">TATA Steel</Link></li>
                            <li><Link to="/">NALCO</Link></li>
                            <li><Link to="/">NTPC</Link></li>
                            <li><Link to="/">VEDANTA,Jharsuguda</Link></li>
                            <li><Link to="/">IREL,Chatrapur,Odisha</Link></li>
                            <li><Link to="/">BARC,Mumbai</Link></li>
                            <li><Link to="/">JSPL,ODISHA</Link></li>
                        </ul>
                    </div>
                    <div className={`${styles.FooterItem} ${styles.LastGroup}`}>
                        <h2>GROUP COMPANIES</h2>
                        <ul>
                            <li><Link to="/">INDFAB</Link></li>
                            <li><Link to="/">PALIT EQUIPMENT SALES</Link></li>

                        </ul>
                    </div>
                </div>
                <div className={`${styles.FooterTag}`}>
                    <div><img src={logo}></img></div>
                    <h1>Indfab Projects Private Limited</h1>
                    <p>FCI road Nalco Nagar- 759145 Angul,Odisha,India</p>
                </div>
            </div>
            <div className={`${styles.FooterBottom}`}><p>&copy; 2024 Indfab Projects Private Limited,All rights reserved.</p>
                {/*<p>designed by <a href="/">Srinjoy Roy</a></p>*/}
            </div>
        </div>
    );
}
export default Footer;