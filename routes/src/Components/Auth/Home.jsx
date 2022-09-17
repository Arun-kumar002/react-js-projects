import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <Link to='/' style={{display:'block'}}>home</Link>
        <Link to='/login' style={{display:'block'}}>login</Link>
        <Link to='/register' style={{display:'block'}}>register</Link>
        <Link to='*' style={{display:'block'}}>not</Link>
    </div>
  )
}

export default Home