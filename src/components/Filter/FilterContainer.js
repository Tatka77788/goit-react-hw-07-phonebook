/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable consistent-return */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filter from './FilterView';
import contactsActions from '../../redux/contacts/contactsActions';
import contactsSelectors from '../../redux/contacts/contactsSelectors';

class FilterContainer extends Component {
  state = {
    appear: false,
  };

  componentDidMount() {
    const { contacts } = this.props;
    if (contacts.length <= 1) {
      return;
    }
    this.setState({
      appear: true,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.contacts.length !== this.props.contacts.length) {
      const { contacts } = this.props;
      if (contacts.length > 1) {
        return this.toAppear();
      }
      if (contacts.length <= 1) {
        return this.toUnAppear();
      }
    }
  }

  toAppear = () => {
    this.setState({
      appear: true,
    });
  };

  toUnAppear = () => {
    this.setState({
      appear: false,
    });
  };

  render() {
    const { appear } = this.state;
    return <Filter {...this.props} appear={appear} />;
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
