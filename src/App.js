import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * [handleChange description]
   * Update input text value
   */
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <TodoForm value={this.handleChange} />
        <TodoList />
      </div>
    )
  }
}

export default App;
