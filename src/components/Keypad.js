import React, { Component } from "react";
import Button from "./Button";
import "../styles/keypad.css";
export default class Keypad extends Component {
  constructor() {
    super();
    this.state = {
      itemsToPurchased: [],
      selectedItem: "",
      selectedQuantity: "",
      valueRadio: "",
      letters: ["A", "B", "C", "D", "E"],
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    };
  }
  itemsChoosen=()=> {
    this.props.itemsChoosen(this.state.itemsToPurchased)
    this.setState({
      itemsToPurchased:[]
    })
  }
  selectedKey = (key) => {
    if (this.state.valueRadio === "Item")
      this.setState({ selectedItem: this.state.selectedItem + key });
    else if (this.state.valueRadio === "Quantity")
      this.setState({ selectedQuantity: this.state.selectedQuantity + key });
    else alert("Please choose type of add Item/Quantity");
  };
  clearItems = () => {
    this.setState({ itemsToPurchased: [] });
  };
  escItem = () => {
    this.setState({
      selectedItem: "",
      selectedQuantity: "",
    });
  };
  onChangeValue = (e) => {
    this.setState({ valueRadio: e.target.value });
  };
  validationInput = (snack) => {
    if (snack["quantity"] < 0 || snack["quantity"] > 10) {
      alert("Invalid input quantity");
      return  false;
    } else if (
      snack["name"].length !== 2 ||
      snack["name"][1] < 0 ||
      snack["name"][1]>4 ||
      snack["name"][0] < "A" ||
      snack["name"][0] > "E"
    ) {
      alert("Invalid input name");
      return false;
    }
    let flag=true;
    this.props.snacks.forEach((element) => {
       if (
        element.name === snack["name"] &&
        element.amount < snack["quantity"]
      ) {
        alert("Not enough stock");
        flag= false;
      }
    });
     return flag;
  };
  addSnack = () => {
    const snackToAdd = {
      name: this.state.selectedItem,
      quantity: this.state.selectedQuantity,
    };
    let flag = this.validationInput(snackToAdd);
    if (flag) {
      this.props.snacks.forEach(element=>{
if(element.name===snackToAdd.name){
  snackToAdd.price=element.price
}
      })
      let copyItemsToPurchase = [...this.state.itemsToPurchased];
      copyItemsToPurchase.push(snackToAdd);
      this.setState({
        itemsToPurchased: copyItemsToPurchase,
        selectedItem: "",
        selectedQuantity: "",
      });
    }
    else {
      this.setState({
        selectedItem: "",
        selectedQuantity: "",
      }); 
    }
  };

  render() {
    return (
      <div className="keyPad">
        <div className="screen">
          <p>Item:{this.state.selectedItem}</p>
          <p>Amount:{this.state.selectedQuantity}</p>
        </div>

        <div className="keys">
          <div className="letters">
            {this.state.letters.map((letter) => (
              <Button
                selectedKey={this.selectedKey}
                key={letter}
                button={letter}
              />
            ))}
          </div>
          <div className="numbers">
            {this.state.numbers.map((number) => (
              <Button
                selectedKey={this.selectedKey}
                key={number}
                button={number}
              />
            ))}
          </div>
        </div>
        <div className="buttons">
          <div className="radio">
            <div>
            <input
              type="radio"
              name="Snack"
              value="Item"
              id="Item"
              onChange={this.onChangeValue}
            />
            </div>
            <label htmlFor="Item">Item</label>
            <div>
            <input
              type="radio"
              name="Snack"
              value="Quantity"
              id="Quantity"
              onChange={this.onChangeValue}
            />
            <label htmlFor="Quantity">Quantity</label>
            </div>
          </div>
          <button onClick={this.escItem}>Esc</button>
          <button onClick={this.addSnack}>Add</button>
        </div>

        <div className="itemsSelected">
          <h4>Snacks Selected</h4>

          {this.state.itemsToPurchased.length ? (
            this.state.itemsToPurchased.map((item) => {
              return <div className="itemList"> <div>{item.name}</div>  <div>{item.quantity * item.price}</div></div>;
            })
          ) : (
            <div className="noItem">No Selected Item</div>
          )}
          <div>
          <button onClick={this.clearItems}>Clear</button>
          <button onClick={this.itemsChoosen}>Done</button>
          </div>
        </div>
      </div>
    );
  }
}
