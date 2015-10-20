import Backbone from 'backbone';
import ContactModel from '../models/contact';


export default Backbone.Collection.extend({
  model: ContactModel
});
