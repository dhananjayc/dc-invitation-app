import { createTheme } from '@mui/material/styles';

// Define the theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#9c27b0',  // Purple
    },
    secondary: {
      main: '#f50057',  // Optional secondary color (Pink in this case)
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',  // Customize the typography if needed
  },
});
export default theme;