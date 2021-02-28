import logo from './logo.svg';
import 'antd/dist/antd.min.css';
import './App.css';
import { TDList, TDItem } from '@/interface/index';
import TodoList from '@/components/todo-list/index';
import React, { FC, useState } from 'react';

interface TDLChange {
  type: string,
  todo: TDItem,
}

const App:FC = () => {
  const [todoList, setTodoList] = useState([{
    id: 1,
    text: 'hello',
  },{
    id: 2,
    text: 'hey',
  },{
    id: 3,
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TodoList {...{todoList, handleListChange}}></TodoList>
      </header>
    </div>
  );
}

export default App;
