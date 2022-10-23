import React, { Component } from "react";
import Snack from "./Snack";
import "../styles/snackSlots.css"
class SnackSlots extends Component {
  constructor() {
    super();
    this.state = {
      snacks: [],
    };
  }
  fillSnacks(col, row) {
    let snacksToAdd = [];
    let snack = {};
    for (let i = 0; i < col; i++) {
      for (let j = 0; j < row; j++) {
        snack = {
          name: String.fromCharCode(i + 65) + j,
          price: (j + 1) * 2,
          amount: Math.floor(Math.random() * 6),
        };
        snacksToAdd.push(snack);
        snack = {};
      }
    }
    this.setState({
      snacks: snacksToAdd,
    },function () {
      this.getSnacks()
    });
  }
getSnacks(){
  this.props.getSnacks(this.state.snacks);
}
changeFlag(){
  let flag=false;
  this.props.editFlag(flag);
}

  componentDidMount() {
    this.fillSnacks(5, 5);
  }
  componentDidUpdate(){
    if(this.props.changeFlag){
      this.changeFlag()
    }
  }
  render() {
    return (
        <div className="snacks">  
          {this.state.snacks.map((item) => {
            return (
                <Snack key={item.name} oneSnack={item} />
            );
          })}
        </div>
    );
  }
}
export default SnackSlots;
