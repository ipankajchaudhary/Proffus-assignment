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
      <div className="glance">
      <h3>A GLANCE AT OUR PRODUCTS</h3>
      <img src="https://github.com/ipankajchaudhary/Proffus-assignment/blob/main/proffus-assignment/public/images/glance.png?raw=true" alt="glance" />
    </div>
  </div>
  )
}

export default Categories