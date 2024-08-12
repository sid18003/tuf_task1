import React from 'react'
import { Link } from 'react-router-dom';
import "../components/Add.css"
const Add = () => {
  return (
    <div className='center'>
      <h1>Enter the details to add</h1>
      <div className='adding'>
        <input type='text' placeholder='Enter the question here'></input>
        <input type="text" placeholder='Enter answer here'></input>
        <button>Submit</button>
       </div>
    </div>
  )
}


const Delete = () =>{
    return (
        <div>
            This is delete
        </div>
    )
}

export default Add

