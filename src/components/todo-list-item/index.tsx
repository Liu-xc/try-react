import React from 'react';
import { List } from 'antd';
import { TDItemProps } from '@/interface/index';
import './style/index.less';

const TodoItem: React.FC<TDItemProps> = ({ text }) => {
  return (
    <List.Item className="todo-item">
      { text }
    </List.Item>
  );
}

export default TodoItem;
