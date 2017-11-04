import React from 'react';


class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.submit}>
          <input
            placeholder="Add new item"
            onChange={this.props.text}
            value={this.props.inputValue}
          />
          <button type="submit">+</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;
