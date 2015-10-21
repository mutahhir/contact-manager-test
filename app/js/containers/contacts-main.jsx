import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
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

    return (
      <div>
        <h2 className="page-header">
          <span className="heading">Contacts</span>
          <ul className="actions">
            <Link to="/contacts/new" className="btn btn-sm btn-outline">Add Contact</Link>
          </ul>
        </h2>
        <Contacts contacts={contacts} onDelete={onCustomerDelete}></Contacts>
      </div>
    );
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
