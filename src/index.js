import ReactDOM  from "react-dom/client";
import React from 'react' ;
import App from "./App";
// import { Fragment } from "react";
//native elements
// let section=React.createElement('section',{id:'navsection'},React.createElement('article',{className:"container"},React.createElement('div',{id:'logoBlock'},'logo'),React.createElement('div',{id:'menuBlock'},'menuBlock')))
//jsx 
// let section=(
// <section id="navblock">
//     <article className="container">
//         <div className="logoblock">logo</div>
//         <div className="menublock">menu</div>
//     </article>
// </section>
// )
//fragment
// let section=(
//     <>
//     <React.Fragment key='arun'>
//     <h1>hello</h1>
//     <h1>hello</h1>
//     <Fragment/>
//     <Fragment key='pv'>
//     <h1>hello</h1>
//     <h1>hello</h1>
//     <Fragment/>
//     </>
// )
//jsx expression
// let x=10
// let y=20
// let section=(
//     <h1>{x+y}</h1>
// )
//common js
// const react=require('react')
// const ReactDOM=require('react-dom/client')
//class based component syntax
// class App extends React.Component{
//     render(){
//         return(<>
//          <h1>hello component</h1>
//         </>)
//     }
// }
ReactDOM.createRoot(document.querySelector('#root')).render(<App/>)