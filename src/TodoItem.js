import React from 'react';


class TodoItem extends React.Component {
  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={(e) => this.props.delete(this.props.id, e)}>-</button>
      </li>
    )
  }
}

export default TodoItem;
