import React from 'react';
import { Box, Typography } from '@mui/material';

const EventDetails = () => {
  return (
    <section id="event-details" style={{ padding: '50px 0' }} className="event-details">
      <Box textAlign="center">
        <Typography variant="h4" gutterBottom>
          Event Details
        </Typography>
        {/* <Typography variant="body1">
          Location: Matoshree Lawns, Mohitewadi, Khed, Pune
        </Typography> */}
        <Typography variant="body4">
          <b>दंडवत - </b>19 डिसेंबर 2024 (सकाळी 9 वा. चिंचोशी)<br/> 
        </Typography>
        <Typography variant="body4">
         <b>हळद - </b>17 डिसेंबर 2024 <br/> 
        </Typography>
        <Typography variant="h5" paragraph>
          विवाह समारंभ - 22 डिसेंबर 2024 <br /> सायंकाळी ५.५६ वा
        </Typography>
        <Typography variant="body4">
          <b>सत्यनारायण पूजा - </b>
          22 डिसेंबर 2024 : दुपारी 3 वा 
        </Typography>
      </Box>
    </section>
  );
};

export default EventDetails;
