import React from 'react'
import {Link} from 'react-router-dom'
const Menu = () => {
  return (
    <ul>
        <li>
            <a href="/">HOME</a>
        </li>
        <li>
         <Link to='/create'>create</Link>
        </li>
        <li>
         <Link to='/getall'>getall</Link>
        </li>
    </ul>
  )
}

export default Menu