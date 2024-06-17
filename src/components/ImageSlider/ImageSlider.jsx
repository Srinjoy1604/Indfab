import React, { Component, useRef, useState, useEffect } from 'react';
import styles from './ImageSlider.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalImage from "react-modal-image";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

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
  const dialogRef = useRef(undefined);
  const [activeImage, setActiveImage] = useState(null);
  useEffect(() => {
    if (!activeImage) return;
    dialogRef.current.showModal();
  }, [activeImage]);
  function closePopup()
  {
    dialogRef.current.close();
    setActiveImage(undefined);
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
      <dialog ref={dialogRef} className='backdrop:bg-black/85 overflow-visible'>
        {activeImage &&

          (<div className='relative overflow-visible'>
            <div style={{
              aspectRatio: `${activeImage.width}/${activeImage.height}`
            }}>
              <img src={activeImage}></img>
            </div>
            <div className='absolute -top-2 -right-2 '>
              <button onClick={closePopup} className="flex items-center justify-center w-10 h-10 bg-zinc-200 rounded-full shadow">
                <FontAwesomeIcon icon={faXmark} style={{color: "#ff0000",}} />
                <span className='sr-only'>Close</span>
              </button>
              
            </div>

          </div>)
        }
      </dialog>
      <div className="slider-container">
        <Slider  {...settings}>
          {images.map((image, index) => (
            <button key={index} onClick={() => setActiveImage(image)}><img src={image} key={index}></img></button>
          ))}
        </Slider>
      </div>

    </div>

  );
}

