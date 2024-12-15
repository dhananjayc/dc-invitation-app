import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#455a64', color: 'white', padding: '20px 0' }}>
      <Box textAlign="center">
        <Typography variant="body1">
          We can't wait to celebrate with you! For more details, feel free to reach out.
        </Typography>
        <Link href="https://www.kavyasaanj.com/" target="_blank" color="inherit">
          With Love, www.kavyasaanj.com
        </Link>
      </Box>
    </footer>
  );
};

export default Footer;
