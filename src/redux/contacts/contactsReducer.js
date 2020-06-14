import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contactsActions';

const addLocalContacts = (_, { payload }) => payload;
const addContact = (state, { payload }) => [...state, payload];
const deleteContact = (state, { payload }) =>
  state.filter(({ id }) => id !== payload);

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: addLocalContacts,
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.deleteContactSuccess]: deleteContact,
});

const loading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [contactsActions.fetchExistContactsError]: (_, { payload }) =>
    payload.message,
  [contactsActions.addContactError]: (_, { payload }) => payload.message,
  [contactsActions.removeContactError]: (_, { payload }) => payload.message,
  [contactsActions.fetchExistContactsRequest]: () => null,
  [contactsActions.addContactRequest]: () => null,
  [contactsActions.removeContactRequest]: () => null,
});

export default combineReducers({
  items,
  loading,
  filter,
  error,
});
