import styles from './Intro.module.css';
import React from "react";
import Carousel from './Carousel';


function Intro() {


    return (
        <div className={`${styles.Maindash}`}>
            <Carousel />
        </div>
    );
};

export default Intro;
