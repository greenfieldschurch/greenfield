import React, { useState, useEffect } from 'react';
import '../Donations.css';

function Donations() {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 15;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev >= totalImages ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev <= 1 ? totalImages : prev - 1));
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev >= totalImages ? 1 : prev + 1));
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <>
    <div className='donations-slideshow-container' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/images/moriah_${currentImage}.jpg`})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <button className='donations-slideshow-button prev' onClick={goToPrevious}>
        <i className='fas fa-chevron-left'></i>
      </button>
      <button className='donations-slideshow-button next' onClick={goToNext}>
        <i className='fas fa-chevron-right'></i>
      </button>
      <div className='donations-slideshow-indicators'>
        {[...Array(totalImages)].map((_, index) => (
          <span
            key={index + 1}
            className={`donations-indicator-dot ${currentImage === index + 1 ? 'active' : ''}`}
            onClick={() => goToImage(index + 1)}
          />
        ))}
      </div>
    </div>
    <div className='donations'>
      <h1>Help Us Restore Moriah Baptist Chapel</h1>
      <div className='donations__container'>
        <div className='donations__wrapper'>
          <p>
            We are incredibly grateful to share that our church has been blessed to purchase Moriah Baptist Chapel in Clydach, Swansea—a historic building that will become our new spiritual home.
            <br/>
            <br/>
            At present, the chapel is not fit for worship and community use. We are therefore raising funds to renovate and restore the building so it can once again be a place of worship, prayer, and a hub for the wider community.
          </p>
          
          <h2>Why This Matters</h2>
          <p>
            Swansea holds a special place in Christian history as the birthplace of the Welsh Revival of 1904—a movement that transformed lives and communities. We believe God is calling us to be part of something new: a fresh work of renewal that brings people closer to Him and to one another.
          </p>
          
          <h2>How You Can Help</h2>
          <p>
            Your support—whether through giving, praying, or sharing—will make a real difference. Every contribution brings us one step closer to reopening the chapel and serving the local community.
          </p>
          
          <a href='https://gofund.me/f2e0cddab' target='_blank' rel='noopener noreferrer' className='donations__cta'>
            <strong>Click here to donate</strong>
          </a>
          
          <p>
            If you're unable to give at this time, we would be deeply thankful if you could share this page with your family and friends and keep this project in your prayers.
            <br/>
            <br/>
            Thank you for standing with us. Together, we believe God can do something truly special in Swansea once again.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Donations;
