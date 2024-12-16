import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#455a64', color: 'white', padding: '20px 0' }}>
      <Box textAlign="center" style={{ padding: '8px' }}>
        <Typography variant="body1">
          We can't wait to celebrate with you! For more details, feel free to reach out. <br/>
          With Love, <br/>
        </Typography>
        <Typography variant="h6">
          <Link href="https://www.kavyasaanj.com/" target="_blank" color="inherit">
            www.kavyasaanj.com
          </Link>
        </Typography>
        <Typography variant="body1"> <br/ >
          The wedding ceremony will take place at: <br/ >
          Matoshree Lawns, Mohitewadi, Tal. Khed, Dist. Pune <br/>
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
