import React from 'react';
import {Link} from 'react-router';

import Contact from './contact.jsx';

export default React.createClass({

  propTypes: {
    contacts: React.PropTypes.array.isRequired
  },

  renderContacts: function (contacts) {

    return contacts.map( contact =>
      <Contact key={`contact-${contact.id}`} contact={contact}></Contact>
    );
  },

  render: function () {
    const { contacts } = this.props;
    return (
      <div>
        <h2 className="page-header text-center">List of contacts</h2>
        <p className="text-center">
          <Link to="/contacts/new" className="btn btn-lg btn-outline">Add Contact</Link>
        </p>
        <ul className="media-list row contacts-container">
          {this.renderContacts(contacts)}
        </ul>
      </div>
    );
  }
});
