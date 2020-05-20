import React, { Component } from "react";
import "./App.css";
import "./Kund.css";
import Product from "./Product";
import { getProducts } from "./database/Database";
import { func } from "prop-types";
import ShowProducts from "./Components/ShowProducts";
import ProductListIcon from "./Components/ProductListIcon";
import * as db from "./database/Database";
import App from "./App";
import ListGroup from "react-bootstrap/ListGroup";
import getExcel from "./database/ExcelLoader";

// Kund is the main component for the Kund page
// Loads the products and keeps track of the customers shoppingcart.
// Also provides a navigation bar for all the product categories.
class Kund extends Component {
  constructor(props) {
    super(props);
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.state = {
      cart: [],
      section: "Alla",
    };
  }

  render() {
    return (
      <div className="Kund">
        <h1>Kund</h1>
        <div className="cart">
          {this.CategoryBar()}
          <div className="width">{this.ShowProduct()}</div>
          {this.ShoppingKart()}
        </div>
      </div>
    );
  }

  // Displays the shopping cart with the selected products taken from this.state.cart.
  ShoppingKart() {
    var i = new Date().getTime();
    return (
      <div class="card border-secondary mb-3" style={{ width: "13.193rem" }}>
        <div class="card-header">
          <h5>Varukorg</h5>
        </div>
        {this.state.cart.map((product) => (
          <Product
            product={product}
            name={product.name}
            url={product.url}
            units={product.units}
            section={product.section}
            comment={product.comment}
            key={product.name + product.comment + i}
            checked={product.checked}
            removeProd={this.removeProduct.bind(this)}
            addProd={this.addProduct.bind(this)}
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
    console.log(db.getSections().length);
    return (
      <div className="menu">
        <ul class="list-group">
          {this.CategoryButton("Alla")}
          {db.getSections().map((section) => this.CategoryButton(section))}
          {/* {this.CategoryButton("Alla")}
          {this.CategoryButton("Bröd")}
          {this.CategoryButton("Mejeri")}
          {this.CategoryButton("Frukt och grönt")}
          {this.CategoryButton("Kött")}
          {this.CategoryButton("Fryst")} */}
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
      var k = new Date().getTime();
      this.state.cart[i].units += 1;
      this.state.cart[i].checked = Product.checked;
      this.setState(this.state);
    }
    // updates localStorage for the shopping cart after a product has been added.
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  }

  // Checks whether a product exists in the current kart or not. Used in removeProduct().
  productExists(product) {
    for (let i = 0; i < this.state.cart.length; i++) {
      if (this.state.cart[i].name == product.name) {
        if (this.state.cart[i].comment == product.comment) {
          return i;
        }
      }
    }
    return -1;
  }

  // Removes one unit of a product from the cart, if there is only one, remove the card.
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
    // update localStorage for the shopping cart after a product has been removed.
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
