import React from 'react';
import TodoInput from './TodoInput/TodoInput';
import SvgIcon from '../SvgIcon/SvgIcon';
import PropTypes from 'prop-types';

import './TodoForm.css';

/**
 * The input form where user can create todos
 */
const TodoForm = (props) => {
  const addStyles = props.value !== '' ? 'is_filled' : '';

  return (
    <div className="TodoForm">
      <TodoInput value={props.value} onChange={props.onChange} />
      <label className="TodoForm-submit">
        <input className="TodoForm-submit-hidden" type="submit" />
        <SvgIcon
          className={`TodoForm-submit-visible ${addStyles}`}
          icon="add"
          onSubmit={props.onSubmit}
        />
      </label>
    </div>
  )
}

TodoForm.propTypes = {
  /** TodoInput must have a value */
  value: PropTypes.string.isRequired,
  
  /** TodoInput must have a function which stores the user input */
  onChange: PropTypes.func.isRequired,

  /** TodoForm must have a function which submits the form */
  onSubmit: PropTypes.func,
}

export default TodoForm;
