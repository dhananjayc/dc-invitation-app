import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Sanket & Priyanka's Wedding
        </Typography>
        <Button color="inherit"><Link to="home" smooth={true} duration={500}>Home</Link></Button>
        <Button color="inherit"><Link to="our-story" smooth={true} duration={500}>Our Story</Link></Button>
        <Button color="inherit"><Link to="event-details" smooth={true} duration={500}>Event Details</Link></Button>
        <Button color="inherit"><Link to="rsvp" smooth={true} duration={500}>RSVP</Link></Button>
        <Button color="inherit"><Link to="location" smooth={true} duration={500}>Venue & Location</Link></Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
