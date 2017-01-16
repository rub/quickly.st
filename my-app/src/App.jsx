import React from 'react';
import ItemGenerator from './ItemGenerator/ItemGenerator';
import ItemsList from './ItemsList/ItemsList';


class App extends React.Component {
  constructor(props) {
    super(props);

    // Set up default states
    this.state = {
      items: [],
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // Store the input value into a constant named "task"
    const task = this.state.value;
    // Add the task to the "items" array
    this.state.items.push(task);
    // Update items state with the newly added task
    this.setState({ items: this.state.items });

    // Clear the input value after the item is created
    this.state.value = '';

    // Prevent page refresh when the handleSubmit is called
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <ItemGenerator
          inputValue={this.state.value}
          onInputChange={this.handleChange}
          onTaskSubmit={this.handleSubmit}
        />
        <ItemsList items={this.state.items} />
      </div>
    );
  }
}

export default App;
