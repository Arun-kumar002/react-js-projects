import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './../../Pages/home/Home';
import Register from './../../Components/Auth/Register';
import MyAccount from './../../Components/Profile/MyAccount';

const HuluRoutes = () => {
 let huluRoutesPart=useRoutes([
    {path:'/',element:<Home/>},
    {path:'/auth/register',element:<Register/>},
    {path:'/auth/myaccount',element:<MyAccount/>},

 ])
}

export default HuluRoutes