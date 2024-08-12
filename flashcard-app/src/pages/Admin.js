import React from 'react'
import { Link } from 'react-router-dom';
import Add from '../components/Add';
import "../components/admin.css"
const Admin = () => {
  return (
    <div className='adddel'>
      <h1>You are admin , you can delect and add the flashcards</h1>
      <Link to="/add">Click here to add Flashcard</Link>
      <Link to="/delete">Click here to delete flashcards</Link>
    </div>
  )
}

export default Admin
