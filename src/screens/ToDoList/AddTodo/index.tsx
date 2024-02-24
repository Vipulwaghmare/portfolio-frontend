import { SubmitHandler, useForm } from "react-hook-form";
import CustomTextField from "../../../components/customInputs/CustomTextField";
import { TodoInterface } from "../../../interfaces/todoList/reducer";
import { DevTool } from "@hookform/devtools";
// import CustomDatepicker from "../../../components/customInputs/CustomDatepicker";
import LoadingButton from "../../../components/LoadingButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo, updateTodo } from "../../../services/todo";

const AddTodo = () => {
  const { handleSubmit, control, reset } = useForm<TodoInterface>({
    defaultValues: {
      completed: false,
      createdAt: new Date(),
      description: "",
      title: "",
      // date: new Date(),
    },
  });
  // const queryClient = useQueryClient();

  const mutationAddTodo = useMutation(addTodo, {
    onSuccess: () => {
      reset();
      // queryClient.invalidateQueries('todos');
    },
  });
  // const mutationUpdateTodo = useMutation(updateTodo, {
  //   onSuccess: () => {
  //     // queryClient.invalidateQueries('todos');
  //   },
  // });
  const onSubmit: SubmitHandler<TodoInterface> = (data) => {
    mutationAddTodo.mutate(data);
  };

  // const mutationDeleteTodo = useMutation(deleteTodo, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('todos');
  //   },
  // });

  // const mutationDeleteAllTodos = useMutation(deleteAllTodos, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('todos');
  //   },
  // });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="todo-add-form"
    >
      <CustomTextField
        control={control}
        name="title"
        placeHolder="Title"
        required={true}
      />
      <CustomTextField
        control={control}
        name="description"
        placeHolder="Description"
        required={true}
      />
      {/* <CustomDatepicker control={control} name="date" required={true} /> */}
      <LoadingButton buttonText="Add Todo" loading={false} />
      <DevTool control={control} />
    </form>
  );
};

export default AddTodo;
