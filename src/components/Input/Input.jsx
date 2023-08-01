import { TextField } from '@mui/material';
import { useField } from 'formik';
import React from 'react';

export function Input({ ...otherProps }) {
  const [field] = useField(otherProps);

  return <TextField {...field} {...otherProps} />;
}
