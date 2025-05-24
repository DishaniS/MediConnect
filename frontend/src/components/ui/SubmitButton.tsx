import React from 'react';
import { Button } from '@mui/material';

type Props = {
  label: string;
};

const SubmitButton: React.FC<Props> = ({ label }) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      {label}
    </Button>
  );
};

export default SubmitButton;
