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
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: data.get('email'),
        password: data.get('password'),
      }),
    });

    const result = await response.json();

    if (response.ok) {
      localStorage.setItem('token', result.token);
      localStorage.setItem('role', result.user.role);

      if (result.user.role === 'patient') window.location.href = '/patient';
      else if (result.user.role === 'doctor') window.location.href = '/doctor';
      else if (result.user.role === 'admin') window.location.href = '/admin';
    } else {
      alert(result.error || 'Login failed');
    }
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
