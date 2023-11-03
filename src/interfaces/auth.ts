export interface LoginFormFields {
  email: string;
  password: string;
}

export interface RegisterFormFields {
  name: string;
  email: string;
  password: string;
}

export interface ResetPasswordFormFields {
  password: string;
  confirmPassword: string;
  token: string;
}