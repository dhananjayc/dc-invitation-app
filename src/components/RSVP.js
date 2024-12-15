import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const RSVP = () => {
  const [name, setName] = useState('');
  const [attendees, setAttendees] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! RSVP submitted.`);
  };

  return (
    <section id="rsvp" style={{ padding: '50px 0', backgroundColor: '#f1f8e9' }}>
      <Box textAlign="center">
        <Typography variant="h4" gutterBottom>
          RSVP
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Number of Guests"
            type="number"
            variant="outlined"
            value={attendees}
            onChange={(e) => setAttendees(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" size="large">
            Submit
          </Button>
        </form>
      </Box>
    </section>
  );
};

export default RSVP;
