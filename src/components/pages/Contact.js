import React, { useEffect } from "react";
import "../Contact.css";

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
            <div>
              <span>
                <i className="fas fa-clock"></i>
              </span>
              <span className="text">Timings</span>
              <span className="text" style={{ "text-decoration": "underline" }}>
                Sunday
              </span>
              <span className="text">Worship 11am - 12:30pm</span>
              <span className="text">Sunday School 12:30pm - 1:15pm</span>
              <span className="text">Every 4th Sunday - Youth meeting</span>

              <span className="text" style={{ "text-decoration": "underline" }}>
                Friday
              </span>
              <span className="text">Bible study - 7pm to 8pm</span>

              <span className="text" style={{ "text-decoration": "underline" }}>
                Saturday
              </span>
              <span className="text">Malayalam meeting - 7pm to 8:30pm</span>

              <span className="text">Every 4th Saturday - Fasting Prayer</span>
              <span className="text">Every 3rd Saturday - Evangelism</span>
            </div>
          </div>

          {/* <div className = "contact-form">
          <div  className = "form">
            <textarea rows = "5" placeholder="Message" className = "form-control"></textarea>
            <input type = "submit" className = "send-btn" value = "send message"/>
          </div>
        </div> */}
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
    </>
  );
}

export default Contact;
