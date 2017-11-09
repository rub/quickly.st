import React from 'react';
import SvgIcon from './SvgIcon';

import './TodoItem.css';


class TodoItem extends React.Component {
  render() {
    const checkedStyle = this.props.hasChecked === true ? 'is_checked' : '';
    return (
      <li className="todo_item">
        <div onClick={(e) => this.props.checkItem(this.props.id)} className={checkedStyle}>
          <SvgIcon icon="check" />
        </div>
        <span className={"todo_text " + checkedStyle}>{this.props.text}</span>
        <div onClick={(e) => this.props.delete(this.props.id)}>
          <SvgIcon icon="delete" />
        </div>
      </li>
    )
  }
}

export default TodoItem;
