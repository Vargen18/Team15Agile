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

class Kund extends Component {
  constructor(props) {
    super(props);
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    //this.ShowProduct = this.ShowProduct.bind(this);
    this.state = {
      cart: [
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
      <div className="Kund">
        <div className="buttonsNShit">{ShoppingKartButton()}</div>
        <a href="/handlare">Gå till Handlare</a>
        <h1>Kund</h1>
        <main>
          {this.ShowProduct()}

          <div className="ShoppingCart">
            {this.state.cart.map(product => (
              <Product
                name={product.name}
                url={product.url}
                key={product.key}
              />
            ))}
            <button
              onClick={() =>
                this.addProduct({
                  id: 5,
                  name: "YEP",
                  url:
                    "https://webcomicms.net/sites/default/files/clipart/143564/yoghurt-pictures-143564-9861608.jpg"
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
    this.setState(state => {
      return { cart: state.cart.concat(Product) };
    });
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
