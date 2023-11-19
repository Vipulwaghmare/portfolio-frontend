import { Outlet } from "react-router-dom";
import TodoContextProvider from "../../utils/todoContext";

// import { getAuth } from "firebase/auth";
// getAuth().currentUser
const ToDoBase = () => {
  return (
    <TodoContextProvider>
      <header>To Do List</header>
      <Outlet />
    </TodoContextProvider>
  );
};

export default ToDoBase;
