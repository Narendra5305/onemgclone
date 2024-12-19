import React from "react";
import "./contact.css";

function ContactComponent() {
  return (
    <div className="contactPage">
      <img
        src="https://www.1mg.com/images/page-specific/contact-us/banner-d.png"
        alt="ContactBanner"
      />
      <div className="contactTitle">
        <h2>CONTACT US</h2>
      </div>
      <div className="contact-info">
        <div className="page1">
          <div>
            <button>LOGIN</button>
            <button>SIGN UP</button>
          </div>
          <div>
            <div>
              <div>
                <img
                  src="https://www.1mg.com/images/page-specific/contact-us/chat-icon.svg"
                  alt="messageLogo"
                />
                <span>Chat right now</span>
              </div>
              <p>
                Our chat assistant can quickly help you with any issues, queries
                or can instantly redirect you to the right person for a
                resolution
              </p>
            </div>
            <div>
              <img
                src="https://www.1mg.com/images/page-specific/contact-us/chat-icon.svg"
                alt="messageLogo"
              />
              <span>START CHATTING</span>
            </div>
          </div>

          <div>
            <p>Corporate Queries</p>
            <img
              src="https://www.1mg.com/images/page-specific/contact-us/right-arrow.svg"
              alt="ArrowSVG"
            />
          </div>
        </div>

        <div className="page2">
          <h3>Corporate Details</h3>
          <div>
            <img
              src="https://www.1mg.com/images/page-specific/contact-us/group.svg"
              alt="penLogo"
            />
            <span><strong>Mail us at:</strong> care@1mg.com</span>
          </div>
          <div>
            <img
              src="https://www.1mg.com/images/page-specific/contact-us/cin_icon.svg"
              alt="circleTickLogo"
            />
            <span><strong>CIN : </strong>U24290DL2016PTC302634</span>
          </div>

          <div>
            <div>
              <img
                src="https://www.1mg.com/images/page-specific/contact-us/book-pin.svg"
                alt="locationLogo"
              />
              <span><strong>Our location:</strong></span>
            </div>
            <p>
              Registered Address 2nd Floor, Plot No. B-225, Okhla Industrial
              Area, Phase-I, South Delhi, New Delhi- 110020 <br /><br/>
              Postal Address: Corporate Address: 5th Floor Tower – B of The
              Presidency Building, 46/4 Mehrauli Gurgaon Road, Sector 14,
              Gurugram, Haryana-122001, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;