import React from 'react';
import styles from './CustomCard2.module.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
const CustomCard2 = ({title,description,image,url}) => {
    return (
        <div className={`${styles.container}`}>

            <div className={`${styles.card}`}>
                <div className={`${styles.face} ${styles.face1}`}>
                    <div className={`${styles.content}`}>
                        <img src={image} alt="cardImage" />
                        <h3>{title}</h3>
                    </div>
                </div>
                <div className={`${styles.face} ${styles.face2}`}>
                    <div className={`${styles.content}`}>
                        <p>{description}</p>
                        <HashLink to={url} className={styles.readmore}>Read More</HashLink>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CustomCard2;
