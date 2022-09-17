// import React from 'react'

// const Hoc = (WrappedComponent) => {
//   return ()=>{
//     return <WrappedComponent username='arun'/>
//   }
// }

// export default Hoc;
// import React from 'react'

// const Hoc = (WrappedComponent) => {
//   return class kk extends React.Component{
//     render(){
//         return <WrappedComponent username='arun'/>
//     }
//   }
  
// }

// export default Hoc

import React from 'react'

const Hoc = (WrappedComponent) => {
  return ()=>{
    return <WrappedComponent user='arun'/>
  }
}

export default Hoc
