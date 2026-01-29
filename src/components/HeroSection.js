import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  const [verse, setVerse] = useState('WHEREVER THE RIVER GOES, IT BRINGS LIFE');
  const [reference, setReference] = useState('EZEKIEL 47:9');

  useEffect(() => {
    // Fetch random Bible verse
    fetch('https://beta.ourmanna.com/api/v1/get/?format=json&order=random')
      .then(response => response.json())
      .then(data => {
        if (data && data.verse && data.verse.details) {
          setVerse(data.verse.details.text.toUpperCase());
          setReference(data.verse.details.reference.toUpperCase());
        }
      })
      .catch(error => {
        console.error('Failed to fetch random verse, using default:', error);
        // Keep default values on error
      });
  }, []);

  return (
    <div className='hero-container' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/home.jpg'})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <img src={`${process.env.PUBLIC_URL}/images/logo.png`} /> 
      <h1>Making a difference</h1>
      <p>{verse}</p>
      <p className='chapter'>{reference}</p>
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