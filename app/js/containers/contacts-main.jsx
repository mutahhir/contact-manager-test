import React from 'react';
import { connect } from 'react-redux';

import Contacts from '../components/contacts.jsx';

const ContactsMain = React.createClass({

  propTypes: {
    contacts: React.PropTypes.array.isRequired
  },

  render () {
    const {contacts} = this.props;
    return <Contacts contacts={contacts}></Contacts>;
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
