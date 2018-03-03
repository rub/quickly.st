import React from 'react';
import PropTypes from 'prop-types';

import './TodoInput.css';


/**
 * The input field where user can write todos
 */
const TodoInput = (props) => (
  <div className="TodoInput">
    <input
      className="TodoInput-input"
      type="text"
      placeholder="Add new item"
      autoFocus
      value={props.value}
      onChange={props.onChange}
    />
  </div>
)

TodoInput.propTypes = {
  /** TodoInput must have a value */
  value: PropTypes.string.isRequired,

  /** TodoInput must have a function which stores the user input */
  onChange: PropTypes.func.isRequired,
}

export default TodoInput;
