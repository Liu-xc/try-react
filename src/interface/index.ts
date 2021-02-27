import * as React from 'react';

export interface ComponentProps {
  children?: React.ReactNode,
}

export interface TDItem extends ComponentProps {
  todo: {
    id: number,
    text: string,
  }
}

export interface TDProps extends ComponentProps {
  todoList: TDItem[],
} 