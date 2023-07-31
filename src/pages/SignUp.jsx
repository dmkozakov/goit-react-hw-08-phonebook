import { Box, Button, Container } from '@mui/material';
import { Input } from 'components/Input/Input';
import { Formik, Form } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export function SignUp() {
  const dispatch = useDispatch();

  const handleSubmit = (user, { resetForm }) => {
    dispatch(register(user));
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
              label="Name"
              variant="outlined"
              type="name"
              name="name"
              size="small"
              required
            />
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
              type="submit"
              variant="contained"
              sx={{ my: 0, color: 'white', display: 'block' }}
            >
              Sign up
            </Button>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
}
