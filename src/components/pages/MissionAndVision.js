import React, { useEffect } from 'react';
import { Button } from '../Button';
import '../MissionAndVision.css';

function MissionAndVision() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className='mission-and-vision-container' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/cross.jpg'})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}/>
    <div className='mission_and_vision'>
      <h1>Mission</h1>
      <div className='mission_and_vision__container' >
        <div className='mission_and_vision__wrapper'>
          <p>
            Our mission at Greenfields Community Church is to be a Christ-centered community that reaches out with love, hope, and compassion. We are dedicated to sharing the Gospel, serving others, and providing a welcoming environment where people from all backgrounds can encounter God, grow in faith, and live out their purpose. Through worship, fellowship, and acts of service, we aim to make a meaningful impact on both our local community and beyond.
          </p>
        </div>
      </div>

      <h1>Vision</h1>
      <div className='mission_and_vision__container'>
        <div className='mission_and_vision__wrapper'>
          <p>
          Our vision is to be a beacon of hope and light in our community—a place where lives are transformed through the love of Christ. We aspire to create a church where individuals and families experience spiritual growth, deep connection, and practical support. By empowering people to serve and spread the love of God, we envision a community strengthened in faith and united in purpose, bringing God’s kingdom closer to the world around us.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default MissionAndVision;