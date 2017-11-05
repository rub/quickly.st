import React from 'react';

import './TodoForm.css';


class TodoForm extends React.Component {
  render() {
    return (
      <div className="todo_form">
        <form className="form" onSubmit={this.props.submit}>
          <input
            className="input"
            placeholder="Add new item"
            onChange={this.props.text}
            value={this.props.inputValue}
          />
          <button className="button" type="submit">+</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;
