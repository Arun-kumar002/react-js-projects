import React from 'react'

const Course = ({course_name,trainer,photo,language}) => {
  return (
    
    <main className='course_container'>
       <div>
        <img src={photo} alt="" />
         <h1>{course_name}</h1>
         <p>{trainer}</p>
       </div>
    </main>
  )
}

export default Course;

//individual obj page