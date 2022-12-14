import React from "react";
import logo from "../images/logo.png"

const Layout = () => {
  return (
    <>
      <header>
        <div class="container">
          <a href="#" class="logo">
            <img src={logo} alt="Logo" />
          </a>
          <nav>
            <i class="fas fa-bars toggle-menu"></i>
            <ul>
              <li>
                <a class="active" href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div class="landing">
        <div class="overlay"></div>
        <div class="text">
          <div class="content">
            <h2>
              Hello World!
              <br />
              We Are Kasper We Make Art.
            </h2>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at
              sem. Mauris blandit aliquet elit, eget tincidunt.
            </p>
          </div>
        </div>
        <i class="fas fa-angle-left change-background fa-2x"></i>
        <i class="fas fa-angle-right change-background fa-2x"></i>
        <ul class="bullets">
          <li></li>
          <li class="active"></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Layout;
