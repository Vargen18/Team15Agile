import React from 'react';

function who() {
    return "World";
}

function Square(props) {
    return <h1>Hej, {props.name} and {who()}</h1>;
}

export default Square;