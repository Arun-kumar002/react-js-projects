import React from 'react'

import Logo from './Logo'
import Styles from './navbar.module.css'
import Menu from './Menu';
const Navbar = () => {
  return (
   <section id={Styles.navbarBlock}>
    <article>
        <Logo/>
        <Menu/>
    </article>
   </section>
  )
}

export default Navbar