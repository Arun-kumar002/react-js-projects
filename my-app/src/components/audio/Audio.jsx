import React, { Component ,useState,useRef} from 'react';
import Audios from './Audios'
const Audio = (prop) => {
    console.log(prop);
  return (
    <div>
        {
            prop.item.map(x=>{
                   return <Audios music={x} Onselected={prop.Onselected} />
              })
        }
    </div>
  )
}

export default Audio










