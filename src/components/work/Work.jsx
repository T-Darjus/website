import React from "react";
import { useState, useEffect } from "react";
import "./work.css";
import data from "../../data/workData";
import ArrowLeft from "../icon/ArrowLeft";
import ArrowRight from "../icon/ArrowRight";

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
        <div className="slider" id="slider">
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
            <ArrowLeft />
          </button>
          <button
            type="button"
            className="slider__btn btn--right"
            onClick={() => setIndex(index + 1)}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
