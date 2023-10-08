import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import { LoginFormFields } from "../../../interfaces/auth";
import { DevTool } from "@hookform/devtools";
import CustomTextField from "../../../components/customInputs/CustomTextField";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<LoginFormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormFields> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomTextField control={control} name={"email"} type="email" />
      <CustomTextField control={control} name={"password"} type="password" />
      <Button type="submit" variant="contained">
        Login
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
