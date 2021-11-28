import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE</h1>
        <p>High Quality is our First Priority</p>

        <p>Copyrights 2021 &copy; Aaquib Dilkash</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://linkedin.com/in/aaquibdilkash" target="blank">LinkedIn</a>
        <a href="https://github.com/aaquibdilkash" target="blank">GitHub</a>
        <a href="https://aaquibdilkashdev.web.app" target="blank">Portfolio</a>
      </div>
    </footer>
  );
};

export default Footer;
