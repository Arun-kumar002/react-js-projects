import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import AxiosInstance from './../helpers/AxiosInstance';

const UpdateEmp = () => {
    let {id}=useParams()
    let navigate=useNavigate()
    let [state,setstate]=useState({
        emp_id:'',
        emp_name:'',
        emp_exp:'',
        emp_edu:'',
        emp_city:'',
        emp_designation:'',
        emp_gender:'',

    })
    let { emp_id,
        emp_name,
        emp_exp,
        emp_edu,
        emp_city,
        emp_designation,
        emp_gender}=state;
    useEffect(()=>{
        try {
            let empdata=async()=>{
            let data= await AxiosInstance.get(`/emp/${id}`)
            console.log(data);
            setstate(data.data.payload)
            }
            empdata()
        } catch (error) {
            console.log(error);
        }
    })
    let change=e=>{
        let {name,value}=e.target;
        setstate({...state,[name]:value})
    }
    let submit= async e=>{
        e.preventDefault()
        try {
            let payload={
                emp_id,
        emp_name,
        emp_exp,
        emp_edu,
        emp_city,
        emp_designation,
        emp_gender
            }
            console.log(payload);
        await AxiosInstance.put(`/emp/${id}`,payload)
        navigate('/')
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <form onSubmit={submit}>
        <input type="text" name="emp_id" id=""  value={emp_id} onChange={change} />
        <input type="text" name="emp_name" id="" value={emp_name} onChange={change} />
        <input type="text" name="emp_exp" id="" value={emp_exp} onChange={change}/>
        <input type="text" name="emp_edu" id="" value={emp_edu} onChange={change}/>
        <input type="text" name="emp_city" id="" value={emp_city} onChange={change} />
        <input type="text" name="emp_designation" id=""  value={emp_designation} onChange={change}/>
        <div value={emp_gender} onChange={change}>
        <input type="radio" name="gender" id=""  value='male'/>male
        <input type="radio" name="gender" id="" value='female' />female

        </div>
        <button >createEMp</button>
    </form>
  )
}

export default UpdateEmp