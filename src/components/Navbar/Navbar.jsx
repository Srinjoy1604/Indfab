import React, { useState, useEffect } from "react";
import styles from './Navbar.module.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import img1 from "../../images/Home/TRANSPARENT BACKGROUND(NEW).png";
import Dropdown from "./Dropdown"; // Import the Dropdown component

const menuData = [
    { name: "Home", link: "/", dropdown: false },
    { name: "Products & Services", link: "/productsservices", dropdown: false },
    {
        name: "Manufacturing Unit",
        dropdown: true,
        items: [
            { name: "Our Manufacturing unit", link: "/manufacturing_unit" },
            { name: "Quality and Safety", link: "/QualitySafety" },
        ],
    },
    { name: "Clients", link: "/clients", dropdown: false },
    
    {
        name: "Company",
        dropdown: true,
        items: [
            { name: "About us", link: "/aboutus" },
            { name: "Nalconagar MSME", link: "/MSME2" },
            { name: "Meramandali MSME", link: "/MSME1" },
            { name: "Certifications", link: "/certificate" },
        ],
    },
    { name: "Contact", link: "/contact", dropdown: false },
    
];

function Navbar() {
    const [isActive, setActive] = useState(false);
    const [isSticky, setSticky] = useState(false);

    const toggleHamburger = () => setActive(!isActive);

    const handleScroll = () => {
        setSticky(window.pageYOffset > 0);
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
                <div className={`${styles.hamburger} ${isActive ? styles.isactive : ''}`} onClick={toggleHamburger}>
                    <span className={`${styles.line} ${isActive ? styles.isactive : ''}`}></span>
                    <span className={`${styles.line} ${isActive ? styles.isactive : ''}`}></span>
                    <span className={`${styles.line} ${isActive ? styles.isactive : ''}`}></span>
                </div>
                <div className={styles.Logoimg}><Link to="/"><img src={img1} alt="Logo" /></Link></div>
                <ul>
                    {menuData.map((menuItem, index) => (
                        <Dropdown
                            key={index}
                            name={menuItem.name}
                            items={menuItem.items}
                            dropdown={menuItem.dropdown}
                            link={menuItem.link}  // Pass the link property here
                        />
                    ))}
                </ul>
            </div>
            <div className={`${styles.sidebar} ${isActive ? styles.navactive : ''}`}>
                <ul className={styles.tabs1}>
                    {menuData.map((menuItem, index) => (
                        <Dropdown
                            key={index}
                            name={menuItem.name}
                            items={menuItem.items}
                            dropdown={menuItem.dropdown}
                            isSidebar={true}
                            link={menuItem.link}  
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;

