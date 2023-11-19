import { Control } from 'react-hook-form';

interface IdefaultCustomInput {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any, any>;
}

// export interface CustomTextFieldProps<TFieldValues extends FieldValues = FieldValues> {
export interface ICustomTextField extends IdefaultCustomInput {
  type?: string;
  placeHolder?: string;
  testid?: string;
  required?: boolean;
  fullWidth?: boolean;
}

export interface ICustomDatepicker extends IdefaultCustomInput {
  label?: string;
  required?: boolean;
}