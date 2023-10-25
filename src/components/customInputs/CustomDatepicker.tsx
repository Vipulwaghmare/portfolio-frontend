import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import { CustomDatepickerProps } from "../../interfaces/customInputs";

const CustomDatepicker: React.FC<CustomDatepickerProps> = ({
  name,
  control,
  label,
  required = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: {
          value: required,
          message: "Please select a date",
        },
      }}
      render={({ field, fieldState: { error } }) => (
        <DatePicker
          {...field}
          label={label}
          // data-testid={testid}
          // isRequired={required}
          // fullWidth={fullWidth}
          // error={Boolean(error)}
          // helperText={error?.message}
          slotProps={{
            textField: {
              error: Boolean(error),
              helperText: error?.message,
            },
          }}
        />
      )}
    />
  );
};
export default CustomDatepicker;