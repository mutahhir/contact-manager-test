import React from 'react';
import {Link} from 'react-router';


const ContactsNewEdit = React.createClass({
  render () {
    const isNew = false;
    const name = '';
    const email = '';
    const tel = '';

    return (
      <div>
        <h2 className="page-header text-center">{isNew ? 'Create' : 'Edit'} Contact</h2>
        <form role="form" className="form-horizontal contract-form">
          <div className="form-group">
            <label className="col-sm-4 control-label">Full name:</label>
            <div className="col-sm-6">
              <input type="text" className="form-control contact-name-input" value={name} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-4 control-label">Email address:</label>
            <div className="col-sm-6">
              <input type="email" className="form-control contact-email-input" value={email} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-4 control-label">Telephone number:</label>
            <div className="col-sm-6">
              <input type="tel" className="form-control contact-tel-input" value={tel} />
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

export default ContactsNewEdit;
