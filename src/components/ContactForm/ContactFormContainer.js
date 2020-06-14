/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactForm from './ContactFormView';
import contactsOperations from '../../redux/contacts/contactsOperations';
import contactsSelectors from '../../redux/contacts/contactsSelectors';

class ContactFormContainer extends Component {
  static propTypes = {
    onAddContact: PropTypes.func,
  };

  state = {
    name: '',
    number: '',
    showNotice: false,
    warning: null,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts, onAddContact } = this.props;
    const findContact = contacts.find(contact => name === contact.name);
    if (findContact) {
      this.setState({
        warning: `${name} is already in contacts`,
        showNotice: true,
      });
      return setTimeout(
        () =>
          this.setState({
            showNotice: false,
          }),
        2000,
      );
    }
    onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <ContactForm
        {...this.props}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        showNotice={this.state.showNotice}
        warning={this.state.warning}
        name={this.state.name}
        number={this.state.number}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getContacts(state),
  };
};

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactFormContainer);
