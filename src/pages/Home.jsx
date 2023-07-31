import { Container } from '@mui/material';
import { ContactForm } from 'components/ContactForm/ContactForm';
import React from 'react';

export function Home() {
  return (
    <Container maxWidth="xl">
      Homepage
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
    </Container>
  );
}
