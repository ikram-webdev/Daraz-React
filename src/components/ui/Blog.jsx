import React from "react";
import "./blog.css";
function Blog() {
  return (
    <section class="blog-section" id="blog">
      <h2 class="section-title" data-aos="fade-up">
        Blog Posts
      </h2>

      <div class="blog-container">
        <div class="blog-card" data-aos="fade-up">
          <img
            src="https://preview.colorlib.com/theme/imagine/images/img_1.jpg"
            alt=""
          />
          <div class="blog-content">
            <h3>Make Your Business More Profitable</h3>
            <p class="meta">
              <span>Ham Brook</span> • <span>Jan 18, 2019</span> •
              <span class="category">News</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              eligendi nobis ea maiores sapiente veritatis reprehenderit
              suscipit quaerat rerum voluptatibus a eius.
            </p>
            <a href="#" class="read-more">
              Continue Reading...
            </a>
          </div>
        </div>

        <div class="blog-card" data-aos="fade-up" data-aos-delay="150">
          <img
            src="https://preview.colorlib.com/theme/imagine/images/img_2.jpg"
            alt=""
          />
          <div class="blog-content">
            <h3>Make Your Business More Profitable</h3>
            <p class="meta">
              <span>James Phelps</span> • <span>Jan 18, 2019</span> •
              <span class="category">News</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              eligendi nobis ea maiores sapiente veritatis reprehenderit
              suscipit quaerat rerum voluptatibus a eius.
            </p>
            <a href="#" class="read-more">
              Continue Reading...
            </a>
          </div>
        </div>

        <div class="blog-card" data-aos="fade-up" data-aos-delay="300">
          <img
            src="https://preview.colorlib.com/theme/imagine/images/img_3.jpg"
            alt=""
          />
          <div class="blog-content">
            <h3>Make Your Business More Profitable</h3>
            <p class="meta">
              <span>James Phelps</span> • <span>Jan 18, 2019</span> •
              <span class="category">News</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              eligendi nobis ea maiores sapiente veritatis reprehenderit
              suscipit quaerat rerum voluptatibus a eius.
            </p>
            <a href="#" class="read-more">
              Continue Reading...
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
