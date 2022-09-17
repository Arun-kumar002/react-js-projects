import React, { Component } from 'react';

class Updating extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
   static getDerivedStateFromProps(props,state){
   console.log('get derived');
   return null
   }
   componentDidMount(){
    console.log('im did mount');
   }
   shouldComponentUpdate(props,state){
     console.log('2nd');
     return true;
   }
   getSnapshotBeforeUpdate(props,state){
    console.log(state);
      console.log('3rd');
   }
   componentDidUpdate(props,state,snap){
    // console.log(props,state,snap);
    document.title=`count:${this.state.count}`
    console.log('did update');
   }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>submit</button>
            </div>
        );
    }
}

export default Updating;
