import React, { useEffect } from 'react';
import '../Contact.css';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className = "contact-section">
      <div className = "contact-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/contact-bg.jpg'})` }}>
        {/* <h3>Get in Touch with Us</h3> */}
        <h2>contact us</h2>
        <div className = "line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* <p className = "text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iste facilis quos impedit fuga nobis modi debitis laboriosam velit reiciendis quisquam alias corporis, maxime enim, optio ab dolorum sequi qui.</p> */}
      </div>


      <div className = "contact-body">
        <div className = "contact-info">
          <div>
            <span><i className = "fas fa-mobile-alt"></i></span>
            <span>Phone No.</span>
            <span className = "text">+447549223856</span>
            <span className = "text">+447880114037</span>
          </div>
          <div>
            <span><i className = "fas fa-envelope-open"></i></span>
            <span>E-mail</span>
            <span className = "text">greenfieldscommunitychurch@gmail.com</span>
          </div>
          <div>
            <span><i className = "fas fa-map-marker-alt"></i></span>
            <span>Address</span>
            <span className = "text">Pantlasau</span>
            <span className = "text">Near Morriston Hospital</span>
            <span className = "text">Swansea</span>
            <span className = "text">SA6 6NR</span>
          </div>
          <div>
            <span><i className = "fas fa-clock"></i></span>
            <span className = "text" >Timings</span>
            <span className = "text" style={{'text-decoration': 'underline'}}>Sunday</span>
            <span className = "text">Worship 11am - 12:30pm</span>
            <span className = "text">Sunday School 12:30pm - 1:15pm</span>
            <span className = "text">Every 4th Sunday - Youth meeting</span>

            <span className = "text" style={{'text-decoration': 'underline'}}>Friday</span>
            <span className = "text">Bible study - 7pm to 8pm</span>
            
            <span className = "text" style={{'text-decoration': 'underline'}}>Saturday</span>
            <span className = "text">Malayalam meeting - 7pm to 8:30pm</span>

            <span className = "text">Every 4th Saturdays - Fasting Prayer</span>
            <span className = "text">Every 3rd Saturdays - Evangelism</span>
          </div>
        </div>

        {/* <div className = "contact-form">
          <div  className = "form">
            <textarea rows = "5" placeholder="Message" className = "form-control"></textarea>
            <input type = "submit" className = "send-btn" value = "send message"/>
          </div>
        </div> */}
      </div>

      <div className = "map">
        <iframe
          title="googlemap"
          width="100%"
          height="600"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=51.68279046290707,-3.941157460212708+(Greenfields%20Community%20Church)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps systems</a>
        </iframe>
      </div>


    </div>
    </>
  );
}

export default Contact;