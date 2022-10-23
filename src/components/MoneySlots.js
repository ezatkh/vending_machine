import React, { Component } from "react";
import "../styles/moneySlots.css";
export default class MoneySlots extends Component {
  constructor() {
    super();
    this.state = {
      coinsSelected: null,
      CoinsSlots: [
        { value: 10, type: "C" },
        { value: 20, type: "C" },
        { value: 50, type: "C" },
        { value: 1, type: "$" },
        { value: 20, type: "$" },
        { value: 50, type: "$" },
      ],
    };
  }
  payment = () => {};

  coinsPayement = (e) => {
    let coinInfo = e.target.value.split(":");
    if (coinInfo[1] === "C") coinInfo[0] = coinInfo[0] / 100;
    this.setState({
      coinsSelected: coinInfo[0],
    });
  };
  pay=()=>{
    this.props.pay(this.state.coinsSelected)
  }
  render() {
    return (
      <div className="moneySlots">
        <div className="coins">
          <h5>Coins</h5>
          <div className="MoneyRadio">
            {this.state.CoinsSlots.map((element) => {
              return (
                <div>
                  <input
                    type="radio"
                    onChange={this.coinsPayement}
                    id={element.value + element.type}
                    name="Money"
                    value={element.value + ":" + element.type}
                  />{" "}
                  <label htmlFor={element.value + element.type}>
                    {element.value} {element.type}
                  </label>{" "}
                </div>
              );
            })}
          </div>
        </div>
        <div className="card">
          <h5>card</h5>
        </div>
        <div className="btns">
          <button className="purshase" onClick={this.pay}>
            Purshase
          </button>
          <button className="cancel">Cancel</button>
        </div>
      </div>
    );
  }
}
