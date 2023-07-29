import React, { useEffect } from 'react';
import { Filter } from '../components/Filter/Filter';
import * as S from 'components/ContactList/ContactList.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

export function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <S.ContactListSection>
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {contacts.length > 0 && <ContactList />}
    </S.ContactListSection>
  );
}
