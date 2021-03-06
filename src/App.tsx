import 'antd/dist/antd.min.css';
import './App.css';
import { TDList, TDItem } from '@/interface/index';
import TodoList from '@/components/todo-list/index';
import React, { FC, useState } from 'react';
import StoreList from '@/store/containers/todoList';
interface TDLChange {
  type: string,
  todo: TDItem,
}

const App:FC = (props) => {
  console.log(props);
  const [todoList, setTodoList] = useState([{
    id: '1',
    text: 'hello',
  },{
    id: '2',
    text: 'hey',
  },{
    id: '3',
    text: 'hi',
  }] as TDList);
  
  const handleListChange = (change: TDLChange) => {
    console.log('handleListChange', change);
    const list = todoList.slice();
    // TODO 这里判断变化的类型来判断进行什么操作
    switch (change.type) {
      case 'add':
        list.push(change.todo);
        setTodoList(list);
        break;
      case 'delete':
        setTodoList(list.filter(todo => todo.id !== change.todo.id));
        break;
      case 'update':
        const idx = list.findIndex(todo => todo.id === change.todo.id);
        list[idx] = change.todo;
        setTodoList(list);
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <TodoList {...{todoList, handleListChange}}></TodoList>
        <StoreList></StoreList>
      </header>
    </div>
  );
}

export default App;
