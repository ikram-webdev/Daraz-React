import React from "react";
import "./header.css";

function Header() {
  return (
    <header class="navbar">
      <div class="container">
        <div class="logo">
          imagine<span>.</span>
        </div>
        <nav>
          <ul class="menu">
            <li>
              <a href="#" class="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li class="dropdown">
              <a href="#">
                About Us <i class="fa-solid fa-angle-down"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">More Free Template</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li class="submenu">
                  <a href="#">
                    More Links <i class="fa-solid fa-angle-right"></i>
                  </a>
                  <ul class="submenu-list">
                    <li>
                      <a href="#">Menu One</a>
                    </li>
                    <li>
                      <a href="#">Menu Two</a>
                    </li>
                    <li>
                      <a href="#">Menu Three</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
