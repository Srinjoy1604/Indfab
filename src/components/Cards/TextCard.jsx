import React from "react";
import img1 from "../../images/Quality_&_Safety/EDITED1.png";
import styles from "./TextCard.module.css";
function TextCard({text})
{
    return(
        <div className={`${styles.TextCardMain}`}> 
            <div className={`${styles.TextCardImg}`}><img src={img1}></img></div>
            <p>
                {text}
            </p>
        </div>
    );
}

export default TextCard;