import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import { ICustomDatepicker } from "../../interfaces/customInputs";

const CustomDatepicker = ({
  name,
  control,
  label,
  rules,
}: ICustomDatepicker) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
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
