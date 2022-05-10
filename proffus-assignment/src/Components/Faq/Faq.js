import React, { useState, useRef, useEffect } from "react";
import "./Faqstyle.css";
import { FiPlus } from "react-icons/fi";
import FaqDropdowns from "./FaqDropdowns";

export default function Faq() {
  return (
    <>
      <div className="container">
        <br />
              <div className="faq-header">FAQ</div>
              <div className="dropdowns mx-2">
                  <FaqDropdowns/>
                  <FaqDropdowns/>
                  <FaqDropdowns/>
              </div>
      </div>
    </>
  );
}
