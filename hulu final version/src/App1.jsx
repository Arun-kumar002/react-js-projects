import React ,{useReducer}from 'react'
import useFetch from './Components/custom/useFetch';






import { Pagination } from 'react-pagination';

const App1 = () => {
  return (
    <div>
      <Pagination/>
    </div>
  )
}

export default App1
//custom hooks


// const App1 = () => {
//  let state=useFetch('https://api.github.com/users')
//  console.log(state);
//   return (
//     <div>
//       {
//         state.map(x=>{
//           return <li>{x.login}</li>
//         })
//       }
//     </div>
//   )
// }

// export default App1
// const App1 = () => {
//   let initial={
//       email:'',
//       password:''
//   }
//   let reducer=(state,action)=>{
//     switch(action.type){
//       case 'input':
//           return {...state,[action.payload.key]:action.payload.value}
    
//       default:
//           new Error('chombu')
//     }
//   }
//   let [state,dispatch]=useReducer(reducer,initial)
//   let submit=(e)=>{
//       e.preventDefault()
//       console.log(state);
//   }
// return (
//   <div>
//       <form onSubmit={submit}>
//           <div><input type="email" name="email" id="" onChange={(e)=>dispatch({type:'input',payload:{value:e.target.value,key:e.target.name}})}/></div>
//           <div><input type="password" name="password" id=""  onChange={(e)=>dispatch({type:'input',payload:{value:e.target.value,key:e.target.name}})} /></div>
//           <div><button>submit</button></div>
//       </form>
//   </div>
// )
// }

// export default App1
// const App1 = () => {
//     let initial={
//         email:'',
//         password:''
//     }
//     let reducer=(state,action)=>{
//       switch(action.type){
//         case 'email':
//             return {...state,email:action.payload}
//         case 'password':
//             return {...state,password:action.payload}
//         default:
//             new Error('chombu')
//       }
//     }
//     let [state,dispatch]=useReducer(reducer,initial)
//     let submit=(e)=>{
//         e.preventDefault()
//         console.log(state);
//     }
//   return (
//     <div>
//         <form onSubmit={submit}>
//             <div><input type="email" name="email" id="" onChange={(e)=>dispatch({type:'email',payload:e.target.value})}/></div>
//             <div><input type="password" name="password" id=""  onChange={(e)=>dispatch({type:'password',payload:e.target.value})} /></div>
//             <div><button>submit</button></div>
//         </form>
//     </div>
//   )
// }

// export default App1

//use reducer
// const App1 = () => {
//     let initialstate={
//         count:0
//     }
//     let reducer=(state,action)=>{
//         // if(action.type==='increment'){
//         //     return {count:state.count+1}
//         // }
//         // else if(action.type==='decrement'){
//         //     return {count:state.count-1}
//         // }
//         // else if(action.type==='reset'){
//         //     return {count:0}
//         // }
//         switch(action.type){
//             case 'increment':
//                 return {count:state.count+1}
//             case 'decrement':
//                 return {count:state.count-1}
//             case 'reset':
//                 return {count:0}
//             default:
//                 return new Error('chombu')
//         }
//     }
//     let[counter,dispatch]=useReducer(reducer,initialstate)

//   return (
//     <div>
//         <h1>{counter.count}</h1>
//         <button onClick={()=>dispatch({type:'increment'})}>increment</button>
//         <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
//         <button onClick={()=>dispatch({type:'reset'})}>reset</button>
//     </div>
//   )
// }

// export default App1