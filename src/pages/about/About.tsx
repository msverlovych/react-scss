import React from "react";
import "./about.scss";

import Product from '../../assets/images/Certina-DS-PH200-2.webp';

const About: React.FC = () => {
  return (
    <main className="about">
      <section className="about__header">
        <h1 className="about__title">Do it in one click!</h1>
        <p className="about__subtitle">Discover more about our product</p>
      </section>

      <section className="about__content">
        <article className="about__card">
          <img
            src={Product}
            alt="Product"
            className="about__card-image"
          />
          <div className="about__card-body">
            <h3 className="about__card-title">Our Story</h3>
            <p className="about__card-description">
              We started with a mission to bring innovative solutions to the world. Our
              team is dedicated to providing the best services.
            </p>
            <button
              className="about__card-action-button"
            >
              <a href="https://sass-lang.com" target='_blank'>LEARN MORE</a>
            </button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default About;