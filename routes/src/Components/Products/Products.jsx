import React from 'react'
import {useParams} from 'react-router-dom'
const Products = () => {
    let {id}=useParams()
    // console.log(name);
  return (
    <div>Products: {id}</div>
  )
}

export default Products