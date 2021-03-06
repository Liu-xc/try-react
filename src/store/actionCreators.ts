import * as actionTypes from './todoActionTypes';
import { TDAction } from '@/interface/index';

export function addTodo(text: string): TDAction {
  return {
    type: actionTypes.ADD_TODO,
    text,
  };
}

export function deleteTodo(id: string): TDAction {
  return {
    type: actionTypes.DELETE_TODO,
    id,
  };
}

export function editTodo(id: string, text: string): TDAction {
  return {
    type: actionTypes.EDIT_TODO,
    id,
    text,
  };
}