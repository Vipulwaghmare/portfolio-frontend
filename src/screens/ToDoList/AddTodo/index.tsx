import { SubmitHandler, useForm } from "react-hook-form";
import CustomTextField from "../../../components/customInputs/CustomTextField";
import { TodoInterface } from "../../../interfaces/todoList/reducer";
import { Button } from "@mui/material";
import { DevTool } from "@hookform/devtools";
import CustomDatepicker from "../../../components/customInputs/CustomDatepicker";

const AddTodo = () => {
  const { handleSubmit, control } = useForm<TodoInterface>({
    defaultValues: {
      completed: false,
      createdAt: new Date(),
      description: "",
      title: "",
    },
  });

  const onSubmit: SubmitHandler<TodoInterface> = (data) => {
    console.log({ data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
      <CustomDatepicker control={control} name="date" required={true} />
      <Button type="submit" variant="contained" fullWidth>
        Add Todo
      </Button>
      <DevTool control={control} />
    </form>
  );
};

export default AddTodo;
