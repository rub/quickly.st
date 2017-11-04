import React from 'react';
import TodoItem from './TodoItem';


class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map(item => (
            <TodoItem
              key={item.id}
              id={item.id}
              text={item.text}
              delete={this.props.delete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoList;
