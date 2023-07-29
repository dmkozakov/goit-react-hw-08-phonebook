import { Field, Formik, Form } from 'formik';
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
    console.log(user);
    dispatch(register(user));
    resetForm();
  };

  return (
    <>
      Register Page
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <p>Name</p>
            <Field type="text" name="name" required />
          </label>
          <label>
            <p>Email</p>
            <Field type="email" name="email" required />
          </label>
          <label>
            <p>Password</p>
            <Field type="password" name="password" required />
          </label>
          <button type="submit">Sign up</button>
        </Form>
      </Formik>
    </>
  );
}
