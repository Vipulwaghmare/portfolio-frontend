import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Typography, Grid } from "@mui/material";
import { DevTool } from "@hookform/devtools";
import CustomTextField from "../../../components/customInputs/CustomTextField";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../services/auth";
import { getErrorMessage, setTokensToLocalStorage } from "../../../utils";

export interface ILoginFormFields {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { mutate, isError, isLoading, error } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setTokensToLocalStorage(data);
      navigate("/auth/dashboard");
    },
  });

  const { handleSubmit, control } = useForm<ILoginFormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<ILoginFormFields> = (data) => mutate(data);

  const errorMessage = getErrorMessage(error);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="main-full"
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container gap={1} justifyContent="center" maxWidth={500}>
          <CustomTextField
            control={control}
            name={"email"}
            type="email"
            testid="login-email-input"
            placeHolder="Email"
            required={true}
            rules={{
              required: {
                value: true,
                message: "Please enter the Email",
              },
            }}
          />
          <CustomTextField
            control={control}
            name={"password"}
            type="password"
            testid="login-password-input"
            placeHolder="Password"
            required={true}
            rules={{
              required: {
                value: true,
                message: "Please enter the Password",
              },
            }}
          />
          <Typography align="center" color="red">
            {isError && errorMessage}
          </Typography>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            data-testid="login-submit-button"
          >
            {isLoading ? "Loading " : "Login"}
          </Button>
          <Button
            variant="text"
            type="button"
            onClick={() => navigate("/auth/register")}
            data-testid="login-register-button"
            color="info"
          >
            Not a member? Register
          </Button>
          <Button
            variant="text"
            type="button"
            onClick={() => navigate("/auth/forgot-password")}
            data-testid="login-forgot-password-button"
            color="error"
          >
            Forgot Password?
          </Button>
          {process.env.NODE_ENV === "development" && (
            <DevTool control={control} />
          )}
        </Grid>
      </form>
    </Grid>
  );
};

export default Login;
