import React from "react";
import styles from './IntroPic.module.css';

function IntroPic({ image, text, style }) {
    const divStyle = {
        backgroundImage: `url(${image})`,
        ...style,
    };
    const h1text={
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        ...style
    }
    return (
        <div style={divStyle} className={styles.IntroMobile}>
            <h1 className={styles.h1text} style={h1text}>{text}</h1>
        </div>
    );
}

export default IntroPic;

