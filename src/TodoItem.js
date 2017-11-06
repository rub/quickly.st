import React from 'react';
import SvgIcon from './SvgIcon';

import './TodoItem.css';


class TodoItem extends React.Component {
  render() {
    return (
      <li className="todo_item">
        <div>
          <SvgIcon icon="check" />
        </div>
        <span className="todo_text">{this.props.text}</span>
        <div onClick={(e) => this.props.delete(this.props.id, e)}>
          <SvgIcon icon="delete" />
        </div>
      </li>
    )
  }
}

export default TodoItem;
