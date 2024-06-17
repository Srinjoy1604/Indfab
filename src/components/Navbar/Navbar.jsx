import React, { useState,useEffect } from "react";
import styles from './Navbar.module.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import img1 from "../../images/Home/logo-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
    const [isActive, setActive] = useState("false");
    const [isDrop1, setDrop1] = useState("false");
    const [isDrop11, setDrop11] = useState("false");
    const [isSticky, setSticky] = useState(false);
    const ham = () => {
        setActive(!isActive);
    };
    const drop1 = () => {
        setDrop1(!isDrop1);
    }
    const drop11 = () => {
        setDrop11(!isDrop11);
    }
    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.main} ${isSticky ? styles.sticky : ''}`}>

            <div className={`${styles.Topnav}`}>
                <div className={isActive ? `${styles.hamburger} ` : `${styles.hamburger} ${styles.isactive}`} onClick={ham}>
                    <span className={isActive ? `${styles.line}` : `${styles.line} ${styles.isactive}`}></span>
                    <span className={isActive ? `${styles.line}` : `${styles.line} ${styles.isactive}`}></span>
                    <span className={isActive ? `${styles.line}` : `${styles.line} ${styles.isactive}`}></span>
                </div>
                <div className={`${styles.Logoimg}`}><img src={img1}></img></div>
                <ul >

                    <li><Link to="/">Home</Link></li>
                    <li>Products & Services</li>
                    <li>Manufacturing Unit</li>
                    <li>Clients</li>
                    <li>Project</li>
                    <li onClick={drop1}><button >Company <FontAwesomeIcon icon={faCaretDown} /></button>
                        <div className={isDrop1 ? `${styles.Dropdownhide}` : `${styles.Dropdownshow}`}>
                            <div><Link to="/aboutus">About us</Link></div>
                            <div><a>Indfab</a></div>
                            <div><a>Palit Equipment sales</a></div>
                            <div><a>Certificates</a></div>
                        </div>

                    </li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className={isActive ? `${styles.sidebar} ` : `${styles.sidebar} ${styles.navactive}`}>
                <ul className={`${styles.tabs1}`}>
                    <li><Link to="/" className={`${styles.tabs}`}> Home</Link></li>
                    <li><a className={`${styles.tabs}`}> Products & Services</a></li>
                    <li><a className={`${styles.tabs}`}> Manufacturing Unit</a></li>
                    <li><a className={`${styles.tabs}`}> Clients</a></li>
                    <li><a className={`${styles.tabs}`}>Project</a></li>
                    <li onClick={drop11} className={`${styles.tabsD}`}><div>Company <FontAwesomeIcon icon={faCaretDown} /></div>

                        {!isDrop11 && (<div className={`${styles.Dropdown}`}>
                            <div><Link to="/aboutus">About us</Link></div>
                            <div><a>Indfab</a></div>
                            <div><a>Palit Equipment sales</a></div>
                            <div><a>Certificates</a></div>
                        </div>)}

                    </li>
                    <li><a className={`${styles.tabs}`}>Contact us</a></li>

                </ul>
            </div>
        </div>

    );
}

export default Navbar;