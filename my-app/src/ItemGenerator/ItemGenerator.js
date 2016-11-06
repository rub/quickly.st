import React, { Component } from 'react';

class ItemGenerator extends Component {
  render() {
    return (
      <div className="item_generator">
        <input className="item_generator-field" type="text" />
        <button className="item_generator-add">Add</button>
      </div>
    )
  }
}

export default ItemGenerator;
