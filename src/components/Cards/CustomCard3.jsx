import React from 'react';
import styles from './CustomCard3.module.css';

const CustomCard3 = ({title,description,image}) => {
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
                   
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CustomCard3;