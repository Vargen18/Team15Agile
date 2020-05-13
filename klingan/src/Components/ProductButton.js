import React, { Component } from 'react';
import Button from 'react-native-button';

export default class ProductButton extends Component {
    /* constructor(props, context) {
         super(props, context);
     } */

    render() {
        return (
            <Button
                containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 4, backgroundColor: 'white' }}
                disabledContainerStyle={{ backgroundColor: 'grey' }}
                style={{ fontSize: 20, color: 'green' }}>
                Press me!
            </Button>
        );
    }
};