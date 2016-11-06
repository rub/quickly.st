import React, { Component } from 'react';
import ItemGenerator from './ItemGenerator/ItemGenerator.js';
import ItemsList from './ItemsList/ItemsList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemGenerator />
        <ItemsList />
      </div>
    );
  }
}

export default App;
