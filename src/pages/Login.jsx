import { Field, Formik, Form } from 'formik';
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
    <>
      Login
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <p>Email</p>
            <Field type="email" name="email" required />
          </label>
          <label>
            <p>Password</p>
            <Field type="password" name="password" required />
          </label>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </>
  );
}
