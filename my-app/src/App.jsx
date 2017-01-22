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
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    // Store the input value into a constant named "task"
    const task = this.state.value;
    // Add the task to the "items" array
    this.state.items.push(task);
    // Update items state with the newly added task
    this.setState({ items: this.state.items });

    // Clear the input value after the item is created
    this.state.value = '';

    // Prevent page refresh when the handleSubmit is called
    e.preventDefault();
  }

  handleDeleteItem(e) {
    // Get the index (the id value associated with the button) of the item that
    // dispatches the event, then store it in a constant.
    const itemIndex = parseInt(e.target.value, 10);
    console.log(itemIndex, this.state.items[itemIndex]);

    // Store the array of items into a constant
    const itemsList = this.state.items;

    // Remove the targeted item from the array
    itemsList.splice(itemIndex, 1);

    // Update the state of the array
    this.setState({ items: itemsList });
  }

  render() {
    return (
      <div className="App">
        <ItemGenerator
          inputValue={this.state.value}
          onInputChange={this.handleChange}
          onTaskSubmit={this.handleSubmit}
        />
        <ItemsList items={this.state.items} onTaskDelete={this.handleDeleteItem} />
      </div>
    );
  }
}

export default App;
