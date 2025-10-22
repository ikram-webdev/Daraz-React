import React from "react";
import "./about.css"
function About() {
  return (
    <section class="about" id="about">
      <h2 class="section-title" data-aos="fade-up">
        About Us
      </h2>

      <div class="about-container">
        <div class="about-image" data-aos="fade-right">
          <img
            src="./public/undraw_bookmarks_r6up.svg"
            alt="About Illustration"
          />
        </div>

        <div class="about-content" data-aos="fade-left">
          <h3>Our Mission</h3>
          <p>
            Eos cumque optio dolores excepturi rerum temporibus magni recusandae
            eveniet, totam omnis consectetur maxime quibusdam expedita dolorem
            dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus!
            At maiores, itaque.
          </p>

          <ul>
            <li>
              <i class="fa-solid fa-check"></i> Laborum enim quasi at modi
            </li>
            <li>
              <i class="fa-solid fa-check"></i> Ad at tempore
            </li>
            <li>
              <i class="fa-solid fa-check"></i> Labore quaerat esse
            </li>
          </ul>

          <a href="#" class="btn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
