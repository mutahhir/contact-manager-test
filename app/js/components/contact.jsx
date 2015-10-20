import React from 'react';
import {Link} from 'react-router';


export default React.createClass({

  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  onDelete: function (ev) {
    ev.preventDefault();

    const {contact} = this.props;
    this.props.onDelete(contact.id);
  },

  render: function () {
    const {id, name, avatar, tel, email} = this.props.contact;
    return (
      <li className="media col-md-6 col-lg-4">
        <div className="thumbnail">
          <img className="media-object" src={`img/faces/${avatar}`} />
        </div>
        <div className="media-heading">
          <h3>
            {name}
            <small>
              <Link to={`/contacts/edit/${id}`}>
                <span className="glyphicon glyphicon-pencil"></span>
              </Link>
              <a className="delete-contract" onClick={this.onDelete}>
                <span className="glyphicon glyphicon-trash"></span>
              </a>
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
