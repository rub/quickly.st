import React from 'react';

function ItemGenerator({ inputValue, onInputChange }) {
  return (
    <div className="item_generator">
      <input
        className="item_generator-field"
        type="text" name="task"
        value={inputValue}
        onChange={onInputChange}
      />
      <button className="item_generator-add">Add</button>
    </div>
  );
}

ItemGenerator.propTypes = {
  inputValue: React.PropTypes.string,
  onInputChange: React.PropTypes.func,
};

export default ItemGenerator;
