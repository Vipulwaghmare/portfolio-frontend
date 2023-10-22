import { TodoActionInterface, TodoStateInterface } from "../../interfaces/todoList/reducer";

const todoReducer = (state: TodoStateInterface, action: TodoActionInterface) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + (action.payload || 1) };
    case 'decrement':
      return { ...state, count: state.count - (action.payload || 1) };
    default:
      return state;
  }
}

export default todoReducer;