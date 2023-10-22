import { Control } from 'react-hook-form';

// export interface CustomTextFieldProps<TFieldValues extends FieldValues = FieldValues> {
export interface CustomTextFieldProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any, any>;
  type?: string;
  placeHolder?: string;
  testid?: string;
  required?: boolean;
  fullWidth?: boolean;
}

export interface CustomDatepickerProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any, any>;
  label?: string;
  required?: boolean;
}