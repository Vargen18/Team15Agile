import React, { Component } from "react";

// Class that holds the name of a product and can render that name, without any real formatting.
// Made to be used for the product list component.
// Param: name
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
    this.state.addProd({name : this.state.product.name, url: this.state.product.url, units: 4});
    //this.state.kund.addProduct(this.state.product);
  }

  decreaseClick() {
    this.state.removeProd(this.state.product);

    //this.state.kund.addProduct(this.state.product);
  }

  render() {
    return (
      <div className="Product">
        <img src={this.state.picture} width="200" height="200" alt="new" />
        <h3>{this.state.productName}</h3>
        <button onClick={this.increaseClick}>Öka denna produkt</button>
        <button onClick={this.decreaseClick}>Minska denna produkt</button>
      </div>
    );
  }
}

export default ProductListIcon;
