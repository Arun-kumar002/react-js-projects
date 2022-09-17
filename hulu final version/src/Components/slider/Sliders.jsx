import React ,{useContext}from 'react'
import sliderImg from './slider.jpeg'
import Styles from '../../Pages/home/home.module.css'
import { ModelContext } from '../../helpers/ModelContext'

const Sliders = () => {
  let {toggleModel}=useContext(ModelContext)
  return (
    <aside className={Styles.slider}  >
        <article>
            <header>
                <h4>BUNDLE WITH ANY HULU PLAN & SAVE</h4>
            </header>
            <main>
                <img src='https://www.hulu.com/static/hitch/s3/attachments/ckdz36xqi7zz019ym0b2seyqk-dplus-logo-0-1-2-0.full.png' alt="" />

                
            </main>
            <footer>
                <p>Get endless entertainment, live sports, and the shows and movies you love.</p>
                <button>GET THE DISNEY BUNDLE</button>
                <p> What's included? <a >See Bundle terms.</a> </p>
                <a href="">Sign up for Hulu only</a>
            </footer>
        </article>
    </aside>
  )
}

export default Sliders