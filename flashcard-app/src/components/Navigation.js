import React from 'react'
import { Link } from 'react-router-dom';
import "../components/nav.css"
const Navigation = () => {
  return (
    <div>
      
      <ul className='navbar'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/flashcards">Flashcards</Link></li>
        <li><Link to="/Admin">Admin <span>click here</span></Link></li>
      </ul>
    
    </div>
  )
}

export default Navigation
