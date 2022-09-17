import React ,{useEffect,useState}from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import AxiosInstance from './helper/AxiosInstance';

const Getall = () => {
    let navigate=useNavigate()
    let [state,setstate]=useState([])
    useEffect(()=>{
        let fetchdata=async()=>{
          let data= await AxiosInstance.get('/posts')
          setstate(data.data)
        }
        fetchdata()
    },[])
  return (
    <div>
     {
        state.map(x=>{
           return(<>
            <h1>{x.user}</h1>
            <h1>{x.email}</h1>
            <Link to={`/update/${x.id}`}>update</Link>
            <button onClick={async(e)=>{
                 await AxiosInstance.delete(`/posts/${x.id}`)
                 window.location.assign('/getall')
            }} >delete</button>
            </>
           )
        })
     }
    </div>
  )
}

export default Getall