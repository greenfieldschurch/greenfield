import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/home.jpg'})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <h1>Making a difference</h1>
      <p>WHEREVER THE RIVER GOES, IT BRINGS LIFE</p>
      <p className='chapter'>EZEKIEL 47:9</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          to='/contact'
        >
          I'M NEW
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          to='/vision'
        >
            GO DEEPER <i className='fa fa-arrow-right' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;