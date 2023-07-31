import React, { useEffect } from 'react';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Container, Typography } from '@mui/material';

export function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Container maxWidth="xl">
      <Typography variant="h2" ml={4} mt={2} sx={{ fontWeight: 500 }}>
        Your contacts
      </Typography>
      <Filter />
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {contacts.length > 0 && <ContactList />}
    </Container>
  );
}
