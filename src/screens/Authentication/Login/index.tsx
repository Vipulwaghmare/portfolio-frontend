import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Typography, Grid } from "@mui/material";
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
    <Grid container justifyContent="center" alignItems="center" height="100%">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container gap={1} justifyContent="center">
          <CustomTextField
            control={control}
            name={"email"}
            type="email"
            testId="login-email-input"
            placeHolder="Email"
            required={true}
          />
          <CustomTextField
            control={control}
            name={"password"}
            type="password"
            testId="login-password-input"
            placeHolder="Password"
            required={true}
          />
          <Typography align="center" color="red">
            {isError && errorMessage}
          </Typography>
          <Button type="submit" variant="contained" fullWidth>
            {isLoading ? "Loading " : "Login"}
          </Button>
          <Button
            variant="text"
            type="button"
            onClick={() => navigate("/auth/register")}
            data-testid="login-submit"
          >
            Not a member? Register
          </Button>
          <DevTool control={control} />
        </Grid>
      </form>
    </Grid>
  );
};

export default Login;
