import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <Link to='/create-emp'>create</Link>
            </li>
            <li>
                <Link to='/all-emp'>all emp</Link>
            </li>
        </ul>
    </div>
  )
}

export default Home