import React, { Component } from "react";
import "../styles/moneySlots.css";
export default class MoneySlots extends Component {
  constructor() {
    super();
    this.state = {
      cardInput: null,
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
  cardInputChange = (e) => {
    this.setState({
      cardInput: e.target.value,
    });
  };

  coinsPayement = (e) => {
    let coinInfo = e.target.value.split(":");
    if (coinInfo[1] === "C") coinInfo[0] = coinInfo[0] / 100;
    this.setState({
      coinsSelected: coinInfo[0],
    });
  };
  pay = () => {
    this.props.pay(this.state.coinsSelected);
  };
  cardPay = () => {
    this.setState({
      cardInput:""
    })
    this.props.pay("card");

  };
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
                  />
                  <label htmlFor={element.value + element.type}>
                    {element.value} {element.type}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <button className="purshase" onClick={this.pay}>
          Pay
        </button>
        <div className="card">
          <h5>card</h5>
          <input
            onChange={this.cardInputChange}
            value={this.state.cardInput}
            type="number"
            min="1000000000000000"
            max="9999999999999999"
            placeholder="Must be 16 numbers"
          />
          <button className="purshase" onClick={this.cardPay}>
            Pay
          </button>
        </div>
      </div>
    );
  }
}
