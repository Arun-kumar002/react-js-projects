import React, { Component } from 'react';

class Mounting extends Component {
    constructor(){
        super()
        // console.log('im constructer method');
        this.state={
            username:'arun'
        }
        // this.ChangeUsername= this.ChangeUsername.bind(this)

    }
    //take prop value and update the state before rendering
   static getDerivedStateFromProps(props){
        console.log('getDerivedStatefrom props');
        console.log(props.username);
        // return{
        //     username:props.username
        // }
   }

   componentDidMount(){
      console.log('im did mount');
      document.title=this.state.username

      
   }
   //it  will not work because of each time getderivedstte and render block refreshing
   ChangeUsername=()=>{
    this.setState({username:'captain'})
  }
    render() {
        console.log('im render');
        return (
            <div>
               <h1> {this.state.username}</h1>
               <button onClick={this.ChangeUsername}>change</button>
            </div>
        );
    }
}

export default Mounting;
