import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      text: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  /**
   * Update the input text state while user is writing.
   */
  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  /**
   * Display a todo item based on input text value.
   * Clear the input text once user submitted the item.
   */
  handleSubmit(e) {
    e.preventDefault();

    if(!this.state.text) {
      return;
    }

    const newItem = {
      text: this.state.text,
      id: Date.now()
    }

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }))
  }

  /**
   * Create a new array that contains every item except the one user is
   * removing. To do this we use the filter method to check the key of the
   * clicked item against all of the items of the list.
   * @param  {string} key - The item's key user is removing.
   * @return {array} An array of remaining todo items.
   */
  handleDelete(key) {
    var filteredItems = this.state.items.filter(item => item.id !== key);

    this.setState({
      items: filteredItems
    })
  }

  render() {
    return (
      <div className="app">
        <div className="app-container">
          <TodoForm
            text={this.handleChange}
            submit={this.handleSubmit}
            inputValue={this.state.text}
          />
          <TodoList
            items={this.state.items}
            delete={this.handleDelete}
          />
        </div>
      </div>
    )
  }
}

export default App;
