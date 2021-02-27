import React from 'react';
import {  TDItemProps } from '../../interface/index';

const TodoItem: React.FC<TDItemProps> = ({ todo }) => {
  return (
    <li>
      { todo.text }
    </li>
  );
}

export default TodoItem;
