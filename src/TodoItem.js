import React from 'react';
import SvgIcon from './SvgIcon';

import './TodoItem.css';


class TodoItem extends React.Component {
  render() {
    const checkedStyle = this.props.hasChecked === true ? 'is_checked' : '';
    const itemOptionsStyle = this.props.hovered === true ? 'are_options_visible' : '';

    return (
      <li
        className="todo_item"
        onMouseOver={() => this.props.toggleItemOptions(this.props.id)}
        onMouseOut={() => this.props.toggleItemOptions(this.props.id)}
      >
        <div onClick={(e) => this.props.checkItem(this.props.id)} className={checkedStyle}>
          <SvgIcon icon="check" />
        </div>
        <span className={`todo_text ${checkedStyle}`}>{this.props.text}</span>
        <div className={`delete ${itemOptionsStyle}`} onClick={(e) => this.props.delete(this.props.id)}>
          <SvgIcon icon="delete" />
        </div>
      </li>
    )
  }
}

export default TodoItem;
