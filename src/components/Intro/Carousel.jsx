import React, { useEffect, useState } from "react";

import styles from './Carousel.module.css';
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
function Carousel({image}) {
    const images = image;
    const [current, setCurrent] = useState(0);
    const [autoplay,setAutoplay]= useState(true);
    let timeout=null;
    useEffect(()=>{
        timeout= autoplay && setTimeout(()=>{
            slideRight();
        },3500);
    });
    const slideRight = () => {
        if (current === images.length - 1) {
            setCurrent(0);
        }
        else {
            setCurrent(current + 1);
        }

    };
    const slideLeft = () => {
        if (current === 0) {
            setCurrent(images.length -1);
        }
        else {
            setCurrent(current - 1);
        }
    };
    return (
        <div className={`${styles.Carousel}`} onMouseEnter={()=>{setAutoplay(false);
            clearTimeout(timeout);
        }} onMouseLeave={()=>{setAutoplay(true)}}>
            <div className={`${styles.carousel_wrapper}`}>
                {images.map((image, index) => (
                    <div key={index} className={index == current ? `${styles.carousel_card} ${styles.carousel_card_active}` : `${styles.carousel_card}`}>
                        <img src={image} alt={`Slide ${index + 1}`} className={`${styles.carousel_img}`} />
                    </div>
                ))}
                <div className={`${styles.carousel_arrow_left}`} onClick={slideLeft}><MdNavigateBefore /></div>
                <div className={`${styles.carousel_arrow_right}`} onClick={slideRight}><MdNavigateNext /></div>
                <div className={`${styles.carousel_pagination}`}>
                    {images.map((_,index)=>{
                        return(
                        <div key={index} className={index == current ? `${styles.pagination_dot} ${styles.pagination_dot_active}` : `${styles.pagination_dot}`} onClick={()=>{setCurrent(index)}}></div>)
                    })}
                </div>
            </div>
        </div>
    );
}
export default Carousel;