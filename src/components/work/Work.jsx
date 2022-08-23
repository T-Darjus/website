import React from "react";
import { useState, useEffect } from "react";
import "./work.css";
import data from "./workData";

const Work = () => {
  const [images] = useState(data);
  const [index, setIndex] = useState(0);
  const [imgSrc, setImgSrc] = useState(images[0]);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
    setImgSrc(images[index]);
  }, [index, images]);

  const dots = [];
  for (let i = 0; i < images.length; i++) {
    if (index === i) {
      dots.push("slider__dot  dot--active");
    } else {
      dots.push("slider__dot");
    }
  }

  return (
    <section className="work">
      <div className="main-container">
        <h2 className="heading-primary">Our work</h2>
        <div className="slider">
          <div className="slider__image">
            <img src={imgSrc} alt="wooden furniture" />
          </div>
          <div className="slider__dots">
            {dots.map((element, elementIndex) => {
              return (
                <div
                  key={elementIndex}
                  className={element}
                  onClick={() => setIndex(elementIndex)}
                ></div>
              );
            })}
          </div>
          <button
            type="button"
            className="slider__btn btn--left"
            onClick={() => setIndex(index - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="left-arrow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <button
            type="button"
            className="slider__btn btn--right"
            onClick={() => setIndex(index + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="right-arrow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
