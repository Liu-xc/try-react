import React, { useState } from 'react';
import { List, Button, Input } from 'antd';
import { TDItemProps } from '@/interface/index';
import './style/index.less';

const TodoItem: React.FC<TDItemProps> = ({ handleListChange, todo }) => {
  const [text, setText] = useState('');
  const [showInput, setShowInput] = useState(false);
  const onClickEdit = () => {
    setShowInput(true);
    // TODO 点击编辑的时候应该展示一个可以编辑的输入框
  }
  const onInputChange = (event: any) => {
    console.log('onInputChange', event?.target?.value)
    setText(event?.target?.value);
  }

  const onConfirmEdit = () => {
    handleListChange({ type: 'update', todo: { id: todo.id, text } })
    hideInput()
  }

  const hideInput = () => {
    setText('')
    console.log('hideInput', text);
    setShowInput(false)
  }

  return (
    <List.Item className="todo-item">
      { todo.text }
      <span className="todo-item-options">
        <Button type="dashed" onClick={() => handleListChange({type: 'delete', todo})}>删除</Button>
        <Button type="primary" onClick={ onClickEdit }>编辑</Button>
      </span>
      <Input  value={ text } onChange={ onInputChange } onPressEnter={ onConfirmEdit } className={ showInput ? 'show-input' : 'hide-input'}></Input>
      <Button onClick={ onConfirmEdit } className={ showInput ? 'show-input' : 'hide-input'}>确认</Button>
      <Button onClick={ hideInput } className={ showInput ? 'show-input' : 'hide-input'}>取消</Button>
    </List.Item>
  );
}

export default TodoItem;
