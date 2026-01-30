import React, { useEffect } from "react";
import "../Contact.css";
import "../HeroSection.css";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="contact-section">
        <div
          className="contact-bg"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/contact-bg.jpg"
            })`,
          }}
        >
          {/* <h3>Get in Touch with Us</h3> */}
          <h2>contact us</h2>
          <div className="line">
            <div></div>
            <div></div>
            <div></div>
          </div>
          {/* <p className = "text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iste facilis quos impedit fuga nobis modi debitis laboriosam velit reiciendis quisquam alias corporis, maxime enim, optio ab dolorum sequi qui.</p> */}
        </div>

        <div className="contact-body">
          <div className="form-calendar-wrapper">
            <div className="contact-form-section">
              <div className="google-form-container">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeaNl8ajMBEySsSXwSQmz0cL7ffOiZyelriosARWq33JY-FHA/viewform?embedded=true"
                  className="google-form-iframe"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                >
                  Loading…
                </iframe>
              </div>
            </div>

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
          </div>

          <div className="contact-map-wrapper">
            <div className="contact-info">
              <div>
                <span>
                  <i className="fas fa-mobile-alt"></i>
                </span>
                <span>Phone No.</span>
                <span className="text">
                  <a className="contact_link"  href="tel:+447549223856">
                    +447549223856
                  </a>
                </span>
                <span className="text">
                  <a className="contact_link"  href="tel:+447880114037">
                    +447880114037
                  </a>
                  </span>
              </div>
              <a className="contact_link" href="mailto:greenfieldscommunitychurch@gmail.com">
              <div>
                <span>
                  <i className="fas fa-envelope-open"></i>
                </span>
                <span>E-mail</span>
                <span className="text">greenfieldscommunitychurch@gmail.com</span>
              </div>
              </a>

              <a className="contact_link"  target="#blank" href="https://maps.google.com/maps/dir//GREENFIELDS+COMMUNITY+CHURCH,+ALL+NATION+(ENGLISH+%26+MALAYALAM)+PENTECOSTAL+CHURCH+NEAR+MORRISTON+HOSPITAL+Swansea+SA6+6NR/@51.6827386,-3.9414928,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x486ef54fe51b8de9:0xb81327dbad5852fb">
              <div class='address'>
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span>Address</span>
                <span className="text">Pantlasau</span>
                <span className="text">Near Morriston Hospital</span>
                <span className="text">Swansea</span>
                <span className="text">SA6 6NR</span>
              </div>
              </a>
            </div>

            <div className="map">
              <iframe
                title="googlemap"
                width="100%"
                height="600"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Greenfields%20Community%20Church)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
