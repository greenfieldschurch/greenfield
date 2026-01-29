import React, { useState, useEffect } from 'react';
import './Projects.css';

function Projects() {
  const [currentImage, setCurrentImage] = useState(1);
  const [loadedImages, setLoadedImages] = useState(new Set([1]));
  const totalImages = 15;

  // Preload an image
  const preloadImage = (index) => {
    if (!loadedImages.has(index)) {
      const img = new Image();
      img.src = `${process.env.PUBLIC_URL}/images/moriah_${index}.jpg`;
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, index]));
      };
    }
  };

  // Preload next few images in background
  useEffect(() => {
    // Preload the next 3 images
    for (let i = 1; i <= Math.min(3, totalImages); i++) {
      preloadImage(i);
    }
  }, []);

  // Preload next image whenever current image changes
  useEffect(() => {
    const nextImage = currentImage >= totalImages ? 1 : currentImage + 1;
    preloadImage(nextImage);
    // Also preload the one after that
    const afterNext = nextImage >= totalImages ? 1 : nextImage + 1;
    preloadImage(afterNext);
  }, [currentImage]);

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
    <div className='projects-container' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/images/moriah_${currentImage}.jpg`})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <button className='slideshow-button prev' onClick={goToPrevious}>
        <i className='fas fa-chevron-left'></i>
      </button>
      <button className='slideshow-button next' onClick={goToNext}>
        <i className='fas fa-chevron-right'></i>
      </button>
      <div className='slideshow-indicators'>
        {[...Array(totalImages)].map((_, index) => (
          <span
            key={index + 1}
            className={`indicator-dot ${currentImage === index + 1 ? 'active' : ''}`}
            onClick={() => goToImage(index + 1)}
          />
        ))}
      </div>
    </div>
    <div className='projects'>
      <h1>Help Us Build a New Home for Hope</h1>
      <div className='projects__container'>
        <div className='projects__wrapper'>
          <p>
          For over <strong>30 years</strong>, <strong>Greenfields Community Church</strong> (Registered Charity No. <strong>1104323</strong>) has been a place of hope, comfort, and practical support at the heart of <strong>Morriston, Swansea</strong>. We have walked alongside individuals and families through life's challenges, offering faith, friendship, and care when it is needed most.
          <br/>
          <br/>
          <strong>Today, we face an urgent challenge.</strong>
          <br/>
          Our current <strong>Portacabin premises are no longer suitable</strong> to remain open or to meet the growing needs of our community. Without a new home, the vital services we provide are at risk.
          </p>

          <h2>A Once-in-a-Lifetime Opportunity</h2>
          <p>
          We have been given the opportunity to relocate to the <strong>historic Moriah Baptist Chapel in Ynystawe, Clydach</strong>.
          <br/>
          <br/>
          Built in <strong>1892</strong>, with vestry foundations laid in <strong>1882</strong>, Moriah Chapel is a much-loved local landmark. With the right investment, it has the potential to become a <strong>renewed centre of hope, faith, and community life</strong> once again.
          <br/>
          <br/>
          However, the building is currently <strong>not fit for use</strong> and requires extensive refurbishment before it can open its doors.
          </p>

          <h2>What Needs to Be Done</h2>
          <p>
          To restore Moriah Chapel and make it safe, welcoming, and fully accessible, we must complete essential work, including:
          </p>
          <ul>
            <li><strong>Full roof and ceiling repairs</strong></li>
            <li>Installation of <strong>central heating</strong></li>
            <li><strong>Installation of new windows and doors</strong></li>
            <li><strong>Electrical and plumbing upgrades</strong></li>
            <li>New <strong>carpeting</strong></li>
            <li><strong>Replastering and painting</strong></li>
            <li>Comprehensive <strong>internal and external cleaning</strong></li>
            <li><strong>Audio visual and musical equipment's</strong></li>
            <li>Commercial kitchen</li>
            <li>Furniture's and fixtures</li>
          </ul>

          <h2>Our Vision</h2>
          <p>
          Our vision is to <strong>restore and renew Moriah Chapel</strong> into a warm, inclusive place of worship and a thriving <strong>community hub</strong> — a space where people feel welcome, valued, and supported.
          </p>

          <h2>Our Mission: £1,000,000 to Transform Lives</h2>
          <p>
          We are raising <strong>£1,000,000</strong> to transform Moriah Chapel into a sanctuary that will:
          </p>
          <ul>
            <li>Support <strong>mental health and wellbeing</strong></li>
            <li>Tackle <strong>loneliness and social isolation</strong></li>
            <li>Provide care and support for <strong>families, children, individuals, schools, and vulnerable communities</strong></li>
            <li>Host <strong>expanded youth programmes</strong></li>
            <li>Grow our <strong>food bank services</strong></li>
            <li>Offer a larger, accessible space for <strong>fellowship, connection, and community events</strong></li>
          </ul>

          <h2>More Than a Building</h2>
          <p>
          This appeal is <strong>not just about saving a building</strong>.
          <br/>
          <br/>
          It is about <strong>protecting a lifeline</strong> — a place where people can find hope, belonging, and practical support when they need it most.
          <br/>
          <br/>
          With your help, Moriah Chapel can once again become a beacon of light in the community.
          <br/>
          <br/>
          <strong>Together, we can build a new home for hope.</strong>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Projects;
