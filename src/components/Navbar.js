import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-scroll'; // Ensure you have react-scroll installed

const Navbar = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        {/* Responsive Typography for the title */}
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontSize: {
              xs: '1rem', // Small font size for mobile screens
              sm: '1.5rem', // Slightly larger for small screens
              md: '2rem', // Default size for medium and larger screens
            },
          }}
        >
          Sanket & Priyanka's Wedding
        </Typography>

        {/* Responsive Buttons */}
        <Button
          color="inherit"
          sx={{
            fontSize: {
              xs: '0.8rem', // Smaller text on mobile
              sm: '0.9rem', // Small screens
              md: '1rem',   // Default on larger screens
            },
            marginLeft: {
              xs: 0.5,  // Adjust margins for smaller screens
              sm: 1,
              md: 2,
            },
          }}
        >
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </Button>
        <Button
          color="inherit"
          sx={{
            fontSize: {
              xs: '0.8rem',
              sm: '0.9rem',
              md: '1rem',
            },
            marginLeft: {
              xs: 0.5,
              sm: 1,
              md: 2,
            },
          }}
        >
          <Link to="our-story" smooth={true} duration={500}>Our Story</Link>
        </Button>
        <Button
          color="inherit"
          sx={{
            fontSize: {
              xs: '0.8rem',
              sm: '0.9rem',
              md: '1rem',
            },
            marginLeft: {
              xs: 0.5,
              sm: 1,
              md: 2,
            },
          }}
        >
          <Link to="event-details" smooth={true} duration={500}>Event Details</Link>
        </Button>
        <Button
          color="inherit"
          sx={{
            fontSize: {
              xs: '0.8rem',
              sm: '0.9rem',
              md: '1rem',
            },
            marginLeft: {
              xs: 0.5,
              sm: 1,
              md: 2,
            },
          }}
        >
          <Link to="CarouselGallery" smooth={true} duration={500}>Gallery</Link>
        </Button>
        <Button
          color="inherit"
          sx={{
            fontSize: {
              xs: '0.8rem',
              sm: '0.9rem',
              md: '1rem',
            },
            marginLeft: {
              xs: 0.5,
              sm: 1,
              md: 2,
            },
          }}
        >
          <Link to="location" smooth={true} duration={500}>Venue & Location</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
