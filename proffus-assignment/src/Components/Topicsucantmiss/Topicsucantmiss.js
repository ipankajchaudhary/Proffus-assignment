import React from 'react'
import Topicsucantmisssections from './Topicsucantmisssections'
import "./Topicsucantmissstyle.css";

const Topicsucantmiss = ({topics}) => {
  return (
    <div className="container">
    <div className="Topics-u-cant-miss-header">Topics you can't miss</div>
    <div className="Topics-u-cant-miss-sections mx-2">
    {topics.map((topic, index) => (
      <Topicsucantmisssections key={index} title={topic.title} desc={topic.desc} image={topic.img-url} />
    ))}
            </div>
            
    </div>
  )
}

export default Topicsucantmiss