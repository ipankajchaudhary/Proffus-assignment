import React from 'react'
import Category from './Category'
  import './Categories.css';
const Categories = ({cat}) => {
  return (
    <div className="categories-container">
    <div className="categories-header">CATEGORIES</div>
      <div className="categories-section">
      {cat.map((category, index) => (
        <Category key={index} title={category.title} image={category.img} />
      ))}
      
    </div>
  </div>
  )
}

export default Categories