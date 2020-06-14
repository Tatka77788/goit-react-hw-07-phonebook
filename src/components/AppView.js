/* eslint-disable react/prop-types */
import React from 'react';
import Layout from './Layout/Layout';
import Spinner from './Loader/Loader';
import AppHeader from './AppHeader/AppHeader';
import ContactForm from './ContactForm/ContactFormContainer';
import Filter from './Filter/FilterContainer';
import ContactList from './ContactList/ContactListContainer';

export default function App({ contacts, isloadingContact }) {
  return (
    <Layout>
      {isloadingContact && <Spinner />}
      <AppHeader />
      <ContactForm />
      {contacts.length > 0 && <Filter />}
      <ContactList />
    </Layout>
  );
}
