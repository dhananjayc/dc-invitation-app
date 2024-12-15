import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Header from './components/Header';
import OurStory from './components/OurStory';
import EventDetails from './components/EventDetails';
import RSVP from './components/RSVP';
import Location from './components/Location';
import Footer from './components/Footer';
import './App.css'; // For custom styles

function App() {
  return (
    <div>
      <CssBaseline /> {/* Normalize styles */}
      <Navbar />
      <Container>
        <Header />
        <OurStory />
        <EventDetails />
        <RSVP />
        <Location />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
