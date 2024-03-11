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
        <h1>ShopEasy</h1>
        <p>All products at your Doorstep</p>

        <p>Copyrights 2023 &copy; Trishank</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/trishank03/">Instagram</a>
        <a href="https://www.youtube.com/channel/UCDLj4FMlae0i_f1Qqh_vClA">Youtube</a>
        <a href="https://www.linkedin.com/in/trishank-t-033718242/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;