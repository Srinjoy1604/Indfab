import React from "react";
import styles from './IntroPic.module.css';
function IntroPic({ image, text,style }) {
    const divStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
        ...style,
    };
    const h1text={
        
        ...style
    }
    


    return (
        <div style={divStyle}>
            <h1 className={`${styles.h1text}`} style={h1text}>{text}</h1>
        </div>
    );
}

export default IntroPic;
