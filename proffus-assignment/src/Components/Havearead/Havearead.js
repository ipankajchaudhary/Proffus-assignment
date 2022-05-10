import React from 'react'
import './Haveareadstyle.css';
import Haveareadsections from './Haveareadsections';
const Havearead = () => {
  return (
    <div className="container">
      <div className="have-a-read-header">Have A Read</div>
      <div className="sections mx-2">
                  <Haveareadsections/>
                  <Haveareadsections/>
                  <Haveareadsections/>
              </div>
              
      </div>
  )
}

export default Havearead