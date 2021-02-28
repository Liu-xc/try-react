import React from 'react';
import {  TDItemProps } from '@/interface/index';
import './style/index.less';

const TodoItem: React.FC<TDItemProps> = ({ todo }) => {
  return (
    <li className="todo-item">
      { todo.text }
    </li>
  );
}

export default TodoItem;
