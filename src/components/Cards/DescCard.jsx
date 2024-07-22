import React from "react";
import styles from "./DescCard.module.css";

function DescCard({ image, desc }) {
    return (
        <div className={styles.DescCardMain} style={{ backgroundImage: `url(${image})` }}>
            <p>{desc}</p>
        </div>
    );
}

export default DescCard;
