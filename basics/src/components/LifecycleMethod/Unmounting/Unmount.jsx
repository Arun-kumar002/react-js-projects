import React, { Component } from 'react'

export default class Unmount extends Component {
    componentWillUnmount(){
        console.log('im unmount');
        alert('im unmounted')
    }
  render() {
    return (
      <div>
        <h1>im am comp unmount</h1>
      </div>
    )
  }
}
