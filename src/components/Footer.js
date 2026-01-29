import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/' onClick={scrollToTop}>Home</Link>
            <Link to='/vision' onClick={scrollToTop}>Mission & Vision</Link>
            <Link to='/projects' onClick={scrollToTop}>Projects</Link>
            <Link to='/donations' onClick={scrollToTop}>Donations</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact' onClick={scrollToTop}>Contact</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.facebook.com/people/Greenfields-Church-Morriston/61555144023429'>Facebook</Link>
            <Link to='https://www.youtube.com/@GreenfieldsChurchMorriston'>Youtube</Link>
            <Link to='https://www.instagram.com/greenfieldscommunitychurch/'>Instagram</Link>
            <Link to='/media' onClick={scrollToTop}>Latest Videos</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              GREENFIELDS
              <img src={`${process.env.PUBLIC_URL}/images/logo.png`} width="50" height="50" style={{marginLeft:10}}/> 
            </Link>
          </div>
          <small class='website-rights'>GREENFIELDS COMMUNITY CHURCH © 2024</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/people/Greenfields-Church-Morriston/61555144023429'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/greenfieldscommunitychurch/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='https://www.youtube.com/@GreenfieldsChurchMorriston'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;