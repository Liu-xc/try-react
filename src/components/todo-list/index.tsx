import * as React from 'react';
import TodoItem from '@/components/todo-list-item/index';
import { TDListProps } from '@/interface/index';
import { List } from 'antd';

const TodoList: React.FC<TDListProps> = ({ todoList }) => {
  return (
    <List>
      { todoList.map(todo => {
        return (
          <TodoItem
            key= { todo.id }
            text={ todo.text }
          ></TodoItem>
        )
      }) }
    </List>
  )
}

export default TodoList;