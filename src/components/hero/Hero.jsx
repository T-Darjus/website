import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="main-container">
        <div className="hero__container">
          <div className="hero__textbox">
            <h1 className="heading-primary">Solid wood products</h1>
            <p className="hero__text">
              Oak, beech, ash from <br /> <strong>600 eur</strong> per m3
            </p>
            <button className="btn">Order</button>
          </div>
          <div className="hero__gallery">
            <div className="hero__gallery--column-left">
              <img src="img/hero/hero-img-2.png" alt="wood stairs" />
            </div>
            <div className="hero__gallery--column-right">
              <img
                src="img/hero/hero-img-1.png"
                alt="human working with wood"
              />
              <img src="img/hero/hero-img-3.png" alt="wood table" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
