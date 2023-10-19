import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';

function App() {
  const [activeSection, setActiveSection] = useState('home'); // Initialize with the default active section, in this case, 'home'.

  return (
    <div className="App mb-5" style={{ backgroundColor: '#c2def2' }}>
      <BrowserRouter>
        <Navbar activeSection={activeSection} /> {/* Pass the activeSection to Navbar */}
        <Carousel setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <Schedule setActiveSection={setActiveSection} />
        <Speakers setActiveSection={setActiveSection} />
      </BrowserRouter>
    </div>
  );
}

export default App;
