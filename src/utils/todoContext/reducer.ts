import { TodoActionInterface, TodoStateInterface } from "../../interfaces/todoList/reducer";

const todoReducer = (state: TodoStateInterface, action: TodoActionInterface) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default todoReducer;