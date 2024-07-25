import React from "react";
import styles from "./DescCard.module.css";
import { color, motion, useAnimation } from "framer-motion";
function DescCard({ image, desc }) {
    return (
        <motion.div className={styles.DescCardMain} style={{ backgroundImage: `url(${image})` }}
        whileHover={{ scale: 1.1 }}    
        >
            <p>{desc}</p>
        </motion.div>
    );
}

export default DescCard;
