import React, { Component ,useState,useRef} from 'react';
import Audio from './Audio';

const Audios = (prop) => {
    console.log(prop.music);
  return (
      <div onClick={()=> prop.Onselected(prop.music)} >
      <img src={prop.music.img} alt="" />
      </div>
 
  )
}

export default Audios