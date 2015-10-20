import React from 'react';
import { connect } from 'react-redux';
import {deleteContact} from '../actions/contact';
import Contacts from '../components/contacts.jsx';


const ContactsMain = React.createClass({

  propTypes: {
    contacts: React.PropTypes.array.isRequired
  },

  onCustomerDelete: function (id) {
    const {dispatch} = this.props;

    dispatch(deleteContact(id));
  },

  render () {
    const {contacts} = this.props;
    const onCustomerDelete = this.onCustomerDelete;

    return <Contacts contacts={contacts} onDelete={onCustomerDelete}></Contacts>;
  }
});

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}



export default connect(
  mapStateToProps
)(ContactsMain);
