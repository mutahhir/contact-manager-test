import React from 'react';
import {Link} from 'react-router';

export default React.createClass({

  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function () {
    const {id, name, avatar, tel, email} = this.props.contact.attributes;
    return (
      <li className="media col-md-6 col-lg-4">
        <div className="thumbnail">
          <img className="media-object" src={`app/img/faces/${avatar}`} />
        </div>
        <div className="media-heading">
          <h3>
            {name}
            <small>
              <Link to={`/contacts/edit/${id}`}>
                <span className="glyphicon glyphicon-pencil"></span>
              </Link>
              <Link to={`/contacts/delete/${id}`} className="delete-contract">
                <span className="glyphicon glyphicon-trash"></span>
              </Link>
            </small>
          </h3>
        </div>
        <div className="media-body">
          <dl>
            <dt>Phone Number:</dt>
            <dd>{tel}</dd>
            <dt>Email:</dt>
            <dd>{email}</dd>
          </dl>
        </div>
        <hr />
      </li>
    );
  }
});
