import React from 'react';
import { TDItem } from '../../interface/index';

const TodoItem: React.FC<TDItem> = ({ todo }) => {
  return (
    <li>
      { todo.text }
    </li>
  );
}

export default TodoItem;
