import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import CreatePost from './components/CreatePost'
import Getall from './components/Getall'
import Menu from './components/Menu'
import Update from './components/Update';
import Delete from './components/Delete';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Menu/>}/>
        <Route path='/create' element={<CreatePost/>} />
        <Route path='/getall' element={<Getall/>} />
        <Route path='/update/:id' element={<Update/>} />
        <Route path='/delete/:id' element={<Delete/>} />

    </Routes>

    </BrowserRouter>
    
  )
}

export default App