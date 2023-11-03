import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../../../services/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { ResetPasswordFormFields } from "../../../interfaces/auth";
import { Button, Grid, Typography } from "@mui/material";
import CustomTextField from "../../../components/customInputs/CustomTextField";
import { DevTool } from "@hookform/devtools";
import { getErrorMessage } from "../../../utils";
import { useState } from "react";

const ResetPassword: React.FC = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const { token } = useParams();
  const { mutate, isError, isLoading, error } = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      // TODO: Add a modal showing password is changed successfully
      navigate("/auth/login");
    },
  });

  const { handleSubmit, control } = useForm<ResetPasswordFormFields>({
    defaultValues: {
      password: "",
      confirmPassword: "",
      token,
    },
  });

  const errorMessage = getErrorMessage(error);

  const onSubmit: SubmitHandler<ResetPasswordFormFields> = (data) => {
    setErrorMsg("");
    if (data.password !== data.confirmPassword) {
      setErrorMsg("Password does not match");
      return;
    }
    mutate({
      password: data.password,
      token: data.token,
    });
  };

  return (
    <Grid container justifyContent="center" alignItems="center" height="100%">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container gap={1} justifyContent="center" maxWidth={500}>
          <CustomTextField
            control={control}
            name={"password"}
            type="password"
            testid="reset-password-password-input"
            placeHolder="Password"
            required={true}
          />
          <CustomTextField
            control={control}
            name={"confirmPassword"}
            type="password"
            testid="reset-password-confirmPassword-input"
            placeHolder="Confirm password"
            required={true}
          />
          <Typography align="center" color="red">
            {errorMsg} {isError && errorMessage}
          </Typography>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            data-testid="reset-password-submit-button"
          >
            {isLoading ? "Loading " : "Reset Passord"}
          </Button>
          <DevTool control={control} />
        </Grid>
      </form>
    </Grid>
  );
};

export default ResetPassword;
