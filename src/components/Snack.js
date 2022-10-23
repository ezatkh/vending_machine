import React, { Component } from 'react'
import "../styles/snack.css"
export default class Snack extends Component {

  render() {
    let checkStock=this.props.oneSnack.amount;
    let styleStock;
    checkStock ?  styleStock="snack":styleStock="noStock";
    return (
      <div className={styleStock}>
        <div className='name'>{this.props.oneSnack.name}</div>
        <div className='price'>{this.props.oneSnack.price}$</div>
      </div>
    )
  }
}
