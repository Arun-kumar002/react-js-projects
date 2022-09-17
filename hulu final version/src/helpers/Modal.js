import React ,{useContext}from 'react'
import ReactDOM from 'react-dom'
import{Link} from 'react-router-dom'
import Styles from '../Pages/home/home.module.css'
import {ModelContext} from './ModelContext'

const Modal = ({children}) => {
  let {open,toggleModel}=useContext(ModelContext)
  if(!open){
    console.log('not');
  }
else{
 return ReactDOM.createPortal(<>
    {
      children
    }
  </>,document.getElementById('modal'))}
}

export default Modal