import _ from 'lodash';

const defaults = {
  name: '',
  tel: '',
  email: '',
  avatar: ''
};

let Contact = {
  create: function (props) {
    let self = Object.create({});
    self = Object.assign(self, defaults, props);

    self.avatar = _.random(1, 15) + '.jpg';

    return self;
  }
};

export default Contact;
