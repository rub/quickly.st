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
    this.handleCheck = this.handleCheck.bind(this);
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
      id: Date.now(),
      checked: false,
    }

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }))
  }

  /**
   * Check/uncheck the single item by clicking on the check icon.
   * To do this we update the checked boolean every time user clicks on it.
   * @param  {string} checkedItemId - The id of the item user is checking.
   * @return {array} An array that contains all items plus the updated one.
   */
  handleCheck(checkedItemId) {
    this.setState(prevState => ({
      items: prevState.items.map(item => (
        item.id === checkedItemId ? Object.assign({}, item, {checked: !item.checked}) : item)
      )
    }));
  }

  /**
   * Create a new array that contains every item except the one user is
   * removing.
   * To do this we use the filter method to check the key of the clicked item
   * against all of the items of the list.
   * @param  {string} deletingItemId - The id of the item user is removing.
   * @return {array} An array of remaining todo items.
   */
  handleDelete(deletingItemId) {
    const filteredItems = this.state.items.filter(item => item.id !== deletingItemId);

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
            checkItem={this.handleCheck}
          />
        </div>
      </div>
    )
  }
}

export default App;
