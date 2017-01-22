import React from 'react';

const Itemslist = ({ items, onTaskDelete }) => {
  // For every item in the array, map() give us the single task in item
  // and the index of the item in id.
  // It creates a new anonimous function that receives those two things
  // parameter and will return a value of the data.
  // map() uses the input element to create a <li> based on task item
  const itemsList = items.map((item, id) =>
    <li key={id}>
      {item}
      <button className="delete" onClick={onTaskDelete} value={id}>Delete</button>
    </li>,
  );
  return (
    <div className="item_list">
      <ul>
        {itemsList}
      </ul>
    </div>
  );
};

Itemslist.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    item: React.PropTypes.string,
  })),
  onTaskDelete: React.PropTypes.func,
};

export default Itemslist;
