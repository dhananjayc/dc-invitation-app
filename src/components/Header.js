import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <header id="home" style={{ backgroundColor: '#f5f5f5', padding: '50px 0' }}>
      <Box textAlign="center"  style={{ padding: '0 4px' }}>
        <Typography variant="body1" gutterBottom>
          You're Invited to the Wedding of 
        </Typography>
        <Typography variant="h2" gutterBottom>
          Sanket & Priyanka
        </Typography>
        <Typography variant="h5" gutterBottom>
          20th December 2024 - 5:56 PM
        </Typography>
        <Typography variant="body1" gutterBottom>
          Matoshree Lawns, Mohitewadi, Khed, Pune
        </Typography>
        <Button variant="contained" color="primary" size="large" href="#location">
          Save the Date
        </Button>
      </Box>
    </header>
  );
};

export default Header;
