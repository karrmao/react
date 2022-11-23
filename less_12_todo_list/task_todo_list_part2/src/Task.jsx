import React from 'react';
import classNames from 'classnames';
//onChange, id, onDelete
const Task = ({ done, text, onChange, id, onDelete }) => {
  const listItemClasses = classNames('list-item', { 'list-item_done': done });
  return (
    <li className={listItemClasses}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn " onClick={() => onDelete(id)}></button>
    </li>
  );
};
export default Task;
//change
//<li className="list-item"></li>
//  const listItemClasses = `list-item ${done ? 'list-item_done' : ''}`;
// onChange={onChange} =>
