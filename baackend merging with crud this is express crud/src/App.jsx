import React from 'react'

import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import CreatePost from './Components/CreatePost';
import UpdateEmp from './Components/UpdateEmp';
import AllEMp from './Components/AllEMp';
const App = () => {
  return (
         //context api
       
        <BrowserRouter>
      
          <Navbar/>
          
      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create-emp' element={<CreatePost/>} />
          <Route path='/all-emp'  element={<AllEMp/>} />
          <Route path='/update/:id' element={<UpdateEmp/>} />
        </Routes>
       
        </BrowserRouter>
        
    
  )
}

export default App