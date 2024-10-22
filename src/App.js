import React from 'react';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import MissionAndVision from './components/pages/MissionAndVision';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>


    <a class="fa-stack fa-lg whatsapp-icon" href="https://api.whatsapp.com/send?phone=447549223856">
          <i class="fa fa-square fa-stack-2x"></i>
          <i class="fab fa-whatsapp fa-stack-1x"></i>
    </a>


      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/vision' Component={MissionAndVision} />
          <Route path='/contact' Component={Contact} />
        </Routes>
        <Footer />
      </Router>
      
    </>

      

  );
}

export default App;
