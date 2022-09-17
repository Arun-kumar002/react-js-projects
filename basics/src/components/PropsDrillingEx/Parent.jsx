import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parent = (props) => {
  return (
    <div className='parentComponent'>
        <strong>parent</strong>
        <strong>grant</strong>
        <strong style={{color:'black',float:'right'}}>{props.username}</strong>
        <Child1 username={props.username}/>
        <Child2 username={props.username}/>
    </div>
  )
}

export default Parent