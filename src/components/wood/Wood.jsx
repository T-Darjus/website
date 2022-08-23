import React from "react";
import "./wood.css";

const Wood = () => {
  return (
    <section className="wood">
      <div className="main-container">
        <h2 className="heading-primary">The wood we work with</h2>
        <div className="wood__cards">
          <div className="wood__card">
            <div className="card__image">
              <img src="img/wood/wood-1.png" alt="oak wood grain" />
            </div>
            <div className="card__title">Oak</div>
            <ul className="card__specs">
              <li>
                <img
                  className="v-icon"
                  src="img/wood/icon-v.png"
                  alt="check icon"
                />
                <p className="secondary-text">Durability</p>
              </li>
              <li>
                <img
                  className="v-icon"
                  src="img/wood/icon-v.png"
                  alt="check icon"
                />
                <p className="secondary-text">Beautiful texture</p>
              </li>
              <li>
                <img
                  className="v-icon"
                  src="img/wood/icon-v.png"
                  alt="check icon"
                />
                <p className="secondary-text">Water resistance</p>
              </li>
              <li>
                <img
                  className="x-icon"
                  src="img/wood/icon-x.png"
                  alt="x icon"
                />
                <p className="secondary-text">Expensive</p>
              </li>
            </ul>
          </div>
          <div className="wood__card">
            <div className="card__image">
              <img src="img/wood/wood-2.png" alt="buk wood grain" />
            </div>
            <div className="card__title">Buk</div>
            <ul className="card__specs">
              <li>
                <img
                  className="v-icon"
                  src="img/wood/icon-v.png"
                  alt="check icon"
                />
                <p className="secondary-text">Durability</p>
              </li>
              <li>
                <img
                  className="x-icon"
                  src="img/wood/icon-x.png"
                  alt="x icon"
                />
                <p className="secondary-text">Hard to handle</p>
              </li>
            </ul>
          </div>
          <div className="wood__card">
            <div className="card__image">
              <img src="img/wood/wood-3.png" alt="ash wood grain" />
            </div>
            <div className="card__title">Ash</div>
            <ul className="card__specs">
              <li>
                <img
                  className="v-icon"
                  src="img/wood/icon-v.png"
                  alt="check icon"
                />
                <p className="secondary-text">Durability</p>
              </li>
              <li>
                <img
                  className="x-icon"
                  src="img/wood/icon-x.png"
                  alt="x icon"
                />
                <p className="secondary-text">Hard to handle</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wood;
