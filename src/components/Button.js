import React, { Component } from 'react'

export default class button extends Component {
    selectedKey=()=>{
       this.props.selectedKey(this.props.button)
    }
  render() {
    return (
      <div onClick={this.selectedKey}>{this.props.button}</div>
    )
  }
}
