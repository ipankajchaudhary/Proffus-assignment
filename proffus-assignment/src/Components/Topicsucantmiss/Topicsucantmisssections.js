import React from 'react'

const Topicsucantmisssections = ({title,desc, img}) => {
  return (
      <div className='Topics-u-cant-miss-section-container border mb-4'>
          <div className="left-container">
          <div className="Topics-u-cant-miss-section-header m-3">
            {title}
          </div>
          <div className="Topics-u-cant-miss-section-details m-3">
              {desc}</div>
          <div className="Topics-u-cant-miss-read-more m-4">
              Read more
              </div>
          </div>
          <div className="right-container">
            <img src={img} alt="" />
          </div>
      </div>
  )
}

export default Topicsucantmisssections