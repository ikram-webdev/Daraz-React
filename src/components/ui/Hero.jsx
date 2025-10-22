import React from "react";
import "./hero.css";
function Hero() {
  return (
    <section class="hero">
      <div class="hero-content" data-aos="fade-right">
        <h1>
          Make Your Business
          <br />
          More Profitable
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          assumenda ea quo cupiditate facere deleniti fuga officia.
        </p>
        <a href="#" class="btn">
          Get Started
        </a>
      </div>

      <div class="hero-image" data-aos="fade-left">
        <img src="./public/undraw_investing_7u74.svg" alt="Business Growth" />
      </div>
    </section>
  );
}

export default Hero;
