import logo from './logo.svg';
import 'antd/dist/antd.min.css';
import './App.css';
import TodoList from '@/components/todo-list/index.tsx';
function App() {
  const todoList = [{
    id: 1,
    text: 'hello',
  },{
    id: 2,
    text: 'hey',
  },{
    id: 3,
    text: 'hi',
  }]
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
        <TodoList todoList={ todoList }></TodoList>
      </header>
    </div>
  );
}

export default App;
