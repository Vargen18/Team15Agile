import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import Square from "./Square";
import "./App.css";
import "./Kund.css";
import ReactDOM from "react-dom";
import Handlare from "./Handlare";
import Product from "./Product";
import { getProducts } from "./database/Database";
import { func } from "prop-types";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.addProduct = this.addProduct.bind(this);
    this.state = {
      cartItems: [
        {
          name: "YEP",
          url:
            "https://upload.wikimedia.org/wikipedia/commons/a/a5/Glass_of_Milk_%2833657535532%29.jpg",
          key: "CLOCK"
        },
        {
          name: "YEP",
          url:
            "https://upload.wikimedia.org/wikipedia/commons/a/a5/Glass_of_Milk_%2833657535532%29.jpg",
          key: "KOCK"
        }
      ]
    };
  }

  render() {
    return (
      <div className="ShoppingCart">
        {this.state.cartItems.map(product => (
          <Product name={product.name} url={product.url} key={product.key} />
        ))}
        <button onClick={this.addProduct}>MORE YEP</button>;
      </div>
    );
  }

  getCartItems() {
    return <div class="Cart">{this.state.cartItems}</div>;
  }

  addProduct() {
    const a = {
      name: "YEP",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/a/a5/Glass_of_Milk_%2833657535532%29.jpg",
      key: "Dock"
    };
    const oldItems = this.state.cartItems;
    const newItems = [...oldItems, a];
    console.log("YEP");
    //this.setState(this.state.cartItems.concat(a));
    this.setState((state) => {
      return {cartItems: state.cartItems.concat(a)}
    })
    //alert("YEP2");
  }
}

function Kund() {
  const shoppingCart = <ShoppingCart />;
  //shoppingCart.addProduct();
  return (
    <div className="Wrapper">
      <div className="Kund">
        <div className="buttonsNShit">
          {GoToHandlare()}
          {ShoppingKartButton()}
        </div>
        <h1>Kund</h1>
        {ShowProduct()}
        {shoppingCart}
      </div>
    </div>
  );
}

function ShowProduct() {
  return (
    <div class="container">
      <Product
        name="Milk"
        url="https://upload.wikimedia.org/wikipedia/commons/a/a5/Glass_of_Milk_%2833657535532%29.jpg"
      />
      <Product
        name="Yoghurt"
        url="https://webcomicms.net/sites/default/files/clipart/143564/yoghurt-pictures-143564-9861608.jpg"
      />
      <Product
        name="Nocco"
        url="https://www.tingstad.com/fixed/images/Main/1570702879/21366260.png"
      />
    </div>
  );
}

function GoToHandlare() {
  return <button onClick={redirectToHandlare}>Handlare</button>;
}

function redirectToHandlare() {
  ReactDOM.render(<Handlare />, document.getElementById("root"));
}

function ShoppingKartButton() {
  return (
    <i class="material-icons-outlined" onClick={OpenShoppingKart}>
      shopping_cart
    </i>
  );
}

function OpenShoppingKart() {
  alert("ShoppingKart");
}

export default Kund;
