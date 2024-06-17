import React from "react";
import styles from "./CustomCard.module.css";
import { motion } from "framer-motion";
import office from "../../pages/Office_detail.json"; // Ensure this path is correct

function CustomCard({ heading, description, link, tabular }) {
    return (
        <motion.div
            className={styles.cardMain}
            whileHover={{
                scale: 1.15,
                transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
        >
            <h1><div className={styles.cardHeading}>{heading}</div></h1>
            <div className={styles.cardBody}>
                {tabular ? (
                    <div className={styles.tableData}>
                        <ul>
                            {office.map((item, index) => (
                                <li key={index}>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>{description}</p>
                )}
                <div className={styles.cardLinkDiv}>
                    <div className={styles.cardLink}>
                        <a href={link}>Explore More</a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default CustomCard;

