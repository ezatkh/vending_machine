import React, { Component } from "react";
import SnackSlots from "./SnackSlots";
import Keypad from "./Keypad";
import MoneySlots from "./MoneySlots"
import "../styles/snackMachine.css";
export default class SnackMachine extends Component {
  constructor() {
    super();
    this.state = {
      itemsArrayPush:[],
      snacks: [],
      snackesPurchased:[],
      balance:0,
      totalPrice:0
    };
  }
  getSnacks=(items)=> {
    this.setState({snacks:items})
  }
  itemsChoosen=(items)=>{
    let itemsCopy=[...items]
    let sumPrice=0;
    itemsCopy.forEach(element => {
      sumPrice+=(element.quantity * element.price)
    });
    this.setState({
      snackesPurchased:itemsCopy,
      totalPrice:sumPrice
    })
  }
  pay=(moneyPaid)=>{
    let newBalance=this.state.balance+parseFloat(moneyPaid) 
this.setState({
  balance:newBalance
},function(){
  if(this.state.balance < this.state.totalPrice){
    alert("Money is not enough")
  }
  else{
    let arrayPush=[]
    for(let item of this.state.snackesPurchased){
      let qty=item.quantity
      while(qty>0){
        arrayPush.push(item.name)
        qty--;
      }
    }
    let returnedBakance=this.state.balance-this.state.totalPrice
    alert("The remaining amount is : " + returnedBakance)
    this.setState({
      balance:0,
      totalPrice:0,
      snackesPurchased:[],
      itemsArrayPush:arrayPush
    })
  }
})
  }
  componentDidMount() {
    this.getSnacks();
  }
  render() {
    return (
      <div className="machine">
        <div className="snackSlots">
          <SnackSlots getSnacks={this.getSnacks}/>
          <div className="push">
            {this.state.itemsArrayPush.length ? this.state.itemsArrayPush.map(item=>{
              return <div className="itemPush">{item}</div>
            }):<div className="pushField">Push</div>}
          </div>
        </div>
        <div className="Keypad">
          <Keypad snacks={this.state.snacks} itemsChoosen={this.itemsChoosen}/>
          <div className="MoneyScreen">
            <div className="balance">Balance:{this.state.balance}</div>
            <div className="totalCart">Total price:{this.state.totalPrice}</div>
          </div>
          <MoneySlots pay={this.pay}/>
        </div>
      </div>
    );
  }
}
