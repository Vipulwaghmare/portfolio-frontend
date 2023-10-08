import { Controller } from "react-hook-form";
import { CustomTextFieldProps } from "../../interfaces/customInputs";
import { TextField } from "@mui/material";

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  name,
  control,
  type = "text",
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <TextField {...field} type={type} />}
    />
  );
};

export default CustomTextField;
