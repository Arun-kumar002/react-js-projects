import React from 'react'
import Parent from './Parent';
import propTypes from 'prop-types'
const GrantParant = (props) => {
  return (
    <div className='GrantParantComponent'>
        <strong>grant</strong>
        <strong style={{color:'black',float:'right'}}>{props.username}</strong>
        <Parent username={props.username}/>
    </div>
  )
}

export default GrantParant;

GrantParant.propTypes={
    username:propTypes.string,
}