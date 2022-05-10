import React from 'react'
import './Haveareadstyle.css';
import { FiArrowRight } from "react-icons/fi";
const Haveareadsections = ({title,desc}) => {
  return (
      <div className='section-container border'>
          <div className="section-header m-3">
            {title}
          </div>
          <div className="section-details m-3">
              {desc}</div>
          <div className="read-more m-4">
              Read more
              <FiArrowRight></FiArrowRight>
          </div>
      </div>
  )
}

export default Haveareadsections