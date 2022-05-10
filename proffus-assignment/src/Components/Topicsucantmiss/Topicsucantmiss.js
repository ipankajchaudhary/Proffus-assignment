import React from 'react'
import Topicsucantmisssections from './Topicsucantmisssections'
import "./Topicsucantmissstyle.css";

const Topicsucantmiss = () => {
  return (
    <div className="container">
    <div className="Topics-u-cant-miss-header">Topics you can't miss</div>
    <div className="Topics-u-cant-miss-sections mx-2">
                <Topicsucantmisssections/>
                <Topicsucantmisssections/>
            </div>
            
    </div>
  )
}

export default Topicsucantmiss