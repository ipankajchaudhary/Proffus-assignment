import React, { useState, useRef, useEffect } from "react";
import "./Faqstyle.css";
import { FiPlus } from "react-icons/fi";
import FaqDropdowns from "./FaqDropdowns";

export default function Faq({ data }) {
  console.log(data);
  return (
    <>
      <div className="faq-container">
        <br />
              <div className="faq-header">FAQ</div>
        <div className="dropdowns mx-2">
        {/*data.map((data, index) => (
          <FaqDropdowns key={index} ques={data.faq.ques} ans={data.faq.ans} />
        ))*/}
          <FaqDropdowns />
          <FaqDropdowns />
          <FaqDropdowns/>
              </div>
      </div>
    </>
  );
}
