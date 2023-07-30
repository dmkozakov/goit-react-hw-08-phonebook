import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactFormSection } from 'components/ContactForm/ContactForm.styled';
import React from 'react';

export function Home() {
  return (
    <div>
      Homepage
      <ContactFormSection>
        <h1>Phonebook</h1>
        <ContactForm />
      </ContactFormSection>
    </div>
  );
}
