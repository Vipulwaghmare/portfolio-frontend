import { useContext } from "react";
import { TodoContext } from ".";

const useTodoContext = () => {
  const todoData = useContext(TodoContext);
  if (todoData === null) {
    throw new Error("Context should be used inside the provider.");
  }
  return todoData;
};

export default useTodoContext;
