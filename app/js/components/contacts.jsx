import React from 'react';
import {Link} from 'react-router';

export default React.createClass({

  propTypes: {
    contacts: React.PropTypes.array.isRequired
  },

  render: function () {
    return (
      <div>
        <h2 className="page-header text-center">List of contacts</h2>
        <p className="text-center">
          <Link to="/contacts/new" className="btn btn-lg btn-outline">Add Contact</Link>
        </p>
        <ul className="media-list row contacts-container"></ul>
      </div>
    );
  }
});
