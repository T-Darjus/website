import React from "react";
import "./questions.css";

const Questions = () => {
  return (
    <section className="questions">
      <div className="main-container">
        <h2 className="heading-primary">Any questions?</h2>
        <div className="questions__content">
          <div className="questions__form">
            <form action="submit" method="get">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                required
              />
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="Your telephone number"
                required
              />
              <textarea
                name="question"
                id="question"
                cols="30"
                rows="6"
                placeholder="You question"
                required
              ></textarea>
              <button type="submit" className="btn">
                Send
              </button>
            </form>
          </div>
          <div className="questions__text">
            <p className="secondary-text">
              Write to us and we will be sure to answer all your questions and
              give you a comprehensive consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
