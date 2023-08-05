import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = useState(null);

  console.log(user);
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <Box
      sx={{
        flexGrow: 0,
        display: 'flex',
        alignItems: 'center',
      }}
    >
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
        Hello, {user}
      </Typography>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={user}></Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center" onClick={handleClick}>
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
