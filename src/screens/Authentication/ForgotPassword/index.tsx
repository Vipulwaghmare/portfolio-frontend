import { useForm, SubmitHandler } from "react-hook-form";
import { Grid, Typography, Button } from "@mui/material";
import CustomTextField from "../../../components/customInputs/CustomTextField";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../../../services/auth";
import { getErrorMessage } from "../../../utils/helpers";

export interface IForgotPasswordFields {
  email: string;
}

const ForgotPassword = () => {
  const { mutate, isError, isLoading, error } = useMutation({
    mutationFn: forgotPassword,
    // TODO: Show on success model to show that the email is sent successfully
  });

  const { handleSubmit, control } = useForm<IForgotPasswordFields>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<IForgotPasswordFields> = (data) => mutate(data);

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
            rules={{
              required: "Please enter the Email",
            }}
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
