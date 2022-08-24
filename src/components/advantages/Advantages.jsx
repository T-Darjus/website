import React from "react";
import "./advantages.css";

const Advantages = () => {
  return (
    <section className="advantages">
      <div className="main-container">
        <h2 className="heading-primary">
          Advantages <br /> working with us
        </h2>
        <div className="advantages__content">
          <iframe
            width="600"
            height="400"
            src="https://www.youtube.com/embed/WNpAn_KtVGw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="advantages__text-column">
            <p className="secondary-text">In-house carpentry production</p>
            <p className="secondary-text">
              We only treat wood with environmentally friendly and safe products
            </p>
            <p className="secondary-text">
              Prices from the manufacturer, no extra charges
            </p>
          </div>
        </div>
        <button className="btn">Receive a consultation</button>
      </div>
    </section>
  );
};

export default Advantages;
