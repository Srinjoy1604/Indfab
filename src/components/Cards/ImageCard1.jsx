import React from "react";
import styles from "./ImageCard1.module.css";

function ImageCard1({ image, desc }) {
    return (
        <div className={`${styles.CardMain}`}>

            <div className={`${styles.CardImage}`}>

                <img src={image}></img>
            </div>
            <div className={`${styles.CardDesc}`}><p>{desc}</p></div>

        </div>
    );
}

export default ImageCard1;