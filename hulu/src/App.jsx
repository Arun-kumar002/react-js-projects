import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/home/Home'
import Modal from './helpers/Modal'
import ModelProvider from './helpers/ModelContext'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register';
const App = () => {
  return (
         //context api
       
        <BrowserRouter>
         <ModelProvider >
          <Navbar/>
          <Modal >
            <Login/>
             
          </Modal>
      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/auth/register' element={<Register/>} />
        </Routes>
        </ModelProvider>
        </BrowserRouter>
        
    
  )
}

export default App