import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

const getContactById = createSelector(
  [(_, contactId) => contactId, getContacts],
  (contactId, contacts) => contacts.find(({ id }) => id === contactId),
);

export default {
  getLoading,
  getContacts,
  getFilter,
  getVisibleContacts,
  getContactById,
};
