import React from "react";
import "./App.css";
import "./Handlare.css";
import "./Product.css";

class Product extends React.Component {
  render() {
    return (
      <div className="Product">
        <img src={this.props.url} width="200" height="200" alt="new" />
        <h3>{this.props.name}</h3>
        <h4>{this.props.units}</h4>
      </div>
    );
  }
}

export default Product;
