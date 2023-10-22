import { useContext } from "react";
import { TodoContext } from ".";

const useTodoContext = () => useContext(TodoContext);

export default useTodoContext;
