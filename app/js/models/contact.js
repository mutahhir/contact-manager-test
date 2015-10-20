import Backbone from 'backbone';
import _ from 'lodash';

export default Backbone.Model.extend({
  defaults: {
    name: null,
    tel: null,
    email: null,
    avatar: null
  },

  initialize: function() {
    this.set('avatar', _.random(1, 15) + '.jpg');
  }
});
