import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>{user}</p>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}
