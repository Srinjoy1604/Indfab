import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires importing the default styles
import CloseIcon from '@mui/icons-material/Close';
import styles from './EventsCard.module.css';

const EventsCard = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={styles.carouselContainer}>
      <Carousel
        showArrows
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        stopOnHover
        className={styles.carousel}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.imageContainer} onClick={() => handleClickOpen(image)}>
            <img src={image} alt={`Event ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </Carousel>

      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent className={styles.dialogContent}>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            className={styles.closeButton}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <img src={selectedImage} alt="Selected Event" className={styles.dialogImage} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

EventsCard.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EventsCard;



