// class based
// import React, { Component } from 'react';

// class Courses extends Component {
//      //static probs 
//      static defaultProps={
//         _id:'ty',
//         course_name:'mernstack',
//         trainer:'shashi'
//     }
//     render() {
//         let payload=this.props;
       
//         return (
//             //course json
//     // //   console.log(payload[0])
//     //   <main className='course_container'>
//     //     <div>
//     //        <img src={payload[0].photo} alt="" srcset="" />
//     //        <h1>{payload[0].course_name}</h1>
//     //        <p>{payload[0].trainer}</p>
//     //     </div>
//     //     <div>
//     //        <img src={payload[1].photo} alt="" srcset="" />
//     //        <h1>{payload[1].course_name}</h1>
//     //        <p>{payload[1].trainer}</p>
//     //     </div>
//     //     <div>
//     //        <img src={payload[2].photo} alt="" srcset="" />
//     //        <h1>{payload[2].course_name}</h1>
//     //        <p>{payload[2].trainer}</p>
//     //     </div>
//     //   </main>
//     //default probs
//     <main className="course_container">
//         {/* <div>
//             <h1>{this.props.payload._id}</h1>
//             <h1>{this.props.payload.course_name}</h1>
//             <h1>{this.props.payload.trainer}</h1>
//         </div> */}
//         <div>
//             <h1>{this.props._id}</h1>
//             <h1>{this.props.course_name}</h1>
//             <h1>{this.props.trainer}</h1>
//             <p>
//                 {this.props.children}
//             </p>
//         </div>
//     </main>
     
            
//         )
//     }
// }

// // Courses.defaultProps={
// //     _id:'ty',
// //     course_name:'mernstack',
// //     trainer:'shashi'
// // }
// export default Courses;
//function based
// import React from 'react'

// const Courses = (props) => {
//   return (
//     <div>
//         <h1>{props._id}</h1>
//         <h1>{props.course_name}</h1>
//         <h1>{props.trainer}</h1>
//         <p>{props.children}</p>
//     </div>
//   )
// }
// Courses.defaultProps={
//     _id:'ty',
//     course_name:'js',
//     trainer:'arun'
// }
// export default Courses


//array of values
//  import React from 'react'
 
//  const Courses = (props) => {
//    return props.payload.map(x=>{
//     return <li>{x}</li>
//    })

//  }
 
//  export default Courses;
//boolean values
// import React from 'react'

// const Courses = (props) => {
  
//     if(props.course.available===true){
//      return (
//         <>
//         <h1>{props.course.course_name}</h1>
//         <button style={{background:'green' ,color:'#444'}}>available</button>
//         </>
//      )
//     }
//     else{
//         return (
//             <>
//             <h1>{props.course.course_name}</h1>
//             <button style={{background:'red' ,color:'fff'}}>not available</button>
//             </>
//          )
//     }
  
// }

// function as a prop

// import React from 'react'

// const Courses = (props) => {
//   return (
//     <button onClick={()=>props.dataclick('arun')}>courses</button>
//   )
// }

//render props

// import React from 'react'
import Course from './Course'

// const Courses = (props) => {
//   return props.payload.map(value=>{
//     return <Course {...value}/>
//   })
// }

// export default Courses


//how to use state inside json
// import React from 'react'

// const Courses = (props) => {
//   return (
//   props.course.map(course=>{
//       return < Course {...course}/>
//     })
    
//   )
// }

// export default Courses