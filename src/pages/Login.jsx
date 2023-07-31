import { Box, Button, Container } from '@mui/material';
import { Input } from 'components/Input/Input';
import { Formik, Form } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

const initialValues = {
  email: '',
  password: '',
};

export function Login() {
  const dispatch = useDispatch();

  const handleSubmit = (user, { resetForm }) => {
    dispatch(login(user));
    resetForm();
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ mt: 3 }}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              width: 300,
            }}
          >
            <Input
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              size="small"
              required
            />
            <Input
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              size="small"
              required
            />
            <Button
              variant="contained"
              sx={{ my: 0, color: 'white', display: 'block' }}
              type="submit"
            >
              Login
            </Button>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
}
