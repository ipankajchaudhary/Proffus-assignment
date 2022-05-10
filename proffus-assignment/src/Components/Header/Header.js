import "./HeaderStyle.css";
import React from "react";
// import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="img">
  <img src="https://github.com/priyanshu4705/proffus/blob/master/src/assets/images/logo.png?raw=true" alt="logo" />
      </div>
      <div className="list">
        <ul>
          <li>
            <a href="#category">Category</a>
          </li>
          <li>
            <a href="#faqs">FAQs</a>
          </li>
          <li>
            <a href="#cart">My Cart</a>
          </li>
          <li>
            <button className="loginbtn">Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;