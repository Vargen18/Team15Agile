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

class Kund extends Component {
  constructor(props) {
    super(props);
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    //this.ShowProduct = this.ShowProduct.bind(this);
    this.state = {
      cart: [],
    };
  }

  render() {
    return (
      <div className="Kund">
        <div className="buttonsNShit">{ShoppingKartButton()}</div>
        <a href="/handlare">Gå till Handlare</a>
        <h1>Kund</h1>
        <main>
          {this.ShowProduct()}
          {this.ShoppingKart()}
        </main>
      </div>
    );
  }

  ShoppingKart() {
    return (
      <div className="ShoppingCart">
        {this.state.cart.map((product) => (
          <div>
            <Product
              name={product.name}
              url={product.url}
              key={product.key}
            />
            {this.ChangeNrProducts(product)}
          </div>
        ))}
        {/* This is mostly for testing, it simply calls removeProduct with a product with name:YEP*/}
      </div>
    )
  }

  ChangeNrProducts(product) {
    return (
      <div>
        <button onClick={() => this.addProduct(product)}>
          +
      </button>
        <button onClick={() => this.removeProduct(product)}>
          -
      </button>
      </div>
    );
  }

  ShowProduct() {
    return (
      <ShowProducts
        productList={db.getProducts()}
        addProd={this.addProduct.bind(this)}
        removeProd={this.removeProduct.bind(this)}
      />
    );
  }

  getCartItems() {
    return <div class="Cart">{this.state.cart}</div>;
  }

  addProduct(Product) {
    this.setState((state) => {
      return { cart: state.cart.concat(Product) };
    });
    // update localStorage
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  }

  removeProduct(Product) {
    var flag = false;
    for (let i = 0; i < this.state.cart.length; i++) {
      if (this.state.cart[i].name == Product.name) {
        this.state.cart.splice(i, 1);

        i--;
        this.setState(this.state);

        break;
      }
    }
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
