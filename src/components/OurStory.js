import React from 'react';
import { Typography } from '@mui/material';
import '../App.css'; // Import the CSS file

const OurStory = () => {
  return (
    <section id="our-story" className="our-story">
      <Typography variant="h4" gutterBottom>
        Our Story
      </Typography>
      <Typography variant="body1" paragraph>
        Join us in celebrating our love story, which began as a chance encounter and blossomed into a beautiful journey.
      </Typography>
      <Typography variant="body1" paragraph>
        We can’t wait to start the next chapter with all of you.
      </Typography>
    </section>
  );
};

export default OurStory;
