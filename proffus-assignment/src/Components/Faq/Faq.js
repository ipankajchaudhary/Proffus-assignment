import React, { useState, useRef, useEffect } from "react";
import "./Faqstyle.css";
import { FiPlus } from "react-icons/fi";
import FaqDropdowns from "./FaqDropdowns";

export default function Faq({ faqs }) {
  console.log(faqs);
  return (
    <>
      <div className="faq-container">
        <br />
        <div className="faq-header">FAQ</div>
        <div className="dropdowns mx-2">
          {faqs.map((faq, index) => (
            <FaqDropdowns key={index} ques={faq.ques} ans={faq.ans} />
          ))}
        </div>
      </div>
    </>
  );
}
