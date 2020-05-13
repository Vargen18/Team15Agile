import React, { Component } from "react";

class ShoppingItems extends React.Component {
    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }
    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)}
            key={item.key}>{item.text}</li>
    }

    render() {
        var shoppingEntries = this.props.entries;
        var listItems = shoppingEntries.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};

export default ShoppingItems;