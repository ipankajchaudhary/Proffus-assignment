import React from 'react'
import Category from './Category'
  import './Categories.css';
const Categories = ({categories}) => {
  return (
    <div className="categories-container">
    <div className="categories-header">CATEGORIES</div>
      <div className="categories-section">
      {categories.map((category, index) => (
        <Category key={index} title={category.title} image={category.img} />
      ))}
      
    </div>
  </div>
  )
}

export default Categories