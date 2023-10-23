import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Student from './components/Student'; // Import the Student component
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App mb-5" style={{ backgroundColor: '#c2def2' }}>
      <BrowserRouter>
        <Navbar activeSection={activeSection} />
        <Carousel setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <Student setActiveSection={setActiveSection} /> {/* Add the Student component here */}
        <Schedule setActiveSection={setActiveSection} />
        <Speakers setActiveSection={setActiveSection} />
      </BrowserRouter>
    </div>
  );
}

export default App;
