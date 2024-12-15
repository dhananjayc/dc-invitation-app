import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const galleryImages = [
  '/assets/images/11.jpeg',  // Replace these with your actual image paths
  '/assets/images/1.jpeg',  // Replace these with your actual image paths
  '/assets/images/2.jpeg',
  '/assets/images/3.jpeg',
  '/assets/images/4.jpeg',
  '/assets/images/5.jpeg',
  '/assets/images/6.jpeg',
  '/assets/images/7.jpeg',
  '/assets/images/8.jpeg',
  '/assets/images/9.jpeg',
  '/assets/images/10.jpeg',
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

  // Automatically switch images every 3 seconds
  useEffect(() => {
    const timer = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(timer); // Clear the timer when the component unmounts
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // maxHeight: '500px',  // Adjust the height as needed
        height:'auto',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <img
        src={galleryImages[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {/* Previous Button */}
      <IconButton
        onClick={prevImage}
        sx={{
          position: 'absolute',
          left: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          '&:hover': { backgroundColor: 'rgba(255, 255, 255, 1)' },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      {/* Next Button */}
      <IconButton
        onClick={nextImage}
        sx={{
          position: 'absolute',
          right: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          '&:hover': { backgroundColor: 'rgba(255, 255, 255, 1)' },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Slideshow;
