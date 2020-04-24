import React from "react";
import "./App.css";
import "./Handlare.css"
import ReactDOM from "react-dom";
import Kund from './Kund';
import "./Product.css";

class Product extends React.Component {
    render() {
        return (
            <div>
                <span>
                    <img
                        src={this.props.url}
                        width="200"
                        height="200"
                        alt="new"
                    />
                    <h3>{this.props.name}</h3>
                </span>
            </div>
        );
    }
}

export default Product;