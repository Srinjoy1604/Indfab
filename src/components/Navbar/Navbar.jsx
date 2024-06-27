import React, { useState, useEffect } from "react";
import styles from './Navbar.module.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import img1 from "../../images/Home/TRANSPARENT BACKGROUND(NEW).png";
import Dropdown from "./Dropdown"; // Import the Dropdown component

const menuData = [
    { name: "Home", link: "/", dropdown: false },
    { name: "Products & Services", link: "/products-services", dropdown: false },
    {
        name:"Manufacturing Unit",
        dropdown:true,
        items:[
            { name: "Our Manufacturing unit", link: "/manufacturing_unit" },
            { name: "Quality and Safety", link: "/" },

        ],
    },
    { name: "Clients", link: "/clients", dropdown: false },
    { name: "Project", link: "/project", dropdown: false },
    {
        name: "Company",
        dropdown: true,
        items: [
            { name: "About us", link: "/aboutus" },
            { name: "Indfab", link: "/indfab" },
            { name: "NALCONAGAR MSME", link: "/" },
            { name: "MERAMANDALI MSME", link: "/" },
            { name: "Certifications", link: "/" },
        ],
    },
    { name: "Contact us", link: "/contact-us", dropdown: false },
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
                <div className={styles.Logoimg}><img src={img1} alt="Logo" /></div>
                <ul>
                    {menuData.map((menuItem, index) => (
                        <Dropdown
                            key={index}
                            name={menuItem.name}
                            items={menuItem.items}
                            dropdown={menuItem.dropdown}
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
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
