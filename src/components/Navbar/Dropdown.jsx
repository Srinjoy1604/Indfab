// Dropdown.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import styles from './Navbar.module.css';

function Dropdown({ name, items = [], dropdown = false, isSidebar = false }) {
    const [isDrop, setDrop] = useState(false);
    const toggleDropdown = () => setDrop(!isDrop);

    if (!dropdown || items.length === 0) {
        return (
            <li className={isSidebar ? styles.tabs : ''}>
                <Link to={items.length > 0 ? items[0].link : '/'}>{name}</Link>
            </li>
        );
    }

    return (
        <li className={isSidebar ? styles.tabsD : ''}>
            <div onClick={toggleDropdown}>
                {name} <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {isSidebar ? (
                !isDrop && (
                    <div className={styles.Dropdown}>
                        {items.map((item, index) => (
                            <div key={index}>
                                <Link to={item.link}>{item.name}</Link>
                            </div>
                        ))}
                    </div>
                )
            ) : (
                <div className={isDrop ? styles.Dropdownshow : styles.Dropdownhide}>
                    {items.map((item, index) => (
                        <div key={index}>
                            <Link to={item.link}>{item.name}</Link>
                        </div>
                    ))}
                </div>
            )}
        </li>
    );
}

export default Dropdown;
