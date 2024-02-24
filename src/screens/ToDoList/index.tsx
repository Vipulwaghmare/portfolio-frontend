import { Outlet } from "react-router-dom";
import TodoContextProvider from "../../utils/todoContext";

const ToDoBase = () => {
  return (
    <TodoContextProvider>
      <header className="todo-header">To Do List</header>
      <Outlet />
    </TodoContextProvider>
  );
};

export default ToDoBase;
