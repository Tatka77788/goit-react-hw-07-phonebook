import { connect } from 'react-redux';
import ListItem from './ListItemView';
import contactsOperations from '../../redux/contacts/contactsOperations';
import contactsSelectors from '../../redux/contacts/contactsSelectors';

const mapStateToProps = (state, ownProps) => {
  const contact = contactsSelectors.getContactById(state, ownProps.id);
  return {
    ...contact,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDeleteContact: () =>
      dispatch(contactsOperations.deleteContact(ownProps.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
