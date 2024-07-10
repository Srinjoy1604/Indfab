import React from "react";
import styles from "./AfterBefore.module.css";

function AfterBefore({ image1, image2, name }) {
    return (
        <div className={`${styles.CardMain}`}>
            <div className={`${styles.CardStatusDiv}`}>
                <img src={image1}></img>
                <div className={`${styles.CardStatus}`}>Before</div>
            </div>
            <div>
                <h1>{name}</h1>
            </div>
            <div className={`${styles.CardStatusDiv2}`}>
                <img src={image2}></img>
                <div className={`${styles.CardStatus2}`}>After</div>
            </div>
        </div>
    );
}

export default AfterBefore;