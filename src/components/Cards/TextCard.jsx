import React from "react";
import img1 from "../../images/Quality_&_Safety/EDITED1.png";
import styles from "./TextCard.module.css";
import { motion } from "framer-motion";
function TextCard({text})
{
    return(
        <motion.div className={`${styles.TextCardMain}`}
        whileInView={{ scale: 1,opacity:1 }} 
        initial={{ scale: 0 ,opacity:0}}
        viewport={{ once: true }}
        transition={{duration:0.5,ease:"easeInOut"}}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.5 }}
        > 
            <div className={`${styles.TextCardImg}`}><img src={img1}></img></div>
            <p>
                {text}
            </p>
        </motion.div>
    );
}

export default TextCard;