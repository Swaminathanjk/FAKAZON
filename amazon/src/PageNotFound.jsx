import React from 'react'
import './error.css'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
function PageNotFound() {
  return (
    <div> 
        <button className='error' ><Link to="/">RETURN TO HOME PAGE</Link> </button>
        

    </div>
  )
}

export default PageNotFound 