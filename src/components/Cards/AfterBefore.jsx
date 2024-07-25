import React from "react";
import styles from "./AfterBefore.module.css";
import { color, motion, useAnimation } from "framer-motion";
function AfterBefore({ image1, image2, name }) {
    return (
        <motion.div className={`${styles.CardMain}`}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1, }}
        >
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
        </motion.div>
    );
}

export default AfterBefore;