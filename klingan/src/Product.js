import React from "react";
import "./App.css";
import "./Handlare.css";
import "./Product.css";

// Class that provides a card for a product containing the name, comment, information about amount and whether another product is accepted
// Also button for adding product to cart
// Uses the Button and Card bootstrap framworks.
// Made to be used for the cart
// Param: Product, addProd, removeProd, comment, checked (Whether checkbox was clicked or not in main browse window)
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product,
      addProd: props.addProd,
      removeProd: props.removeProd,
      comment: props.comment,
      checked: props.checked,
      replacementProduct: props.checked
        ? "Ersättningsvara tillåts"
        : "Ersättningsvara tillåts ej"
    };

    this.increaseClick = this.increaseClick.bind(this);
    this.decreaseClick = this.decreaseClick.bind(this);
  }

  //Adds another product/unit to the cart
  increaseClick() {
    this.state.addProd({
      name: this.props.name,
      url: this.props.url,
      units: 1,
      section: this.props.section,
      comment: this.state.comment,
      checked: this.state.checked,
    });
  }

  //Removes the product/unit from the cart.
  decreaseClick() {
    this.state.removeProd(this.state.product);
  }

  render() {
    return (
      <div class="card mb-3" style={{ width: "13rem" }}>
        <div class="card-body">
          <h5 class="card-title">{this.props.name}</h5>
          <h5 class="card-title">{this.props.comment}</h5>
          <h5 class="card-title">{"Antal: " + this.props.units}</h5>
          <h5 class="card-title">{this.state.replacementProduct}</h5>
          <button
            type="button"
            class="btn btn-danger btn-lg"
            onClick={this.decreaseClick}
          >
            -
          </button>
          <button
            type="button"
            class="btn btn-success btn-lg"
            onClick={this.increaseClick}
            height="200px"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
