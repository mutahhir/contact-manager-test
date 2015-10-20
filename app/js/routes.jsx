import React from 'react';
import {Route, Redirect} from 'react-router';
import App from './containers/app.jsx';
import ContactsMain from './containers/contacts-main.jsx';
import ContactsNewEdit from './containers/contacts-new-edit.jsx';


export default (
    <Route component={App}>
      <Route path="/contacts" component={ContactsMain} />
      <Route path="/contacts/new" component={ContactsNewEdit} />
      <Route path="/contacts/edit/:id" component={ContactsNewEdit} />
      <Redirect from="/" to="/contacts"/>
    </Route>
);
