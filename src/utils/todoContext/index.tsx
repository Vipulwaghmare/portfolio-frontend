import { createContext, useReducer, FC } from "react";

const initialState = {};

const TodoContext = createContext(initialState);

const TodoContextProvider: FC = ({ children }) => {
  // const [theme, setTheme] = useState("dark")

  return (
    <TodoContext.Provider value={{ theme, setTheme }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
