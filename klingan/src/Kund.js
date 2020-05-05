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
import ShowProducts from "./Components/ShowProducts";
import * as db from "./database/Database";
import App from "./App";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.state = {
      cartItems: [
        {
          name: "YEPpp",
          url:
            "https://upload.wikimedia.org/wikipedia/commons/a/a5/Glass_of_Milk_%2833657535532%29.jpg",
          key: "CLOCK"
        },
        {
          name: "CO",
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
        <button onClick={() => this.removeProduct({name: "YEP"})}>LESS YEP</button>; {/* This is mostly for testing, it simply calls removeProduct with a product with name:YEP*/}
      </div>
    );
  }

  getCartItems() {
    return <div class="Cart">{this.state.cartItems}</div>;
  }

  addProduct(Product) {
    const newProduct = {
      name: "YEP",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/a/a5/Glass_of_Milk_%2833657535532%29.jpg",
      key: "Dock"
    };
    const oldItems = this.state.cartItems;
    const newItems = [...oldItems, newProduct];
    console.log("YEP");
    this.setState(state => {
      return { cartItems: state.cartItems.concat(newProduct) };
    });
  }

  removeProduct(Product) { 
    var flag = false;
    for (let i = 0; i < this.state.cartItems.length; i++) {
      if (this.state.cartItems[i].name == Product.name) {
        this.state.cartItems.splice(i, 1);

        i--;
        this.setState(this.state);
        break;
      }
    }
  }
}

function Kund() {
  const shoppingCart = <ShoppingCart />;
  //shoppingCart.addProduct();
  return (
    <div className="Wrapper">
      <div className="Kund">
        <div className="buttonsNShit">{ShoppingKartButton()}</div>
        <a href="/handlare">Gå till Handlare</a>
        <h1>Kund</h1>
        {ShowProduct()}
        {shoppingCart}
      </div>
    </div>
  );
}

function ShowProduct() {
  return <ShowProducts productList={db.getProducts()} />;
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

function GoHome() {
  return <button onClick={redirectHome}>Hem</button>;
}

function redirectHome() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

export default Kund;
