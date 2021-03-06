import * as todoActionTypes from './todoActionTypes';
import { v4 as uuidv4 } from 'uuid';
import { TDAction, TDList } from '@/interface/index';
import { combineReducers } from 'redux';

export function reducer(state: TDList = [], action: TDAction): TDList {
  switch (action.type) {
    case todoActionTypes.ADD_TODO:
      return [...state, { id: uuidv4(), text: action.text as string }];
    case todoActionTypes.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id as string);
    case todoActionTypes.EDIT_TODO:
      const list = [...state];
      const target = list.find(todo => todo.id === action.id);
      target && (target.text = action.text as string);
      return list;
    default:
      return [...state];
  }
}

export default combineReducers({
  todoList: reducer,
})