import { useForm, SubmitHandler } from "react-hook-form";
import { Grid, Typography, Button } from "@mui/material";
import { LoginFormFields } from "../../../interfaces/auth";
import CustomTextField from "../../../components/customInputs/CustomTextField";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../../../services/auth";
import { getErrorMessage } from "../../../utils/helpers";

const ForgotPassword = () => {
  const { mutate, isError, isLoading, error } = useMutation({
    mutationFn: forgotPassword,
    // TODO: Show on success model to show that the email is sent successfully
  });

  const { handleSubmit, control } = useForm<LoginFormFields>({
    defaultValues: {
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormFields> = (data) => mutate(data);

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
          <Typography align="center" color="red">
            {isError && errorMessage}
          </Typography>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            data-testid="forgot-password-submit-button"
          >
            {isLoading ? "Loading " : "Get Forgot Password Email"}
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default ForgotPassword;
