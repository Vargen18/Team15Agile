import React, { Component } from "react";

// Class that holds the name of a product and can render that name, without any real formatting.
// Made to be used for the product list component.
// Param: name
class ProductListIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.name,
      picture: props.url,
      button: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      button: !this.state.button,
    });
  }

  render() {
    return (
      <div className="Product">
        <img
          src={this.state.picture}
          width="200"
          height="200"
          alt="new"
        />
        <h3>{this.state.product}</h3>
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
