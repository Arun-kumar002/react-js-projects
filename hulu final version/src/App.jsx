import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/home/Home'
import Modal from './helpers/Modal'
import ModelProvider from './helpers/ModelContext'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register';

//flash msg
// import {toast}  from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './helpers/contextApi/AuthContext'
import HuluRoutes from './helpers/routes/HuluRoutes';
import Sliders from './Components/slider/Sliders';
import MyAccount from './Components/Profile/MyAccount';
import Movies from './Components/movies/Movies'
import CreateProfile from './Components/forms/CreateProfile'
import UploadProfile from './Components/Profile/UploadProfile'
import UpdateProfile from './Components/Profile/UpdateProfile';
import ForgotPass from './Components/Auth/ForgotPass';
import UpdatePassword from './Components/Profile/UpdatePassword';
const App = () => {
  return (
         //context api

        <AuthProvider>
        <BrowserRouter>
         <ModelProvider >
          <Navbar/>
          {/* forward refs */}
          {/* <Movies/> */}
          {/* <CreateProfile/>  */}

         {/* like component after */}
          {/* <ToastContainer theme='dark'/> */}
          <Modal >
            <Login/>
          </Modal>
      {/* normal */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/auth/register' element={<Register/>} />
          <Route path='/auth/login' element={<Login/>} />
          <Route path='/auth/MyAccount' element={<MyAccount/>} >
               <Route path='/auth/MyAccount/auth/uploadphoto' element={<UploadProfile/>}/>
               <Route path='/auth/MyAccount/updateprofile' element={<UpdateProfile/>}/>
               <Route path='/auth/MyAccount/forgotPass' element={<ForgotPass/>}/>
               <Route path='/auth/MyAccount/updatePass' element={<UpdatePassword/>}/>
          </Route>

        </Routes>
        {/* useroutes hook */}
        {/* <HuluRoutes/> */}


        </ModelProvider>
        </BrowserRouter>
        </AuthProvider>
        
    
  )
}

export default App