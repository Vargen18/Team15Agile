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

// Kund is the main component for the Kund page. Loads the products and keeps track of the customers shoppingcart.
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
        <a href="/handlare">Gå till Handlare</a>
        <h1>Kund</h1>
        <main>
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
            <button
              onClick={() =>
                this.addProduct({
                  id: 5,
                  name: "YEP",
                  url:
                    "https://webcomicms.net/sites/default/files/clipart/143564/yoghurt-pictures-143564-9861608.jpg",
                  units: 5,
                })
              }
            >
              MORE YEP
            </button>
            <button onClick={() => this.removeProduct({ name: "YEP" })}>
              LESS YEP
            </button>
            {/* This is mostly for testing, it simply calls removeProduct with a product with name:YEP*/}
          </div>
        </main>
      </div>
    );
  }

  // Loads all the products in the database and binds the add and removeproduct functions to the current Kund.
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
    let i = this.productExists(Product);
    if (i == -1) {
      this.setState((state) => {
        return {
          cart: state.cart.concat({
            name: Product.name,
            url: Product.url,
            units: 1,
          }),
        };
      });
    } else {
      console.log(Product);

      this.state.cart[i].units += 1;
      this.setState(this.state);
    }
    // update localStorage
    sessionStorage.setItem("cart", JSON.stringify(this.state.cart));
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
    sessionStorage.setItem("cart", JSON.stringify(this.state.cart));
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let id in this.state) {
      // if the key exists in localStorage
      if (sessionStorage.hasOwnProperty(id)) {
        // get the key's value from localStorage
        let products = sessionStorage.getItem(id);

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

/*
componentDidMount() {
  this.hydrateStateWithLocalStorage();
}

hydrateStateWithLocalStorage() {
  // for all items in state
  for (let name in this.state) {
    // if the key exists in localStorage
    if (localStorage.hasOwnProperty(name)) {
      // get the key's value from localStorage
      let Productss = localStorage.getItem("Product");

      // parse the localStorage string and setState
      try {
        Productss = JSON.parse(Productss);
        this.setState(this.state);
      } catch (e) {
        // handle empty string
        this.setState(this.state);
      }
    }
  }
}
*/
export default Kund;
