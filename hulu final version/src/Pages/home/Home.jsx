import React ,{useContext}from 'react'
import Sliders from '../../Components/slider/Sliders'
import { AuthContext } from './../../helpers/contextApi/AuthContext';

const Home = () => {
  let value=useContext(AuthContext)
  console.log(value);
  return (
    <>
    <Sliders/>
    </>
  )
}

export default Home