import React from "react";
import styles from './IntroPic.module.css';
function IntroPic({ image, text }) {
    const divStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    };

    return (
        <div style={divStyle}>
            <h1 className={`${styles.h1text}`}>{text}</h1>
        </div>
    );
}

export default IntroPic;
