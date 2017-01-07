import React from 'react';

function ItemGenerator({ inputValue, onInputChange, onTaskSubmit }) {
  return (
    <div className="item_generator">
      <input
        className="item_generator-field"
        type="text" name="task"
        value={inputValue}
        onChange={onInputChange}
      />
      <button className="item_generator-add" onClick={onTaskSubmit}>Add</button>
    </div>
  );
}

ItemGenerator.propTypes = {
  inputValue: React.PropTypes.string,
  onInputChange: React.PropTypes.func,
  onTaskSubmit: React.PropTypes.func,
};

export default ItemGenerator;
