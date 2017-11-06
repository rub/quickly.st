import React from 'react';
import SvgIcon from './SvgIcon';

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
          <label className="add_container">
            <input className="hidden_submit" type="submit" />
            <SvgIcon icon="add" />
          </label>
        </form>
      </div>
    )
  }
}

export default TodoForm;
