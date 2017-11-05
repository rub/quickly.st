import React from 'react';

import './TodoItem.css';


class TodoItem extends React.Component {
  render() {
    return (
      <li className="todo_item">
        {this.props.text}
        <button onClick={(e) => this.props.delete(this.props.id, e)}>-</button>
      </li>
    )
  }
}

export default TodoItem;
