import { ReactNode, Dispatch } from "react";

export interface TodoInterface {
  id: string;
  title: string;
  description?: string;
  createdAt: Date;
  completed: boolean;
}

export interface TodoStateInterface {
  todos: TodoInterface[];
}

export interface TodoActionInterface {
  type: 'increment' | 'decrement';
  payload?: number;
}

export interface TodoContextInterface {
  state: TodoStateInterface;
  dispatch: Dispatch<TodoActionInterface>;
}

export interface TodoContextProps {
  children: ReactNode;
}