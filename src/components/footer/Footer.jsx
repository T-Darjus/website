import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="main-container">
        <div className="footer__container">
          <div className="footer__links">
            <div className="logo">
              <Link className="footer-link" to="/">
                <img src="img/logo.png" alt="logo" />
              </Link>
            </div>
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
                <Link className="footer-link" to="tel:+391 4585 98521">
                  +391 4585 98521
                </Link>
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
                <Link className="footer-link" to="#">
                  Sawmill, Asia
                </Link>
              </p>
            </div>
          </div>
          <p className="footer__privacy">
            <Link className="footer-link" to="#">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
