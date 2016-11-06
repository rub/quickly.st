import React, { Component } from 'react';
import Item from '../Item/Item.js';

class Itemslist extends Component {
  render() {
    return (
      <div className="Itemslist">
        <h2>Items list</h2>
        <Item />
      </div>
    )
  }
}

export default Itemslist;
