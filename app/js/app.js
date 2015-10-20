import React from 'react';
import $ from 'jquery';
import { render } from 'react-dom';
import { Router, Route, Link, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from './store/configure-store';

import ContactsMain from './containers/contacts-main.jsx';
import ContactsNewEdit from './containers/contacts-new-edit.jsx';

const store = configureStore();

render((
  <Provider store={store}>
    <ReduxRouter />
  </Provider>
), $(".app")[0]);

/*
let ContactManager = {
  Models: {},
  Collections: {},
  Views: {},

  start: function() {
    var router = new Router();

    router.on('route:home', function() {
      router.navigate('contacts', {
        trigger: true,
        replace: true
      });
    });

    router.on('route:showContacts', function() {
      var contactsView = new ContactsView({
        collection: contacts
      });

      $('.main-container').html(contactsView.render().$el);
    });

    router.on('route:newContact', function() {
      var newContactForm = new ContactForm({
        model: new ContactModel()
      });

      newContactForm.on('form:submitted', function(attrs) {
        attrs.id = contacts.isEmpty() ? 1 : (_.max(contacts.pluck('id')) + 1);
        contacts.add(attrs);
        router.navigate('contacts', true);
      });

      $('.main-container').html(newContactForm.render().$el);
    });

    router.on('route:editContact', function(id) {
      var contact = contacts.get(id),
        editContactForm;

      if (contact) {
        editContactForm = new ContactManager.Views.ContactForm({
          model: contact
        });

        editContactForm.on('form:submitted', function(attrs) {
          contact.set(attrs);
          router.navigate('contacts', true);
        });

        $('.main-container').html(editContactForm.render().$el);
      } else {
        router.navigate('contacts', true);
      }
    });

    Backbone.history.start();
  }
};*/
