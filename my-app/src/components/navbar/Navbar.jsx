import Logo from "./Logo"
import Menu from "./Menu"


const Navbar = () => {
  return (
    <nav className='navbar'>
        <article>
           <Logo />
           <Menu />
        </article>
    </nav>
  )
}

export default Navbar