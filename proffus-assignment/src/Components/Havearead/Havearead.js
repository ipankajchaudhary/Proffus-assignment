import React from 'react'
import './Haveareadstyle.css';
import Haveareadsections from './Haveareadsections';
const Havearead = ({har}) => {
  return (
    <div className="container">
      <div className="have-a-read-header">Have A Read</div>
      <div className="sections mx-2">
      {har.map((havearead, index) => (
        <Haveareadsections key={index} title={havearead.title} desc={havearead.desc} />
      ))}
              </div>
              
      </div>
  )
}

export default Havearead