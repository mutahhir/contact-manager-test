import React from 'react';
import {Link} from 'react-router';

import Contact from './contact.jsx';

export default React.createClass({

  propTypes: {
    contacts: React.PropTypes.array.isRequired
  },

  renderContacts: function (contacts) {

    return contacts.map( contact =>
      <Contact key={`contact-${contact.id}`}
        contact={contact}
        onDelete={this.props.onDelete}></Contact>
    );
  },

  render: function () {
    const { contacts } = this.props;
    return (
        <ul className="media-list row contacts-container">
          {this.renderContacts(contacts)}
        </ul>
    );
  }
});
