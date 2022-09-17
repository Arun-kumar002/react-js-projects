import React, { Component } from 'react';

class ErrorBoundaries extends Component {
    constructor(){
        super()
        this.state={
            show:false
        }

    }
    static getDerivedStateFromError(err){
        return {show:true}
    }
    componentDidCatch(error,state){
        console.log(error);
        console.log(state);
    }
    render() {
       if(this.state.show===true){
        return <h1>wrong </h1>
       }
       else{
        return this.props.children
       }
    }
}

export default ErrorBoundaries;
