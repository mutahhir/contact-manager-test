import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { updateContact, createContact } from '../actions/contact';

const ContactsNewEdit = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();

    const {contact, dispatch} = this.props;
    const {name, email, tel} = this.refs;
    let newValues = {
      name: name.value,
      email: email.value,
      tel: tel.value
    };

    if (!!contact && contact.id) {
      dispatch(updateContact(contact.id, newValues));
    } else {
      dispatch(createContact(newValues));
    }
    this.props.history.pushState(this.state, '/contacts');
  },

  render () {
    const {contact} = this.props;
    const isNew = !!contact;
    const {name, email, tel} = contact;

    return (
      <div>
        <h2 className="page-header text-center">{isNew ? 'Create' : 'Edit'} Contact</h2>
        <form role="form" className="form-horizontal contract-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="col-sm-4 control-label">Full name:</label>
            <div className="col-sm-6">
              <input type="text" className="form-control contact-name-input"
                ref="name" defaultValue={name} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-4 control-label">Email address:</label>
            <div className="col-sm-6">
              <input type="email" className="form-control contact-email-input"
                ref="email" defaultValue={email} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-4 control-label">Telephone number:</label>
            <div className="col-sm-6">
              <input type="tel" className="form-control contact-tel-input"
                ref="tel" defaultValue={tel} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-4 col-sm-3">
              <button type="submit" className="btn btn-outline btn-lg btn-block">Submit</button>
            </div>
            <div className="col-sm-3">
              <Link to="/contacts" className="btn btn-outline btn-lg btn-block">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

function mapStateToProps(state) {
  let {id} = state.router.params;
  id = parseInt(id, 10);
  let contact = state.contacts.filter(obj => obj.id === id);

  if (contact.length > 0) {
    contact = contact[0];
  }

  return {
      contact
  };
}



export default connect(
  mapStateToProps
)(ContactsNewEdit);
