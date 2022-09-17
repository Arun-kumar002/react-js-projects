import React from 'react'

const Videos = React.forwardRef((props,ref) => {
  return (
    <div>
        <video src={props.state} ref={ref} ></video>
        <button onClick={props.playfun}>{props.play === true ? 'pause':'play'}</button>
    </div>
  )
})

export default Videos