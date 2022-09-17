import React from 'react'
import Hoc from '../Hoc'
const Logo = (probs) => {
  console.log(probs.user);
  return (
    <>
    {/* <p>{probs.company}</p> */}
    <div className='logoBlock' ><img src="https://www.testyantra.com/sites/default/files/tylog1.png" alt="" /></div>
    </>
  )
}

export default Hoc(Logo)