import { createContext, useReducer } from "react";
import todoReducer from "./reducer";
import {
  TodoContextInterface,
  TodoStateInterface,
} from "../../interfaces/todoList/reducer";
import { IWrapper } from "../../interfaces/common";

const initialState: TodoStateInterface = {
  todos: [],
};

export const TodoContext = createContext<TodoContextInterface | null>(null);

const TodoContextProvider = ({ children }: IWrapper) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
