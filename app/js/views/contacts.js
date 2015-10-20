import Backbone from 'backbone';
import _ from 'lodash';

import ContactView from './contact';

export default Backbone.View.extend({
  template: _.template($('#tpl-contacts').html()),

  renderOne: function(contact) {
    var itemView = new ContactView({model: contact});
    this.$('.contacts-container').append(itemView.render().$el);
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);

    this.collection.each(this.renderOne, this);

    return this;
  }
});
