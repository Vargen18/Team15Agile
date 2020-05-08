import React, { Component } from "react";

// A class that is used to render one specific product in the ProductList.
// Param: name, url, click function
class ProductListIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.name,
      picture: props.url,
      button: false,
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
        <img src={this.state.picture} width="200" height="200" alt="new" />
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
