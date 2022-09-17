import React ,{useRef}from 'react'
import Input from './Input'

const CreateProfile = () => {
    let userRef=useRef()
    let passRef=useRef()
    let getdetails=(e)=>{
        e.preventDefault()
        let user=userRef.current.value
        let pass=passRef.current.value
        console.log({user,pass});
    }
  return (
    <div>
        <form >
            <Input type='text' name='user' ref={userRef}/>
            <Input type='password' name='password' ref={passRef}/>
            <button onClick={getdetails}>submit</button>
        </form>
    </div>
  )
}

export default CreateProfile