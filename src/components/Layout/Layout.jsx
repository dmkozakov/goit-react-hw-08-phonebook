import { Container } from 'App/Container.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

export function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    !isRefreshing && (
      <Container>
        <header>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>

          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <>
              <NavLink to="/signup">Sign up</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          )}
        </header>
        <Outlet />
      </Container>
    )
  );
}
