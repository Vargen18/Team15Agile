import React, { Component } from "react";
import ProductList from "./ProductList";

class ShowProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: props.productList,
        };
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <ProductList products={this.state.productList} />
            </div>
        );
    }
}

export default ShowProducts;