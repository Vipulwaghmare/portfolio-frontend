import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import { LoginFormFields } from "../../../interfaces/auth";
import { DevTool } from "@hookform/devtools";
import CustomTextField from "../../../components/customInputs/CustomTextField";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../services/auth";
import { getErrorMessage } from "../../../utils/helpers";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { mutate, isError, isLoading, error } = useMutation({
    mutationFn: login,
    // onSuccess: data => {
    //   queryClient.setQueryData(["posts", data.id], data)
    //   queryClient.invalidateQueries(["posts"], { exact: true })
    //   setCurrentPage(<Post id={data.id} />)
    // },
  });

  const { handleSubmit, control } = useForm<LoginFormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // console.log({ isError, isLoading, data });

  const onSubmit: SubmitHandler<LoginFormFields> = (data) => {
    mutate(data);
  };

  const errorMessage = getErrorMessage(error);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomTextField control={control} name={"email"} type="email" />
      <CustomTextField control={control} name={"password"} type="password" />
      {isError && errorMessage}
      <Button type="submit" variant="contained">
        {isLoading ? "Loading " : "Login"}
      </Button>
      <Button
        variant="text"
        type="button"
        onClick={() => navigate("/auth/register")}
      >
        Not a member? Register
      </Button>
      <DevTool control={control} />
    </form>
  );
};

export default Login;
