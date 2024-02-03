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
