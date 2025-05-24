import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import TextInput from '../../components/ui/TextInput';
import SubmitButton from '../../components/ui/SubmitButton';

import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    });

        // Simulate success
    setTimeout(() => {
      navigate('/login');
    }, 500); // redirect after 0.5s
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
            <Box display="flex" gap={2}>
              <Box flex={1}>
                <TextInput label="First Name" name="firstName" />
              </Box>
              <Box flex={1}>
                <TextInput label="Last Name" name="lastName" />
              </Box>
            </Box>
            <TextInput label="Email Address" name="email" type="email" />
            <TextInput label="Password" name="password" type="password" />
            <SubmitButton label="Register" />
            <Box mt={2} textAlign="right">
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;
