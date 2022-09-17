import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Auth/Home'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import Navbar from './Components/Navbar/Navbar'
import Notfound from './Components/Notfound/Notfound'
import Products from './Components/Products/Products'
//router
//version 6


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/products/:id' element={<Products/>}/>
        <Route path='*' element={<Notfound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
//version 5
// import {BrowserRouter ,Switch ,Route} from 'react-router-dom'
// const App = () => {
//   return (
//    <BrowserRouter>
//    <Switch>
//     {/* <Route path='/' component={Home} exact/> */}
//     {/* another way */}
//      <Route path='/' exact>
//         {/* actual 5 version */}
//         <Home/>
//      </Route>
//     <Route path='/login' component={Login} exact/>

//     {/* 4 version */}
//     <Route path='/register' component={Register} exact/>
//     <Route path='*' component={Notfound} exact/>
//    </Switch>
//    </BrowserRouter>
//   )
// }

// export default App