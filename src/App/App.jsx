import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Contacts } from 'pages/Contacts';
import { SignUp } from 'pages/SignUp';
import { Login } from 'pages/Login';
import { NotFound } from 'pages/NotFound';
import { Layout } from 'components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refresh } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<Contacts />} redirectTo="/login" />
          }
        />
        <Route
          path="/signup"
          element={
            <RestrictedRoute component={<SignUp />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<Login />} redirectTo="/contacts" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
