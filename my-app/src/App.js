import React, { Component } from 'react';
import Header from './Header/Header.js';
import Nav from './Nav/Nav.js';
import ItemGenerator from './ItemGenerator/ItemGenerator.js';
import ItemsList from './ItemsList/ItemsList.js';
import Footer from './Footer/Footer.js';
import Help from './Help/Help.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Header />
        <Nav />
        <Footer />
        <ItemGenerator />
        <ItemsList />
        <Help />
      </div>
    );
  }
}

export default App;
