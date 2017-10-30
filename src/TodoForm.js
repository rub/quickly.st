import React from 'react';


class TodoForm extends React.Component {
  render(foo) {
    return (
      <form>
        <input
          placeholder="Add new item"
          onChange={this.props.value}
        />
        <button type="submit">+</button>
      </form>
    )
  }
}

export default TodoForm;
