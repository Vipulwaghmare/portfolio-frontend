import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { deleteAllTodos, deleteTodo, fetchTodos } from "../../../services/todo";
import { useMutation, useQuery } from "@tanstack/react-query";
import { TodoInterface } from "../../../interfaces/todoList/reducer";
import queryClient from "../../../utils/queryClient";

const TodoDashboard = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery<TodoInterface[]>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const mutationDeleteTodo = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const mutationDeleteAllTodos = useMutation(deleteAllTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  return (
    <Grid>
      <Button onClick={() => navigate("/todo/add")}>Add Todo</Button>
      <Button onClick={() => mutationDeleteAllTodos.mutate()}>
        Delete All
      </Button>
      <main>
        <h3>List of Todos</h3>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error fetching data</p>}
        {data && (
          <ul>
            {data.map((todo) => (
              <li key={todo.id}>
                {todo.title} {todo.description} {todo.completed}
                <button
                  onClick={() =>
                    navigate(`/todo/edit/${todo.id}`, {
                      state: todo,
                    })
                  }
                >
                  Edit
                </button>
                <button onClick={() => mutationDeleteTodo.mutate(todo.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>
    </Grid>
  );
};

export default TodoDashboard;
