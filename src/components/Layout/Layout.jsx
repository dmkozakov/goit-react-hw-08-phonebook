import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import { Auth } from 'components/Auth/Auth';
import * as S from 'components/Layout/Layout.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

export function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    !isRefreshing && (
      <>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <S.Link to="/">
                {' '}
                <Typography
                  variant="h6"
                  component="span"
                  noWrap
                  sx={{
                    fontSize: '10',
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.06rem',
                    color: 'inherit',
                  }}
                >
                  PhoneBook
                </Typography>
              </S.Link>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  <S.Link to="/">Home</S.Link>
                </Button>
                {isLoggedIn && (
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    <S.Link to="/contacts">Contacts</S.Link>
                  </Button>
                )}
              </Box>

              {isLoggedIn ? <UserMenu /> : <Auth />}
            </Toolbar>
          </Container>
        </AppBar>
        <Outlet />
      </>
    )
  );
}
