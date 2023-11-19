import { Controller } from "react-hook-form";
import { ICustomTextField } from "../../interfaces/customInputs";
import { TextField } from "@mui/material";

const CustomTextField: React.FC<ICustomTextField> = ({
  name,
  control,
  type = "text",
  testid,
  placeHolder,
  required = false,
  fullWidth = true,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: {
          value: required,
          message: "Please enter a valid value",
        },
      }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          type={type}
          data-testid={testid}
          required={required}
          fullWidth={fullWidth}
          placeholder={placeHolder}
          error={Boolean(error)}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default CustomTextField;
