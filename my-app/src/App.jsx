import React from 'react';
import ItemGenerator from './ItemGenerator/ItemGenerator';
import ItemsList from './ItemsList/ItemsList';

const items = [
  {
    id: 1,
    task: 'This is the first item',
  },
  {
    id: 2,
    task: 'This is the second item',
  },
  {
    id: 3,
    task: 'This is the third item',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    // Set up the state
    this.state = {
      items,
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <ItemGenerator inputValue={this.state.value} onInputChange={this.handleChange} />
        <ItemsList items={this.state.items} />
      </div>
    );
  }
}

export default App;
