import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Grid, Typography } from "@mui/material";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";
import { RegisterFormFields } from "../../../interfaces/auth";
import CustomTextField from "../../../components/customInputs/CustomTextField";
import { register } from "../../../services/auth";
import { getErrorMessage } from "../../../utils/helpers";
import { useMutation } from "@tanstack/react-query";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { mutate, isError, isLoading, error } = useMutation({
    mutationFn: register,
  });
  const { handleSubmit, control } = useForm<RegisterFormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const goToLogin = () => navigate("/auth/login");

  const onSubmit: SubmitHandler<RegisterFormFields> = (data) => {
    mutate(data);
  };

  const errorMessage = getErrorMessage(error);

  return (
    <Grid container justifyContent="center" alignItems="center" height="100%">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container gap={1} justifyContent="center" maxWidth={500}>
          <CustomTextField
            control={control}
            name={"email"}
            type="email"
            testid="login-email-input"
            placeHolder="Email"
            required={true}
          />
          <CustomTextField
            control={control}
            name={"password"}
            type="password"
            testid="login-password-input"
            placeHolder="Password"
            required={true}
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
            onClick={goToLogin}
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
