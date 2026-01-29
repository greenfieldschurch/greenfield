import React, { useEffect } from "react";
import "../../App.css";
import About from "../About";
import HeroSection from "../HeroSection";
import "../HeroSection.css";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <About />
      
      <div className='calendar-section'>
        <div className='calendar-container'>
          <div className='calendar-header'>
            <i className='far fa-calendar-alt calendar-icon'></i>
            <h2>Upcoming Events</h2>
            <p className='calendar-subtitle'>Join us for worship and fellowship</p>
          </div>
          <div className='calendar-wrapper'>
            <iframe 
              src="https://calendar.google.com/calendar/embed?src=greenfieldscommunitychurch%40gmail.com&ctz=Europe%2FLondon&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=1&mode=AGENDA"
              className='calendar-iframe'
              frameBorder="0" 
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
