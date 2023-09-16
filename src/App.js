import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/index';
import Development from './components/Development';
import Drone from './components/Drone';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {

  return (

      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/development" element={<Development />} />
          <Route path="/drone" element={<Drone />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
    </Router>
     
    
  );
}

export default App;
