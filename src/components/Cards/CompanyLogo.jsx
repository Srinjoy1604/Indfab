import React from "react";
import styles from "./CompanyLogo.module.css";
import { color, motion } from "framer-motion";
function Company({image})
{
    return(
        <motion.div className={`${styles.CardMain}`}
        whileHover={{ scale: 1.1 }}    
        >
            <div><img src={image}></img></div>
        </motion.div>
    );
}

export default Company;