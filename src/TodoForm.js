import React from 'react';
import SvgIcon from './SvgIcon';

import './TodoForm.css';


class TodoForm extends React.Component {
  render() {
    const plusStyle = this.props.inputValue ? "is_not_empty" : "";

    return (
      <div className="todo_form">
        <form className="form" onSubmit={this.props.submit}>
          <input
            className="input"
            placeholder="Add new item"
            onChange={this.props.text}
            value={this.props.inputValue}
            autoFocus
          />
          <label className="add_container">
            <input className="hidden_submit" type="submit" />
            <div className={plusStyle}>
              <SvgIcon icon="add" />
            </div>
          </label>
        </form>
      </div>
    )
  }
}

export default TodoForm;
