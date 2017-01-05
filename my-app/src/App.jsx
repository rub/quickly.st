import React from 'react';
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
    this.state = { items };
  }

  render() {
    return (
      <div className="App">
        <ItemsList items={this.state.items} />
      </div>
    );
  }
}

export default App;
