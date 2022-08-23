import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about">
      <div className="main-container">
        <div className="about__container">
          <div className="about__text-box">
            <h2 className="heading-primary">About us</h2>
            <p className="secondary-text">
              <strong>BIO CWT</strong> - We manufacture solid wood products
              according to individual drawings. We make chairs, armchairs,
              wardrobes, beds and much more in our own workshop, equipped with
              all the necessary industrial equipment.
            </p>
          </div>
          <div className="about__images">
            <div className="images--left-col">
              <img src="img/about/about-1.png" alt="motivated carpenter" />
            </div>
            <div className="images--right-col">
              <img src="img/about/about-2.png" alt="person taking measure" />
              <img src="img/about/about-3.png" alt="man drawing furniture" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
