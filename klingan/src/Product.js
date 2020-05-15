import React from "react";
import "./App.css";
import "./Handlare.css";
import "./Product.css";

class Product extends React.Component {
  render() {
    return (
      <div class="card mb-3" style={{ width: "13rem" }}>
        <img class="card-img-top" src={this.props.url} alt="Card image cap" height="200px" />
        <div class="card-body">
          <h5 class="card-title">{this.props.name}</h5>
          <h5 class="card-title">{this.props.units}</h5>
        </div>
      </div>
    );
  }
}

export default Product;
