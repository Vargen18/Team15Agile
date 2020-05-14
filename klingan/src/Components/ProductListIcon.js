import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Class that holds the name of a product and can render that name, without any real formatting.
// Made to be used for the product list component.
// Param: name, url, units, addProd, removeProd
class ProductListIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product,
      productName: props.name,
      picture: props.url,
      units: props.units,
      kund: props.kund,
      addProd: props.addProd,
      removeProd: props.removeProd,
    };

    this.increaseClick = this.increaseClick.bind(this);
    this.decreaseClick = this.decreaseClick.bind(this);
  }

  increaseClick() {
    this.state.addProd({ name: this.state.product.name, url: this.state.product.url, units: 1 });
    //this.state.kund.addProduct(this.state.product);
  }

  decreaseClick() {
    this.state.removeProd(this.state.product);

    //this.state.kund.addProduct(this.state.product);
  }

  render() {
    return (
      <div class="card" style={{ width: "13rem" }}>
        <img class="card-img-top" src={this.state.picture} alt="Card image cap" height="200px" />
        <div class="card-body">
          <h5 class="card-title">{this.state.productName}</h5>
          <button type="button" class="btn btn-success btn-lg" onClick={this.increaseClick}>+</button>
          <button type="button" class="btn btn-danger btn-lg" onClick={this.decreaseClick}>-</button>
        </div>
      </div>
    );
  }
}

export default ProductListIcon;
