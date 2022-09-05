import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <footer className="footer">
      <div className="main-container">
        <div className="footer__container">
          <div className="footer__links">
            <div
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="logo"
            >
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
          <div className="footer__privacy">
            <div>
              <Button className="footer-link" onClick={handleClickOpen}>
                Privacy Policy
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Our Privacy Policy"}
                </DialogTitle>
                <DialogContent scroll="paper">
                  <DialogContentText id="alert-dialog-description">
                    Personal information you disclose to us In Short: We collect
                    personal information that you provide to us such as name,
                    address, contact information, passwords and security data,
                    payment information, and social media login data. We collect
                    personal information that you voluntarily provide to us when
                    registering at the Sites or Apps, expressing an interest in
                    obtaining information about us or our products and services,
                    when participating in activities on the Sites or Apps or
                    otherwise contacting us. The personal information that we
                    collect depends on the context of your interactions with us
                    and the Sites or Apps, the choices you make and the products
                    and features you use. The personal information we collect
                    can include the following: Name and Contact Data. We collect
                    your first and last name, email address, postal address,
                    phone number, and other similar contact data. Credentials.
                    We collect passwords, password hints, and similar security
                    information used for authentication and account access.
                    Payment Data. We collect data necessary to process your
                    payment if you make purchases, such as your payment
                    instrument number (such as a credit card number), and the
                    security code associated with your payment instrument. All
                    payment data is stored by our payment processor and you
                    should review its privacy policies and contact the payment
                    processor directly to respond to your questions. Social
                    Media Login Data. We provide you with the option to register
                    using social media account details, like your Facebook,
                    Twitter or other social media account. If you choose to
                    register in this way, we will collect the Information
                    described in the section called "HOW DO WE HANDLE YOUR
                    SOCIAL LOGINS" below. All personal information that you
                    provide to us must be true, complete and accurate, and you
                    must notify us of any changes to such personal information.
                    Information automatically collected In Short: Some
                    information – such as IP address and/or browser and device
                    characteristics – is collected automatically when you visit
                    our Sites or Apps. We automatically collect certain
                    information when you visit, use or navigate the Sites or
                    Apps. This information does not reveal your specific
                    identity (like your name or contact information) but may
                    include device and usage information, such as your IP
                    address, browser and device characteristics, operating
                    system, language preferences, referring URLs, device name,
                    country, location, information about how and when you use
                    our Sites or Apps and other technical information. This
                    information is primarily needed to maintain the security and
                    operation of our Sites or Apps, and for our internal
                    analytics and reporting purposes. Like many businesses, we
                    also collect information through cookies and similar
                    technologies.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button sx={{ color: "red" }} onClick={handleClose}>
                    Disagree
                  </Button>
                  <Button
                    sx={{ color: "green" }}
                    onClick={handleClose}
                    autoFocus
                  >
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
