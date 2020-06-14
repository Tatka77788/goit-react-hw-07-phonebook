/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from './AppView';
import contactsOperations from '../redux/contacts/contactsOperations';
import contactsSelectors from '../redux/contacts/contactsSelectors';

class AppContainer extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getContacts(state),
    isloadingContact: contactsSelectors.getLoading(state),
  };
};

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
