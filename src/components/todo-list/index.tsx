import * as React from 'react';
import TodoItem from '@/components/todo-list-item/index';
import { TDListProps } from '@/interface/index';

const TodoList: React.FC<TDListProps> = ({ todoList }) => {
  return (
    <ul>
      { todoList.map(todo => {
        return (
          <TodoItem
            key= { todo.id }
            todo={ todo }
          ></TodoItem>
        )
      }) }
    </ul>
  )
}

export default TodoList;