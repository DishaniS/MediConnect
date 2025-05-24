import React from 'react';
import { TextField } from '@mui/material';

type Props = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoFocus?: boolean;
  fullWidth?: boolean;
};

const TextInput: React.FC<Props> = ({
  label,
  name,
  type = 'text',
  required = true,
  autoFocus = false,
  fullWidth = true
}) => {
  return (
    <TextField
      margin="normal"
      required={required}
      fullWidth={fullWidth}
      id={name}
      label={label}
      name={name}
      type={type}
      autoComplete={name}
      autoFocus={autoFocus}
    />
  );
};

export default TextInput;
