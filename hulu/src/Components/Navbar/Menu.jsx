import React,{useContext} from 'react'
import Styles from './navbar.module.css'
import { ModelContext } from '../../helpers/ModelContext'
const Menu = () => {
  let {toggleModel}=useContext(ModelContext)
  return (
    <div className={Styles.menu}>
        <ul>
            <li><a onClick={toggleModel}>login</a></li>
        </ul>
    </div>
  )
}

export default Menu