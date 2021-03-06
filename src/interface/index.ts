import * as React from 'react';

export interface ComponentProps {
  children?: React.ReactNode,
}

export interface TDItem {
  id: string,
  text: string,
}
export interface TDItemProps extends ComponentProps {
  todo: TDItem,
  handleListChange: Function,
  [propName: string]: any,
}

export type TDList = TDItem[]
export interface TDListProps extends ComponentProps {
  todoList: TDList,
  handleListChange: Function,
  [propName: string]: any,
}

export interface StoreTDListProps extends ComponentProps {
  todoList: TDList,
  [propName: string]: any,
}

export interface TDAction {
  type: string,
  text?: string,
  id?: string,
  [props: string]: any,
}