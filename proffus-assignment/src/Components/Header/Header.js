import React from "react";

const Header = () => {
  return (
      <div className="container">
          <div className="logo left-container">
              Seabasket
          </div>
          <div className="right-container">
              <div className="category">
                  Category
              </div>
              <div className="faq">
              Faq</div>
              <div className="mycart">
                  Mycart
              </div>
              <div className="login">
                  <button>Login</button>
              </div>
          </div>
      </div>
  );
};

export default Header;
