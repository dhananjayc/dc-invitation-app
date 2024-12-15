import React from 'react';
import { Box, Typography } from '@mui/material';

const EventDetails = () => {
  return (
    <section id="event-details" style={{ padding: '50px 0' }}>
      <Box textAlign="center">
        <Typography variant="h4" gutterBottom>
          Event Details
        </Typography>
        <Typography variant="body1" paragraph>
          Ceremony begins at 5:56 PM, followed by a reception.
        </Typography>
        <Typography variant="body1">
          Location: Matoshree Lawns, Mohitewadi, Khed, Pune
        </Typography>
      </Box>
    </section>
  );
};

export default EventDetails;
