import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar
        sx={{
          flexDirection: 'row', // Column layout for XS, row for larger screens
          alignItems: { xs: 'center', sm: 'flex-start' },
          justifyContent: 'space-between',
          flexWrap: 'wrap', // Allow buttons to wrap on smaller screens
        }}
      >
        {/* Responsive Typography for the title */}
        <Typography
          variant="h3"
          sx={{
            fontSize: {
              xs: '1.5rem', // Smaller font for XS screens
              sm: '1.5rem',
              md: '1.5rem',
            },
            flexGrow: 1,
            textAlign: { xs: 'center', sm: 'left' }, // Center title on XS screens
            marginBottom: { xs: '10px', sm: 0 }, // Add some spacing below on XS screens
          }}
        >
          <Link to="home" smooth={true} duration={500}>
            Sanket & Priyanka's Wedding
          </Link>
        </Typography>

        {/* Responsive Buttons */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row', // Stack buttons vertically on XS, row on sm+
            width: { xs: '100%', sm: 'auto' }, // Full width buttons on XS screens
            alignItems: 'center',
          }}
        >
          <Button
            color="inherit"
            sx={{
              fontSize: {
                xs: '0.7rem',
                sm: '0.9rem',
                md: '1rem',
              },
              width: { xs: '100%', sm: 'auto' }, // Full width button for XS
              marginBottom: { xs: '8px', sm: 0 }, // Add margin for vertical stacking
            }}
          >
            <Link to="our-story" smooth={true} duration={500}>
              Our Story
            </Link>
          </Button>
          <Button
            color="inherit"
            sx={{
              fontSize: {
                xs: '0.7rem',
                sm: '0.9rem',
                md: '1rem',
              },
              width: { xs: '100%', sm: 'auto' },
              marginBottom: { xs: '8px', sm: 0 },
            }}
          >
            <Link to="event-details" smooth={true} duration={500}>
              Event Details
            </Link>
          </Button>
          <Button
            color="inherit"
            sx={{
              fontSize: {
                xs: '0.7rem',
                sm: '0.9rem',
                md: '1rem',
              },
              width: { xs: '100%', sm: 'auto' },
              marginBottom: { xs: '8px', sm: 0 },
            }}
          >
            <Link to="CarouselGallery" smooth={true} duration={500}>
              Gallery
            </Link>
          </Button>
          <Button
            color="inherit"
            sx={{
              fontSize: {
                xs: '0.7rem',
                sm: '0.9rem',
                md: '1rem',
              },
              width: { xs: '100%', sm: 'auto' },
              marginBottom: { xs: '8px', sm: 0 },
            }}
          >
            <Link to="location" smooth={true} duration={500}>
              Venue & Location
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
