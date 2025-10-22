import React from "react";
import "./testonomials.css";
function Testonomials() {
  return (
    <section class="testimonials" id="testimonials">
      <h2 class="section-title" data-aos="fade-up">
        Testimonials
      </h2>

      <div class="swiper mySwiper" data-aos="fade-up">
        <div class="swiper-wrapper">
          <div class="swiper-slide testimonial-item">
            <img
              src="https://preview.colorlib.com/theme/imagine/images/person_2.jpg"
              alt="Testimonial 2"
            />
            <p class="quote">
              “Dolores excepturi earum unde iusto. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Consectetur unde reprehenderit
              aperiam quaerat fugiat repudiandae explicabo animi minima fuga.”
            </p>
            <h4>Emily Watson</h4>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default Testonomials;
