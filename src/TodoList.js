import React from 'react';
import TodoItem from './TodoItem';

import './TodoList.css';


class TodoList extends React.Component {
  render() {
    return (
      <div className="todo_list">
        <ul className="list">
          {this.props.items.map(item => (
            <TodoItem
              key={item.id}
              id={item.id}
              text={item.text}
              hasChecked={item.checked}
              checkItem={this.props.checkItem}
              delete={this.props.delete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoList;
