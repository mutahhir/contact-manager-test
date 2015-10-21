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
      <li className="col-md-6 col-lg-4">
        <div className="card">
          <div className="card-header">
            <div className="thumbnail">
              <img className="media-object" src={`img/faces/${avatar}`} />
            </div>
            <div className="actions">
              <Link to={`/contacts/edit/${id}`}>
                <span className="glyphicon glyphicon-pencil"></span>
              </Link>
              <a className="delete-contract" onClick={this.onDelete}>
                <span className="glyphicon glyphicon-trash"></span>
              </a>
            </div>
          </div>
          <div className="card-details">
            <div className="media-heading">
              <h3 className="limited-length" title={name}>{name}</h3>
            </div>
            <div className="media-body">
              <dl>
                <dt><span className="glyphicon glyphicon-earphone"></span></dt>
                <dd className="limited-length" title={`Phone: ${tel}`}>{tel}</dd>
                <dt><span className="glyphicon glyphicon-envelope"></span></dt>
                <dd className="limited-length" title={`Email: ${email}`}>{email}</dd>
              </dl>
            </div>
          </div>
         </div>
      </li>
    );
  }
});
