import React from 'react'
import './Categories.css';


const Category = ({title, image}) => {
  return (
    <div className="category-container">
    <img src={image} />
    <div className="category-title">{title}</div>
  </div>
  )
}

export default Category