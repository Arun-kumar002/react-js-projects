import React from 'react'

const Imges = (props,ref) => {
  return (
    <div>
        <img src={props.img} alt="" ref={ref} />
    </div>
  )
}

export default React.forwardRef(Imges)