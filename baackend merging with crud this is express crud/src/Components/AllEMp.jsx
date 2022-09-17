import React ,{useEffect,useState} from 'react'
import AxiosInstance from './../helpers/AxiosInstance';
import { Link } from 'react-router-dom';

const AllEMp = () => {
    let [state,setstate]=useState([])
  useEffect(()=>{
    let fetchdb=async()=>{
      let data=  await AxiosInstance.get('/get-emp')
    //   console.log(data.data.payload);
      setstate(data.data.payload)
    }
    fetchdb()
  },[])


  return (
   state.map((x,i)=>{
    return(
        <>
        <h1 key={i}>{x.emp_name}</h1>
        <h1 key={i}>{x.edu}</h1>
        <Link to={`/update/${x._id}`} key={i}>update</Link>
        <button key={i} onClick={async()=>{ await AxiosInstance.delete(`/emp/${x._id}`)
       window.location.assign('/')
      }}>delete</button>
        </>
    )
   })
  )
}

export default AllEMp