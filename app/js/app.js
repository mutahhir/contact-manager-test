import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'lodash';

Backbone.$ = $;

import Router from './router';
import ContactsCollection from './collections/contacts';
import ContactsView from './views/contacts';
import ContactForm from './views/contactForm';
import ContactModel from './models/contact';



let ContactManager = {
  Models: {},
  Collections: {},
  Views: {},

  start: function(data) {
    var contacts = new ContactsCollection(data.contacts),
      router = new Router();

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
};

// Export for browser
window.ContactManager = ContactManager;
export default ContactManager;
