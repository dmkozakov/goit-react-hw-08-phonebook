import { TextField } from '@mui/material';
import { FieldHookConfig, useField } from 'formik';

interface MyInputProps {
  size: string | number;
  variant?: string;
  type?: string;
  name?: string;
  title?: string;
  required?: boolean;
  pattern?: string;
  id?: string;
  label: string;
  sx?: any;
}

export const Input = ({ ...otherProps }: MyInputProps extends FieldHookConfig<any>) => {
  const [field] = useField(otherProps);

  return <TextField {...field} {...otherProps} />;
};
