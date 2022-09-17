import userEvent from '@testing-library/user-event'
import React,{useState,useRef} from 'react'
import Imges from './Imges'
import master from'./master.mp4'
import Videos from './Videos'
let image ='https://media.istockphoto.com/photos/side-view-silhouette-of-business-man-isolate-on-white-picture-id1317783028?b=1&k=20&m=1317783028&s=170667a&w=0&h=SEjjAfhfDTShqwtjCFPGpl92oFlvH5prZf3nst5x9dY='


const Movies = () => {
    let [state,setState]=useState(master)
    let [play,setplay]=useState(false)
    let videoRef=useRef()
    let imgRef=useRef()
    let [img,setImg]=useState(image)
    let playpause=()=>{
        // console.log('im');
        setplay(!play)
        if(play=== true){
           
            videoRef.current.play()
        }
        else{
            videoRef.current.pause()
        }
    }
  return (
    <>
    {/* <Videos  ref={videoRef} playfun={playpause} play={play} state={state} /> */}
    <Imges ref={imgRef} img={img}/>
    </>
  )
}

export default Movies