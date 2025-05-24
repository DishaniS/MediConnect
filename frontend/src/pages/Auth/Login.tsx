import React from 'react';
import {
  Avatar,
  Box,
  Typography,
  Container,
  Paper
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextInput from '../../components/ui/TextInput';
import SubmitButton from '../../components/ui/SubmitButton';

const Login = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextInput label="Email Address" name="email" autoFocus />
            <TextInput label="Password" name="password" type="password" />
            <SubmitButton label="Sign In" />
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
