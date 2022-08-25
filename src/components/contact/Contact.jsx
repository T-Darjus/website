import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="main-container">
        <div className="contact__container">
          <div className="contact__textbox">
            <h2 className="heading-primary">Contact</h2>
            <div className="phone">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="phone-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p className="secondary-text">
                <a className="footer-link" href="tel:+391 4585 98521">
                  +391 4585 98521
                </a>
              </p>
            </div>
            <div className="location">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="location-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <p className="secondary-text">
                <a
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://maps.google.com/maps?ll=41.765199,71.929443&z=10&t=m&hl=lt&gl=LT&mapclient=embed"
                >
                  Sawmill, Asia
                </a>
              </p>
            </div>
          </div>
          <div className="contact__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d179769.754644891!2d71.92944314252162!3d41.76519875146117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1slt!2slt!4v1661164767851!5m2!1slt!2slt"
              width="500"
              height="430"
              title="map"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
