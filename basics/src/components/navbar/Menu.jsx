import React from 'react'
import Hoc from '../Hoc'
const Menu = (props) => {
  return (
    <div className='menuBlock'>
      <ul>
        <li><a href="">{props.username}</a></li>
        <li>

          <a href="">home</a>
        </li>
        <li>
          <a href="">login</a>
        </li>
        <li>
          <a href="">register</a>
        </li>
      </ul>
    </div>
  )
}

export default Hoc(Menu)