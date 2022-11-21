import React from "react";
const Footer = () => {
  return (
    <div class="footer">
      <div class="container">
        <img src={require("../images/logo.png")} alt="Logo" />
        <p>We Are Social</p>
        <div class="social-icons">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fas fa-home"></i>
          <i class="fab fa-linkedin"></i>
        </div>
        <p class="copyright">
          &copy; 2022 <span>Kasper</span> All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
