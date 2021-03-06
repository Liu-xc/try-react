import React, { useState } from 'react';
import TodoItem from '@/components/todo-list-item/index';
import { List, Button, Input } from 'antd';
import { StoreTDListProps } from '@/interface/index';

const StoreTodoList: React.FC<StoreTDListProps> = ({ todoList = [], onAddTodo }) => {
  const [text, setText] = useState('');
  const [showInput, setShowInput] = useState(false);

  const onInputChange = (e: any) => {
    setText(e.target.value)
  }

  const handleListChange = (e: any) => {
    console.log('handleListChange', e);
  }

  const onConfirm = () => {
    onAddTodo(text);
    hideInput()
  }

  const hideInput = () => {
    setShowInput(false)
    setText('')
  }

  return (
    <>
      <List>
        { todoList.map(todo => {
          return (
            <TodoItem
              key={ todo.id }
              todo={ todo }
              handleListChange={ handleListChange }
            ></TodoItem>
          )
        }) }
      </List>
      <Button onClick={ () => setShowInput(true) }>添加</Button>
      <Input value={ text } onChange={ onInputChange } className={ showInput ? 'show-input' : 'hide-input'}></Input>
      <Button onClick={ onConfirm } className={ showInput ? 'show-input' : 'hide-input'}>确定</Button>
      <Button onClick={ hideInput } className={ showInput ? 'show-input' : 'hide-input'}>取消</Button>
    </>
  )
}

export default StoreTodoList;