import React from 'react';
import { Box, Typography, Button, Grid2 } from '@mui/material';
import '../App.css'; // Import the CSS file

const Location = () => {
  return (
    <section id="location" style={{ padding: '50px 0', backgroundColor: '#e3f2fd' }}>
      <Box textAlign="center">
        <Typography variant="h4" gutterBottom>
          Venue & Location
        </Typography>
        <Typography variant="body1">
          The wedding ceremony will take place at:
        </Typography>
        <Typography variant="h6" paragraph>
          Matoshree Lawns, Mohitewadi, Tal. Khed, Dist. Pune
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          href="https://maps.app.goo.gl/yPK6RPrFrkUrvGZj6"
          target="_blank"
        >
          View on Google Maps
        </Button>
        <Grid2 container style={{ padding: '8px' }} className="map-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1889.2240861733312!2d73.973627!3d18.733508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2cefaee8229f1%3A0x43a6f215192c4cfb!2sMatoshri%20Lawns!5e0!3m2!1sen!2sus!4v1734251318534!5m2!1sen!2sus"
            width="100%"
            height="315"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </Grid2>
      </Box>
    </section>
  );
};

export default Location;
