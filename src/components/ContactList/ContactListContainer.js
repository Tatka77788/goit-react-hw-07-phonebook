import { connect } from 'react-redux';
import ContactList from './ContactListView';
import contactsActions from '../../redux/contacts/contactsActions';
import contactsSelectors from '../../redux/contacts/contactsSelectors';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = {
  onDeleteContact: contactsActions.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
