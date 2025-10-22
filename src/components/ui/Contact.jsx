import React from "react";
import "./contact.css";
function Contact() {
  return (
    <section class="contact-section">
      <div class="contact-heading">
        <h1>Contact Us</h1>
      </div>
      <div class="contact-container">
        <h2>Contact Form</h2>

        <form class="contact-form">
          <div class="row">
            <div class="input-box">
              <label>First Name</label>
              <input type="text" placeholder="" />
            </div>
            <div class="input-box">
              <label>Last Name</label>
              <input type="text" placeholder="" />
            </div>
          </div>

          <div class="input-box">
            <label>Email</label>
            <input type="email" placeholder="" />
          </div>

          <div class="input-box">
            <label>Subject</label>
            <input type="text" placeholder="" />
          </div>

          <div class="input-box">
            <label>Message</label>
            <textarea
              rows="5"
              placeholder="Leave your message here..."
            ></textarea>
          </div>

          <button type="submit" class="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
