import React, { useRef, useState, useEffect } from 'react';
import styles from './ImageSlider.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalImage from "react-modal-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider({ images }) {
  const dialogRef = useRef(null);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (activeImage) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [activeImage]);

  function closePopup() {
    dialogRef.current.close();
    setActiveImage(null);
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <dialog 
        ref={dialogRef} 
        style={{ 
          display: activeImage ? 'block' : 'none', 
          position: 'fixed', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          zIndex: 1000 
        }}
        className={`backdrop:bg-black/85 overflow-visible ${styles.dialogBox}`}
      >
        {activeImage && (
          <div className='relative overflow-visible'>
            <div className='grid place-items-center'>
              <div style={{
                aspectRatio: `${activeImage.width}/${activeImage.height}`
              }} className={`${styles.dialogImgdiv}`}>
                <img src={activeImage} alt="Active" />
              </div>
            </div>
            <div className='absolute -top-2 -right-2'>
              <button 
                onClick={closePopup} 
                className="flex items-center justify-center w-10 h-10 bg-zinc-200 rounded-full shadow"
              >
                <FontAwesomeIcon icon={faXmark} style={{color: "#ff0000"}} />
                <span className='sr-only'>Close</span>
              </button>
            </div>
          </div>
        )}
      </dialog>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <button 
              key={index} 
              onClick={() => setActiveImage(image)} 
              className={styles.ImageButton}
            >
              <img src={image} alt={`Slide ${index}`} className={styles.SlideImage} />
            </button>
          ))}
        </Slider>
      </div>
    </div>
  );
}


