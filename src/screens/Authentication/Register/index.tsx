import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";
import { RegisterFormFields } from "../../../interfaces/auth";
import CustomTextField from "../../../components/customInputs/CustomTextField";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<RegisterFormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterFormFields> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomTextField control={control} name={"email"} type="email" />
      <CustomTextField control={control} name={"password"} type="password" />
      <Button type="submit" variant="contained">
        Register
      </Button>
      <Button
        variant="text"
        type="button"
        onClick={() => navigate("/auth/login")}
      >
        Already a member? Login
      </Button>
      <DevTool control={control} />
    </form>
  );
};

export default Register;
