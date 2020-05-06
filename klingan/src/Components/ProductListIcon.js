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
      button: false,
      kund: props.kund,
      addProd: props.addProd,
      removeProd: props.removeProd
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.button) {
      this.state.removeProd(this.state.product);
    } else {
      this.state.addProd(this.state.product);
    }
    this.setState({
      button: !this.state.button
    });
    //this.state.kund.addProduct(this.state.product);
  }

  render() {
    return (
      <div className="Product">
        <img src={this.state.picture} width="200" height="200" alt="new" />
        <h3>{this.state.productName}</h3>
        <button
          className={this.state.button ? "buttonTrue" : "buttonFalse"}
          onClick={this.handleClick}
        >
          Välj denna produkt
        </button>
      </div>
    );
  }
}

export default ProductListIcon;
