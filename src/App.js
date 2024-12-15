import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Header from './components/Header';
import OurStory from './components/OurStory';
import EventDetails from './components/EventDetails';
// import Gallery from './components/Gallery';
import CarouselGallery from './components/CarouselGallery'
import Location from './components/Location';
import Footer from './components/Footer';
import Slideshow from './components/Slideshow';
import theme from './theme';
import './App.css'; // For custom styles

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize styles */}
      <Navbar />
      <Container>
        <Header />
        <Slideshow />
        <OurStory />
        {/* <Gallery /> */}
        <CarouselGallery />
        <EventDetails />
        {/* <RSVP /> */}
        <Location />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
