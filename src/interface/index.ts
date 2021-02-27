import * as React from 'react';

export interface ComponentProps {
  children?: React.ReactNode,
}

export interface TDItem {
  id: number,
  text: string,
}
export interface TDItemProps extends ComponentProps {
  todo: TDItem,
}

export type TDList = TDItem[]
export interface TDListProps extends ComponentProps {
  todoList: TDList,
} 