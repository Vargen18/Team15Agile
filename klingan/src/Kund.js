import React, { Component } from "react";
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
        <div className="cart">
          {this.CategoryBar()}
          <div className="width">
            {this.ShowProduct()}
          </div>
          {this.ShoppingKart()}
        </div>
      </div>
    );
  }

  // Displays the shopping cart with the selected products taken from this.state.cart.
  ShoppingKart() {
    return (
      <div class="card border-secondary mb-3" style={{ width: "13.193rem" }}>
        <div class="card-header">
          <h5>Varukorg</h5>
        </div>
        {this.state.cart.map((product) => (
          <Product
            name={product.name}
            url={product.url}
            key={product.key}
            units={product.units}
          />
        ))}
      </div>
    );
  }

  // Loads all the products in the database and binds the add and removeproduct functions to the current Kund.
  ShowProduct() {
    var k = this.state.section;
    var productList = db.getProducts().filter((product) => {
      if (k == "Alla") {
        return true;
      } else {
        return k == product.section;
      }
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

  // Assembles all the category buttons and align them nicely to the left.
  CategoryBar() {
    return (
      <div className="menu">
        <ul class="list-group">
          {this.CategoryButton("Alla")}
          {this.CategoryButton("Bröd")}
          {this.CategoryButton("Mejeri")}
          {this.CategoryButton("Frukt och grönt")}
          {this.CategoryButton("Kött")}
          {this.CategoryButton("Fryst")}
        </ul>
      </div>
    );
  }

  // Loads a button for selecting product category. Then only the corresponding products are shown.
  // The current category is highlighted through the " active" string.
  CategoryButton(category) {
    return (
      <li
        class={
          "list-group-item list-group-item-action" +
          (this.state.section == category ? " active" : "")
        }
        onClick={() => this.setState({ section: category })}
      >
        {category}
      </li>
    );
  }

  // Adds a product from the product gallery to the shopping kart.
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

  // Checks whether a product exists in the current kart or not. Used in removeProduct().
  productExists(product) {
    for (let i = 0; i < this.state.cart.length; i++) {
      if (this.state.cart[i].name == product.name) {
        return i;
      }
    }
    return -1;
  }

  // Remove button in the product gallery fro removing products from the kart.
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

  componentDidMount() {
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
}

export default Kund;
