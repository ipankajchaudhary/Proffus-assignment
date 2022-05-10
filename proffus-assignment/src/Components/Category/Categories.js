import React from 'react'
import Category from './Category'
  import './Categories.css';
const Categories = () => {
  return (
    <div className="categories-container">
    <div className="categories-header">CATEGORIES</div>
    <div className="categories-section">
        <Category />
        <Category />
        <Category/>
    </div>
  </div>
  )
}

export default Categories