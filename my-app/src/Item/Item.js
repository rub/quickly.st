import React, { Component } from 'react';
import ItemOptions from '../ItemOptions/ItemOptions.js';

class Item extends Component {
  render() {
    return (
      <div className="Item">
        <h3>Item</h3>
        <ItemOptions />
      </div>
    );
  }
}

export default Item;
