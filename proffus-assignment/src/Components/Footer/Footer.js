import React from "react";
import "./Footer.css";
// import logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="fimg">
                  <img src="https://github.com/priyanshu4705/proffus/blob/master/src/assets/images/logo.png?raw=true" alt="logo" />
        </div>
        <ul className="list_left">
          <li>
            <a href="#support">Support</a>
          </li>
          <li>
            <a href="#about_us">About Us</a>
          </li>
          <li>
            <a href="privacy_policy">Privacy Policy</a>
          </li>
        </ul>
        <ul className="list_right">
          <li>
            <a href="tnc">Terms & Condition</a>
          </li>
          <li>
            <a href="rnr">Return & Refund Policy</a>
          </li>
          <li>
            <a href="snd">Shipping & Delivery Policy</a>
          </li>
        </ul>
      </div>
      <div className="msg">
        Sea Basket | All Rights Reserved | 2021 Copyright
        <br />
        Made by Pankaj chaudhary with love
      </div>
    </div>
  );
}

export default Footer;