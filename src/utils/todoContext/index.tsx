import { createContext, useReducer, FC } from "react";
import todoReducer from "./reducer";
import {
  TodoContextInterface,
  TodoContextProps,
  TodoStateInterface,
} from "../../interfaces/todoList/reducer";

const initialState: TodoStateInterface = {
  todos: [],
};

export const TodoContext = createContext<TodoContextInterface | null>(null);

const TodoContextProvider: FC<TodoContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
