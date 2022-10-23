import React, { Component } from 'react'
import "../styles/snack.css"
export default class Snack extends Component {
  render() {
    return (
      <div className='snack'>
        <div className='name'>{this.props.oneSnack.name}</div>
        <div className='price'>price:{this.props.oneSnack.price}</div>
      </div>
    )
  }
}
