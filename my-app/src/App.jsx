import React, { Component ,useState,useRef,createRef,useEffect} from 'react';
import Courses from './components/courses/Courses';
import Navbar from './components/navbar/Navbar';
import GrantParant from './components/PropsDrillingEx/GrantParant';
import Slider from './components/slider/Slider';
import sliderImg from './components/slider/sliderimg2.jpg'
import CourseJson from './courses.json'
// import AudioJson from './audio.json'
import Employee from './components/employee/Employee';
import Employees from './components/employee/Employees';
import Audio from './components/audio/Audio.jsx';
import {faker} from '@faker-js/faker'
import VIDEO from './ak.mp4'
import Player from './components/audio/Player';
import Mounting from './components/LifecycleMethod/Mounting/Mounting';
import Updating from './components/LifecycleMethod/Updating/Updating';
import Unmount from './components/LifecycleMethod/Unmounting/Unmount';
import Unmountcall from './components/LifecycleMethod/Unmounting/Unmountcall';
import ErrorBound from './components/LifecycleMethod/ErrorBoundaries/ErrorBound';
import ErrorBoundaries from './components/LifecycleMethod/ErrorBoundaries/ErrorBoundaries';



//error boundaries


const App = () => {
  return (
    <div>
      <ErrorBoundaries>
      <ErrorBound Employee={'arun'}/>
      
      </ErrorBoundaries>
      <ErrorBound Employee={'pavav'}/>
      <ErrorBound Employee={'vijay'}/>
      <ErrorBound Employee={'harish'}/>
      

    </div>
  )
}

export default App

//geteventlistener to get event phase
//routing


// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App
//network purpose
//NORMAL ASYNC
//    const App = () => {
//   let [users,setusers]=useState([])
//   useEffect(()=>{
//     let user=async()=>{
//       let data= await window.fetch('https://api.github.com/users')
//       let user=await data.json()
//       setusers(user) 
//     }
//     user()
//   },[])
//   return (
//     <div>
//      { users.map((x,y)=>{
//       return <li key={y}>{x.login}</li>
// })}
//     </div>
//   )
// }
// export default App



//PROMISE

// const App = () => {
//   let [users,setusers]=useState([])
//   useEffect(()=>{
//     window.fetch('https://api.github.com/users').then(x=>{
//       x.json().then(y=>{
//         console.log(y);
//         setusers(y)  
//         console.log(users);
//       })
//     }).catch(e=>{
//       console.log(e);
//     })
//   },[])
//   return (
//     <div>
//      { users.map((x)=>{
//       console.log(x.login);
//       return <li >{x.login}</li>
// })}
//     </div>
//   )
// }

// export default App
// const App = () => {
//   let [value,setvalue]=useState(window.innerWidth)
//   useEffect(()=>{
//     window.addEventListener('resize',changeEvent)
  
//     //for terminaion
//     return ()=>{
//       window.removeEventListener('resize',changeEvent)
//     }
//   })
//   let changeEvent=()=>{
//     setvalue(window.innerWidth)
//   }
//   return (
//     <div>
//       <button>{value}</button>
//     </div>
//   )
// }

// export default App
////////use effect
// const App = () => {
//   let [count,setcount]=useState(0)
//   let [input,setinput]=useState('')
//   useEffect(()=>{
//    console.log(count,input);
//   },[count,input])
//   return (
//     <div>
// <h1>{count}</h1>
// <input type="text" name="usename" id=""  onChange={e=>setinput(e.target.value )}/>
// <button onClick={()=>setcount(count+1)}>in</button>
//     </div>
//   )
// }

// export default App

//life cycle methoods
// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       show:true
//     }
//   }

//   change=()=>{
//     console.log('changed');
//     this.setState({show:false})
    
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.show === true ? <Unmountcall/> : <Unmount/>}</h1>
//         <button onClick={this.change}>change</button>
//       </div>
//     )
//   }
// }


// const App = () => {
//   return (
//     <>
//    {/* <Mounting username='captain'/> */}
//   {/* <Updating/> */}
//   <Unmount/>
//   </>
//   )
// }

// export default App

//task checkbox using forms
// const App = () => {
//   let[state,setstate]=useState({
//     language:[]
//   })
//   let {language}=state
//   let change=e=>{
//     let val=e.target.value
//     if(!language.includes(val)){
//       language.push(val)
//     }
//     console.log(language);
//     setstate({[e.target.name]:language})
//   }
//   let submit=e=>{
//     e.preventDefault()
   
//     console.log(state);
//   }
//   return (
//     <section className="add_user_section">
//      skills: {JSON.stringify(language)}
//     <article>
// <form onSubmit={submit}>
//  <div >
//     <input type="checkbox" name="language" id="" onChange={change} value={'tamil'} />tamil
//     <input type="checkbox" name="language" id="" onChange={change} value={'englis'} />english
//   </div>
//   <button>submit</button>
//  </form>
//  </article>
// </section>
//   )
// }

// export default App





//higher order component



// export default class App extends Component {
//   render() {
//     return (
//       <Navbar/>
//     )
//   }
// }


//controlled component
// const App = () => {
//   let [range,setrange]=useState(0)
//   let [dob,setdob]=useState('')
//   let submit=e=>{
//     e.preventDefault()
//     console.log(range,dob);
//   }
//   return (
//     <div>
//       <form onSubmit={submit}>
//         <input type="range" name="range" id="" value={range} onChange={e=>setrange(e.target.value)}/>
//         <input type="date" name="dob" id="" value={dob} onChange={e=>setdob(e.target.value)} />
//         <button>range</button>
//       </form>
//     </div>
//   )
// }

// export default App

// const App = () => {
//   let [img,setimg]=useState('')
// let change=e=>{
//   setimg(e.target.files[0])
// }
// let submit=e=>{
//   e.preventDefault()
//   console.log(img);
// }
//   return (
//    <section className="add_user_section">
//    <article>
// <form onSubmit={submit}>
//   <div>
//     <input type="file" name="upload" id="" onChange={change}/>
//     <button>supmit</button>
//   </div>
//   </form>
//   </article>
//   </section>
//   )
// }

// export default App
// const App = () => {
//   let[state,setstate]=useState({
//     skills:[]
//   })
//   let {skills}=state
//   let change=e=>{
//     let val=e.target.value
//     if(!skills.includes(val)){
//       skills.push(val)
//     }
//     console.log(skills);
//     setstate({[e.target.name]:skills})
//   }
//   let submit=e=>{
//     e.preventDefault()
   
//     console.log(state);
//   }
//   return (
//     <section className="add_user_section">
//      skills: {JSON.stringify(skills)}
//     <article>
// <form onSubmit={submit}>
//  <div >
//   <select name="skills" id="" multiple onChange={change}>
//     <option value="javas">javas</option>
//     <option value="py">py</option>
//     <option value="maongo">mongo</option>
//   </select>
//   </div>
//   <button>submit</button>
//  </form>
//  </article>
// </section>
//   )
// }

// export default App
//for radio buttons onchange for parents 
// const App = () => {
//   let[state,setstate]=useState({
//     gender:''
//   })
//   let change=e=>{
//     setstate({...state,[e.target.name]:e.target.value})
//   }
//   let submit=e=>{
//     e.preventDefault()
//     console.log({state});
//   }
//   return (
//     <section className="add_user_section">
//     <article>
// <form onSubmit={submit}>
//  <div onChange={change}>
//   <label htmlFor="" >gender</label>
//   <input type="radio" name="gender" id="gender" value='male'/>male
//   <input type="radio" name="gender" id="gender" value="female" />female
//   </div>
//   <button>submit</button>
//  </form>
//  </article>
// </section>
//   )
// }

// export default App
// const App = () => {
//   let[state,setstae]=useState({
//     username:'',
//     password:'',
//     loading:false
//   })
//  let {username,password,loading}=state
//   let change=e=>{
//     let {name,value}=e.target
//      try {
      
//       setstae({loading:true})
//       setstae({...state,[name]:value})
      
//      } catch (error) {
//       console.log(error);
//      }
     
//   }
//   let submit=e=>{
//     e.preventDefault()
//     console.log({username,password});
//   }
//   return (
//     <section className="add_user_section">
//     <article>
// <form onSubmit={submit}>
//  <div>
//   <label htmlFor="">username</label>
//   <input type="text" name="username" id="username"  onChange={change}/>
//   </div>
//     <div>
//       <label htmlFor=""  >password</label>
//     <input type="text" name="password" id="password"   onChange={change}/>
//     </div>
// <div><button >{loading === true ? 'loading':'load'}</button></div>
//  </form>
//  </article>
// </section>
//   )
// }

// export default App

// const App = () => {
//   let[user,setuser]=useState('')
//   let[pass,setpass]=useState('')
//   let[load,setload]=useState(false)
//   let submit=e=>{
//      try {
//       e.preventDefault()
//       setload(true)
//       console.log({user,pass});
//      } catch (error) {
//       console.log(error);
//      }
     
//   }
//   return (
//     <section className="add_user_section">
//     <article>
// <form onSubmit={submit}>
//  <div>
//   <label htmlFor="">username</label>
//   <input type="text" name="username" id="username"  onChange={(e)=>{setuser(e.target.value) 
//     setload(false)}}/>
//   </div>
//     <div>
//       <label htmlFor=""  >password</label>
//     <input type="text" name="password" id="password"   onChange={(e)=>setpass(e.target.value)}/>
//     </div>
// <div><button >{load === true ? 'loading':'submit'}</button></div>
//  </form>
//  </article>
// </section>
//   )
// }

// export default App
// class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       username:'',
//       password:'',
//       loading:false
//     }
//   }
//  change=e=>{
//    this.setState({[e.target.name]:e.target.value,loading:true})
//  }
//  Submit=e=>{
//    e.preventDefault()
//    let {username,password}=this.state
//    console.log({username,password});
//  }
//   render() {
//     return (
      // <section className="add_user_section">
      //           <article>
      //       <form onSubmit={this.Submit}>
      //        <div>
      //         <label htmlFor="">username</label>
      //         <input type="text" name="username" id="username"  onChange={this.change}/>
      //         </div>
      //           <div>
      //             <label htmlFor=""  >password</label>
      //           <input type="text" name="password" id="password"   onChange={this.change}/>
      //           </div>
      //    <div><button >submit</button></div>
      //        </form>
      //        </article>
      //      </section>
//     );
//   }
// }

// export default App;

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       username:'',
//       password:''
//     }
//   }
//   submit=e=>{
//     e.preventDefault()
//      let username=this.state.username
//      let password=this.state.password
//      console.log({username,password});
//   }
//   render() {
//     return (
      // <section className="add_user_section">
      //           <article>
      //       <form onSubmit={this.submit}>
      //        <div><label htmlFor="">username</label><input type="text" name="" id="username"  onChange={(e)=>this.setState({username:e.target.value})}/></div>
      //           <div><label htmlFor=""  >password</label><input type="text" name="" id="password"   onChange={(e)=>this.setState({password:e.target.value})}/></div>
      //    <div><button >submit</button></div>
      //        </form>
      //        </article>
      //      </section>
//     )
//   }
// }

//cr
//uncontrolled components
// class App extends Component {
//   constructor(){
//     super()
//     this.userRef=createRef('')
//     this.passRef=createRef('')
//   }
//   submit=e=>{
//     e.preventDefault()
//     console.log({user:this.userRef.current.value,pass:this.passRef.current.value});
//   }
//   render() {
//     return (
      // <section className="add_user_section">
      //           <article>
      //       <form >
      //        <div><label htmlFor="">username</label><input type="text" name="" id="username"  ref={this.userRef}/></div>
      //           <div><label htmlFor="">password</label><input type="text" name="" id="password" ref={this.passRef}/></div>
      //    <div><button onClick={this.submit}>submit</button></div>
      //        </form>
      //        </article>
      //      </section>
//     );
//   }
// }

// export default App;


// export default class App extends Component {
//   constructor(){
//     super()
//   }
//   componentDidMount(){
//      let form=document.querySelector('form')
//      form.addEventListener('submit',e=>{
//       let user=e.target[0].value
//       let pass=e.target[0].value
//       console.log({user,pass});
//      })
//   }
//   render() {
//     return (
//       <section className="add_user_section">
//            <article>
//            <form >
//             <div><label htmlFor="">username</label><input type="text" name="" id="username" /></div>
//             <div><label htmlFor="">password</label><input type="text" name="" id="password" /></div>
//       <div><button >submit</button></div>
//          </form>
//          </article>
//        </section>
//     )
//   }
// }


//synthetic events
// const App = () => {
//   let submit=(e)=>{
//     e.preventDefault()
//     let user=document.querySelector('#username')
//     let pass=document.querySelector('#password')
//     console.log({user:user.value,passs:pass.value});
//   }
//   return (
//     <section className="add_user_section">
//     <article>
//       <form >
//         <div><label htmlFor="">username</label><input type="text" name="" id="username" /></div>
//         <div><label htmlFor="">password</label><input type="text" name="" id="password" /></div>
//         <div><button onClick={submit}>submit</button></div>
//       </form>
//     </article>
//     </section>
//   )
// }

// export default App

// class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       gituser:[],
//       loading:true
//     }
//   }
//   async componentDidMount(){
//      let user= await window.fetch('https://api.github.com/users')
//      let data=await user.json()
//      this.setState({
//       gituser:data,loading:true
//      })
//   }
//   render() {
//     let user=this.state.gituser.map(x=>{
//       console.log(x);
//        return <>
//        <img src={x.avatar_url} alt="" />
//        </>
//     })
//     return  <>{this.state.loading ===true ? user: 'loading' }</>

//   }
// }

// export default App;

//switch case cr
// const App = () => {
//   let [islogged,setislogged]=useState(false);
//   switch (islogged) {
//     case true:
//       return <h1>welcome</h1>
//     case false:
//       return <>
//       <button>login</button>
//       <button>logout</button>
//       </>
//     default:
//       break;
//   }
// }
// export default App

//message
// const App = () => {
//   let[notification,setnotification]=useState(['java','js'])
//   return (
//     <div>
//       <p style={{fontSize:"20px"}}>message{notification.length > 0 && (
//         <sup style={{color:"red"}}>{notification.length}</sup>
//       )}</p>
//     </div>
//   )
// }

// export default App

// const App = () => {
//   let [auth,setAuth]=useState(true)

//   let GuestUser=()=>{
//     return(
//       <div>
//         <ul>
//           <li><a href="">signup</a></li>
//           <li><a href="">signin</a></li>
//         </ul>
//       </div>
//     )
//   }
//   let AuthUser=()=>{
//     <div>
//       <ul>
//         <li><a href="">welcome home</a></li>
//         <li><a href="">logout</a></li>
//       </ul>
//     </div>
//   }

//   // if(auth){
//   //   return <GuestUser/>
//   // }
//   // else{
//   //   return <AuthUser/>
//   // }
//   return <>{auth===true?<GuestUser/>:<AuthUser/>}</>
// }

// export default App
//condional rendering


// const App = () => {
//  let [light,setlight]=useState(false)
//  if(light){
//   return (
//     <div style={{background:"orange"}}>light is on</div>
//   )
//  }else{
//   return (
//     <div style={{background:"black"}}>light is off</div>
//   )

//  }
// }

// export default App
// task
//audio
// let AudioJson=[
//   {
//       audio:"./ck.mp3",
//       img:"https://cdn.pixabay.com/photo/2019/07/14/16/29/pen-4337524__340.jpg",
//       desc:"hi im song1"
//   },
  
//   {
//       audio:"./bk.mp3",
//       img:"https://cdn.pixabay.com/photo/2017/12/26/21/19/circle-3041437__340.jpg",
//       desc:"hi im song2"
//   },
 
// ]

//without useref in function


// const App = () => {
//   let divRef=React.createRef('')
//   let change=()=>{
//     divRef.current.style.background="red"
//   }
//   return (
//     <div>
//       <h1 ref={divRef}>hello</h1>
//       <button onClick={change}>change</button>
//     </div>
//   )
// }

// export default App
//audio


// const App = () => {
//   let [item,setitem]=useState(AudioJson)
//   let audioRef=useRef('')
//   let imgRef=useRef('')
//   let Onselected=val=>{
//     audioRef.current.src=val.audio
//     imgRef.current.src=val.img
//   }
//   return (
//     <div>
//       <img src="" alt=""  ref={imgRef} style={{float:"right"}}/>
//       <audio src="" ref={audioRef} controls style={{float:"right"}}></audio>
//       <Audio item={item} Onselected={Onselected}/>
//     </div>
//   )
// }

// export default App

// export default class App extends Component {
//     state={
//         audio:AudioJson
//     }
   
//   render() {
//     let Onselected=(val)=>{
     
//       // <div>
//       //   <audio src={val.audio}></audio>
//       // </div>
//       return <Player play={val}/>
//    }
   
//     return (
//       <>
//       {/* <audio src={this.Onselected} controls></audio> */}
//       <Audio data={this.state.audio} Onselected={Onselected}/>
//       </>
//     )
//   }
// }

//function ref
// const App = () => {
//     let [img,setimg]=useState('https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762__340.jpg')
//     let [video,setvideo]=useState(VIDEO)
//     let imgref=useRef('')
//     let videoRef=useRef('')
//     let [play,setplay]=useState(false)
//     let change=()=>{
//         console.log('im',imgref.current);
//         imgref.current.style.border="2px solid red";
//         imgref.current.style.borderRadius="50%";
//     }
//     let playOrpause=()=>{
//         if(!play){
//             setplay(true)
//             videoRef.current.play()
//         }
//         else{
//             setplay(false)
//             videoRef.current.pause() 
//         }
//     }

//   return (
//     <div>
//         {/* <img src={img} alt=""  ref={imgref}/> */}
//         <video src={video}  ref={videoRef}></video>

//         <button onClick={playOrpause}>play/pause</button>
//     </div>
//   )
// }

// export default App

// class App extends Component {
//     state={
//         username:'arun'
//     }
//     constructor(){
//         super()
//         this.divRef=React.createRef(null);
//     }
//     change=(e)=>{
//         this.setState({
//             username:'captain'
//         })
//         this.divRef.current.style.background='orange'
//         this.divRef.current.style.padding='20px'
//     }
//     render() {
//         return (
//             <div ref={this.divRef}>
//                <h1> {this.state.username}</h1>
//                <button onClick={this.change}>change</button>
//             </div>
//         );
//     }
// }

// export default App;

//react reference
// export default class App extends Component {
//     constructor(){
//                 super()
//                 this.state={
//                     username:'captain'
//                 }
//                 this.inputRef=React.createRef(null)
//             }
//     componentDidMount(){
//         console.log(this.inputRef.current);
//     }
//   render() {
//     return (
//       <div>
//     <input type="text" name="username" id="" placeholder='enter username' ref={this.inputRef} />
//       </div>
//     )
//   }
// }

// synthetic
// class App extends Component {
//     constructor(){
//         super()
//         this.state={
//             username:'captain'
//         }
//     }
//     //synthetic event
//     changeUser(){
//         this.setState({
//             username:'arun'
//         })
//     }
//     //domevent
//     componentDidMount(){
//         document.querySelector('input').addEventListener('keyup',e=>{
//             this.setState({username:e.target.value})
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.username}</h1>
//                 <button onClick={this.changeUser.bind(this)}>change</button>
//                 <input type="text" name="" id="" placeholder='enter your name' />
//             </div>
//         );
//     }
// }

// export default App;


//without synthetic events only dom event
// export default class App extends Component {
//     constructor(){
//         super()
//         this.state={
//             username:'captain'
//         }
//     }
//    componentDidMount(){
//     let btn=document.querySelector('button')
//     btn.addEventListener('click',e=>{
//         this.setState({username:'arun'})
//     })
//    }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.username}</h1>
//         <button>change</button>
//       </div>
//     )
//   }
// }

//faker example
// const App = () => {
//     let [img,setimg]=useState(faker.image.avatar())
//     let [count,setcount]=useState(0)
//   return (
//     <main>
//         <img src={img} alt="" />
//         <h1>{count}</h1>
//         <button onClick={()=>setimg(faker.image.animals())}>change</button>
//         <button onClick={()=>setcount(Math.round(Math.random()*100))}>oops</button>
//     </main>
//   )
// }

// export default App

//call apply bind
// let arun={
//     username:'arun'
// }
// function test(){
//     return this;
// }
// console.log(test.call(arun));
// console.log(test.apply([arun]));
// let fun=test.bind(arun)
// console.log(fun());
//state as a obj

// binding function into constucter
// class App extends Component {
//     constructor(){
//         super()
//         this.state={
//             count:0
//         }
//     }
//     increment(){
//         this.setState({
//             count:this.state.count+1
//         })
//     }
//     render() {
//         return (
//             <div>
//                <h1> {this.state.count}</h1>
//                <button onClick={this.increment.bind(this)}>change</button>
//             </div>
//         );
//     }
// }

// export default App;


// const App = () => {
//     let [state,setstate]=React.useState({emp_id:"ty1",emp_name:'arun',emp_sal:1000})
//     let change=()=>{
//         setstate({emp_id:"ty1",emp_name:'captain',emp_sal:1000})
//     }
//   return (
//     <div>
//         <h1>{state.emp_name}</h1>
//         <p>{state.emp_id}</p>
//         <p>{state.emp_sal}</p>
//         <button onClick={change}>change</button>
//     </div>
//   )
// }

// export default App
//hooks
//state as a string and num
// const App = () => {
//     let [user,setuser]=React.useState(0)
//     let [name,setname]=React.useState('arun')
//     let change=()=>{
//         setuser(user+1)
//         setname('harish')
//     }
//    let increment=()=>{
//     //not work
//         // setuser( user+1)
//         // setuser( user+1)
//     //previous state
//         setuser(prevstate=>{
//             return prevstate+2
//         })
//         setuser(prevstate=>{
//             return prevstate+2
//         })


//             }
//     let decrement=()=>{
//                 setuser(user-1)
//             }
//   let   reset=()=>{
//                 setuser(0)  
//                 setname('arun')
//             }
        
//   return (
//     <div>
//         <h1>{user}</h1>
//         <h1>{name}</h1>
//         <button onClick={change}>change</button>
//         <button onClick={increment}>increment</button>
//         <button onClick={decrement}>decrement</button>
//         <button onClick={reset}>reset</button>
//     </div>
//   )
// }

// export default App;

//set state
// export default class App extends Component {
//     constructor(){
//         super()
//         this.state={count:0}
//     }
//     //function for onclick
//     increment=()=>{
//         this.setState({
//             count:this.state.count+1
//         })
//     }
//     decrement=()=>{
        // this.setState({
//             count:this.state.count-1
//         })
//     }
//     reset=()=>{
//         this.setState({
//             count:0
//         })
//     }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <div>
//             <button onClick={this.increment}>increment</button><button onClick={this.decrement}>decrement</button><button onClick={this.reset}>reset</button>
//         </div>
//       </div>
//     )
//   }
// }


//class based component
// class App extends Component {
//     // state
//     //one way
//     // constructor(){
//     //     super()
//     //     this.state={
//     //         username:'arun'
//     //     }
//     // }
//     //another way
//     // state={
//     //     username:'arun',
//     //     skills:['js','node','express'],
//     //     available:true,
//     //     timing:{
//     //         morning:'10am',
//     //         evening:'5pm',
//     //     },
//     //     price:'100Inr'
//     // }
//     //how to send json
//     // state={
//     //     course:CourseJson
//     // }
//     //task employee
//     state={
//         employee:[
//             {
//                 emp_id:1,
//                 emp_name:'arun',
//                 emp_salary:10000,
//                 emp_designation:'junior s/w engineer',
//                 emp_gender:'male',
//                 emp_education:'BE',
//                 emp_experience:{
//                     previoue_exp:'1 year',
//                     company:{
//                         previous_comp:'qsp',
//                         new_com:'tyss'
//                     }
//                 },
//                 emp_img:'https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261__340.jpg',
//                 emp_skill:['js','python','node','express'],
//                 emp_city:'tamilnadu'
//             },
//             {
//                 emp_id:2,
//                 emp_name:'vijay',
//                 emp_salary:10000,
//                 emp_designation:'junior s/w engineer',
//                 emp_gender:'male',
//                 emp_education:'MBA',
//                 emp_experience:{
//                     previoue_exp:'1 year',
//                     company:{
//                         previous_comp:'qsp',
//                         new_com:'tyss'
//                     }
//                 },
//                 emp_img:'https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionists-5975962__340.jpg',
//                 emp_skill:['js','python','node','express'],
//                 emp_city:'bangalore'
//             },
//             {
//                 emp_id:3,
//                 emp_name:'harish',
//                 emp_salary:10000,
//                 emp_designation:'junior s/w engineer',
//                 emp_gender:'male',
//                 emp_education:'BE',
//                 emp_experience:{
//                     previoue_exp:'1 year',
//                     company:{
//                         previous_comp:'qsp',
//                         new_com:'tyss'
//                     }
//                 },
//                 emp_img:'https://cdn.pixabay.com/photo/2013/07/16/07/55/man-162951__340.jpg',
//                 emp_skill:['js','python','node','express'],
//                 emp_city:'bangalore'
//             },
//             {
//                 emp_id:4,
//                 emp_name:'pavan',
//                 emp_salary:10000,
//                 emp_designation:'junior s/w engineer',
//                 emp_gender:'male',
//                 emp_education:'BE',
//                 emp_experience:{
//                     previoue_exp:'1 year',
//                     company:{
//                         previous_comp:'qsp',
//                         new_com:'tyss'
//                     }
//                 },
//                 emp_img:'https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg',
//                 emp_skill:['js','python','node','express'],
//                 emp_city:'bangalore'
//             }, {
//                 emp_id:5,
//                 emp_name:'pooja',
//                 emp_salary:10000,
//                 emp_designation:'junior s/w engineer',
//                 emp_gender:'female',
//                 emp_education:'BE',
//                 emp_experience:{
//                     previoue_exp:'1 year',
//                     company:{
//                         previous_comp:'qsp',
//                         new_com:'tyss'
//                     }
//                 },
//                 emp_img:'https://cdn.pixabay.com/photo/2014/09/09/14/31/human-440127__340.jpg',
//                 emp_skill:['js','python','node','express'],
//                 emp_city:'bangalore'
//             }

//         ]
//     }
//     render() {
//         return (
//            <section id='main'>
           
//                 <Navbar/>
//                 {/* <Slider photo={sliderImg}/> */}
//                 {/* <Courses {...CourseJson} /> */}
//                 {/* <Courses payload={{_id:'ty1',course_name:'python full stack',trainer:'arun'}}/> */}
//                 {/* default props and children example */}

//                 {/* <Courses _id='ty1'course_name='python full stack' trainer='arun'>
//                 hi
//                 </Courses>
//                 <Courses course_name='mern full stack' trainer='vijay'/>
//                 <Courses course_name='java full stack' /> */}


//                 {/* how to send array of values */}
//                 {/* <Courses payload={['js','html','nodejs','mern','mongodb','mysql']} /> */}
//                 {/* how to send boolean */}
//                 {/* <Courses course={{available:true ,course_name:'js'}}/>
//                 <Courses course={{available:false ,course_name:'java'}}/>
//                 <Courses course={{available:true ,course_name:'python'}}/> */}

//                 {/* how to send function */}

//                 {/* <Courses dataclick={value=>alert(value)} /> */}

//                 {/* render props */}
//                 {/* <Courses  payload={CourseJson} /> */}
                
//                 {/* prop drilling  and prop types*/}

//                 {/* <div className="rootComponent">
//                     <strong>root</strong>
//                 <GrantParant username='arun'/>
//                 </div> */}
//                 {/* state */}
//                 {/* <div>
//                     <ul>
//                         skills:{this.state.skills.map(x=>{
//                             return(<li>{x}</li> )})}
//                     </ul>
//                     <h1>{this.state.timing.morning}</h1>
//                     <h1>{this.state.timing.evening}</h1>
//                     <h1>{this.state.username}</h1>
//                     <h1>{this.state.price}</h1>
//                 </div> */}

//                 {/* <Courses course={this.state.course}/> */}

//                 {/* emp task */}

//                 {/* <Employees emp={this.state.employee}/> */}


//                 {/* HOOKS */}

//            </section>
//         );
//     }
// }

// export default App;






//rcc react class component