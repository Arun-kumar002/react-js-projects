import React, { useContext } from 'react'
import Styles from '../../Pages/home/home.module.css'
import { Link } from 'react-router-dom'
import { ModelContext } from './../../helpers/ModelContext'
import { AiOutlineClose } from 'react-icons/ai'
const Login = () => {
  let { open, toggleModel } = useContext(ModelContext)

  return (
    <section className={Styles.ModelBlock}>
      <article>
        <form action="" method="post">
          <div>
            <h1>
              Log In
              <span onClick={toggleModel} className={Styles.xmark}>
                <AiOutlineClose />
              </span>
            </h1>
          </div>
          <div>
            <label htmlFor="email">EMAIL </label>
            <input type="text" id="email" placeholder="" />
          </div>
          <div>
            <label htmlFor="password">PASSWORD </label>
            <input type="password" id="password" placeholder="" />
          </div>
          <div>
            <Link to="/">Forgot your email or password?</Link>
            <button>LOG IN</button>
          </div>
          <div>
            <h1>Do you have account <Link to='/auth/register' onClick={toggleModel}>start with free trail</Link> </h1>
          </div>
        </form>
      </article>
    </section>
  )
}

export default Login
