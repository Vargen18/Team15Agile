import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
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
import ListGroup from "react-bootstrap/ListGroup";

// Kund is the main component for the Kund page. Loads the products and keeps track of the customers shoppingcart.
class Kund extends Component {
  constructor(props) {
    super(props);
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.state = {
      cart: [],
      section: "Bröd",
    };
  }

  render() {
    return (
      <div className="Kund">
        <a href="/handlare">Gå till Handlare</a>
        <h1>Kund</h1>
        <div className="menu">
          <ul class="list-group">
            <li
              class={
                "list-group-item list-group-item-action" +
                (this.state.section == "Bröd" ? " active" : "")
              }
              onClick={() => this.setState({ section: "Bröd" })}
            >
              Bröd
            </li>
            <li
              class={
                "list-group-item list-group-item-action" +
                (this.state.section == "Mejeri" ? " active" : "")
              }
              onClick={() => this.setState({ section: "Mejeri" })}
            >
              Mejeri
            </li>
            <li
              class={
                "list-group-item list-group-item-action" +
                (this.state.section == "Frukt och grönt" ? " active" : "")
              }
              onClick={() => this.setState({ section: "Frukt och grönt" })}
            >
              Frukt och grönt
            </li>
            <li
              class={
                "list-group-item list-group-item-action" +
                (this.state.section == "Kött" ? " active" : "")
              }
              onClick={() => this.setState({ section: "Kött" })}
            >
              Kött
            </li>
            <li
              class={
                "list-group-item list-group-item-action" +
                (this.state.section == "Fryst" ? " active" : "")
              }
              onClick={() => this.setState({ section: "Fryst" })}
            >
              Fryst
            </li>
          </ul>
        </div>
        <div className="cart">
          {this.ShowProduct()}

          <div className="ShoppingCart">
            {this.state.cart.map((product) => (
              <Product
                name={product.name}
                url={product.url}
                key={product.key}
                units={product.units}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  ChangeNrProducts(product) {
    return (
      <div>
        <button onClick={() => this.addProduct(product)}>+</button>
        <button onClick={() => this.removeProduct(product)}>-</button>
      </div>
    );
  }

  // Loads all the products in the database and binds the add and removeproduct functions to the current Kund.
  ShowProduct() {
    var k = this.state.section;
    var productList = db.getProducts().filter((product) => {
      return k == product.section;
    });
    return (
      <div>
        <ShowProducts
          key={this.state.section}
          productList={productList}
          addProd={this.addProduct.bind(this)}
          removeProd={this.removeProduct.bind(this)}
        />
      </div>
    );
  }

  getCartItems() {
    return <div class="Cart">{this.state.cart}</div>;
  }

  addProduct(Product) {
    let i = this.productExists(Product);
    if (i == -1) {
      this.state.cart.push(Product);
      this.setState(this.state);
    } else {
      this.state.cart[i].units += 1;
      this.setState(this.state);
    }
    // update localStorage
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  }

  productExists(product) {
    for (let i = 0; i < this.state.cart.length; i++) {
      if (this.state.cart[i].name == product.name) {
        return i;
      }
    }
    return -1;
  }

  removeProduct(Product) {
    let i = this.productExists(Product);
    if (i > -1) {
      if (this.state.cart[i].units == 1) {
        this.state.cart.splice(i, 1);
      } else {
        this.state.cart[i].units -= 1;
      }
    }
    this.setState(this.state);
    // update localStorage
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let id in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(id)) {
        // get the key's value from localStorage
        let products = localStorage.getItem(id);

        // parse the localStorage string and setState
        try {
          products = JSON.parse(products);
          this.setState({ [id]: products });
        } catch (e) {
          // handle empty string
          this.setState({ [id]: products });
        }
      }
    }
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }
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
