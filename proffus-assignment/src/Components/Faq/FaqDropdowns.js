import React, { useState, useRef, useEffect } from "react";
import "./Faqstyle.css";
import { FiPlus } from "react-icons/fi";

const FaqDropdowns = () => {
    const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";  
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };
  return (
    <div className="App">
    <div>
      <button
        className={`question-section ${active}`}
        onClick={toggleAccordion}
      >
        <div>
          <div className="question-align">
            <h4 className="question-style">
            Velit venenatis pretium mattis consectetur massa pretium mattis ? 
            </h4>
            <FiPlus
              className={
                active ? `question-icon rotate` : `question-icon`
              }
            />
          </div>
          <div
            ref={contentRef}
            className={active ? `answer answer-divider` : `answer`}
          >
            <p>Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.</p>
          </div>
        </div>
      </button>
    </div>
  </div>
  )
}

export default FaqDropdowns