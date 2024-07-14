import React from "react";
import styles from "./CompanyLogo.module.css";

function Company({image})
{
    return(
        <div className={`${styles.CardMain}`}>
            <div><img src={image}></img></div>
        </div>
    );
}

export default Company;