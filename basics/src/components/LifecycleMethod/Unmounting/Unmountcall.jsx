import React, { Component } from 'react'

export default class Unmountcall extends Component {
    componentDidMount(){
        console.log('im did mount');
    }
  render() {
    return (
      <div>Unmountcall</div>
    )
  }
}
