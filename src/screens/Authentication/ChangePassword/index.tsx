import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { updatePassword } from "../../../services/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Grid, Typography } from "@mui/material";
import CustomTextField from "../../../components/customInputs/CustomTextField";
import { DevTool } from "@hookform/devtools";
import { getErrorMessage } from "../../../utils";
import { useState } from "react";

export interface IUpdatePasswordFormFields {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const ChangePassword = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const { mutate, isError, isLoading, error } = useMutation({
    mutationFn: updatePassword,
    onSuccess: () => {
      navigate("/auth/login");
    },
  });

  const { handleSubmit, control } = useForm<IUpdatePasswordFormFields>({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const errorMessage = getErrorMessage(error);

  const onSubmit: SubmitHandler<IUpdatePasswordFormFields> = (data) => {
    setErrorMsg("");
    if (data.newPassword !== data.confirmPassword) {
      setErrorMsg("Password does not match");
      return;
    }
    mutate(data);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="main-full"
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h3>Change Password</h3>
        <Grid container gap={1} justifyContent="center" maxWidth={500}>
          <CustomTextField
            control={control}
            name={"oldPassword"}
            type="password"
            testid="change-passwor-old-input"
            placeHolder="Old Password"
            required={true}
          />
          <CustomTextField
            control={control}
            name={"newPassword"}
            type="password"
            testid="change-password-new-input"
            placeHolder="New password"
            required={true}
          />
          <CustomTextField
            control={control}
            name={"confirmPassword"}
            type="password"
            testid="change-password-confirmPassword-input"
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
            data-testid="change-password-submit-button"
          >
            {isLoading ? "Loading " : "Change Passord"}
          </Button>
          {process.env.NODE_ENV === "development" && (
            <DevTool control={control} />
          )}
        </Grid>
      </form>
    </Grid>
  );
};

export default ChangePassword;
