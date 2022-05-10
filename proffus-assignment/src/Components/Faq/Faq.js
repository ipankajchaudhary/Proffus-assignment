import React, { useState, useRef, useEffect } from "react";
import "./Faqstyle.css";
import { FiPlus } from "react-icons/fi";
import FaqDropdowns from "./FaqDropdowns";

export default function Faq() {
  // console.log(faqs);
  const faqs = [
    {
      ques: "Velit venenatis pretium mattis consectetur massa pretium mattis ?",
      ans: "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.",
    },
    {
      ques: "Velit venenatis pretium mattis consectetur massa pretium mattis ?",
      ans: "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.",
    },
    {
      ques: "Velit venenatis pretium mattis consectetur massa pretium mattis ?",
      ans: "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.",
    },
  ];
  return (
    <>
      <div className="faq-container">
        <br />
        <div className="faq-header">FAQ</div>
        <div className="dropdowns mx-2">
          {faqs.map((faq, index) => (
            <FaqDropdowns key={index} ques={faq.ques} ans={faq.ans} />
          ))}
          {/* <FaqDropdowns />
          <FaqDropdowns />
      <FaqDropdowns/>*/}
              </div>
      </div>
    </>
  );
}
