import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Grid, Typography } from "@mui/material";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";
import CustomTextField from "../../../components/customInputs/CustomTextField";
import { register } from "../../../services/auth";
import { getErrorMessage } from "../../../utils/helpers";
import { useMutation } from "@tanstack/react-query";

export interface IRegisterFormFields {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => navigate("/auth/login");

  const { mutate, isError, isLoading, error } = useMutation({
    mutationFn: register,
    // TODO: Add a modal to show that user is registred successfully
    onSuccess: () => navigateToLogin(),
  });

  const { handleSubmit, control, getValues } = useForm<IRegisterFormFields>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<IRegisterFormFields> = (data) => {
    mutate(data);
  };

  const errorMessage = getErrorMessage(error);

  return (
    <Grid container justifyContent="center" alignItems="center" height="100%">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container gap={1} justifyContent="center" maxWidth={500}>
          <CustomTextField
            control={control}
            name={"name"}
            testid="login-name-input"
            placeHolder="Name"
            required={true}
            rules={{
              required: {
                value: true,
                message: "Please enter the Name",
              },
            }}
          />
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
              minLength: {
                value: 10,
                message: "Password must be at least 10 characters",
              },
            }}
          />
          <CustomTextField
            control={control}
            name={"confirmPassword"}
            type="password"
            testid="login-confirmPassword-input"
            placeHolder="Confirm Password"
            required={true}
            rules={{
              required: {
                value: true,
                message: "Please enter the Password Again",
              },
              validate: (value) =>
                value === getValues("password") || "Passwords must match",
            }}
          />
          <Typography align="center" color="red">
            {isError && errorMessage}
          </Typography>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            data-testid="register-submit-button"
          >
            {isLoading ? "Loading " : "Register"}
          </Button>
          <Button
            variant="text"
            type="button"
            data-testid="register-login-button"
            onClick={navigateToLogin}
          >
            Already a member? Login
          </Button>
          <DevTool control={control} />
        </Grid>
      </form>
    </Grid>
  );
};

export default Register;
