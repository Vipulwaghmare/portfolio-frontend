import { Outlet } from "react-router-dom";
import TodoContextProvider from "../../utils/todoContext";

const ToDoBAse: React.FC = () => {
  return (
    <TodoContextProvider>
      <header>To Do List</header>
      <Outlet />
    </TodoContextProvider>
  );
};

export default ToDoBAse;
