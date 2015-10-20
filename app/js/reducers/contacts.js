import * as ActionTypes from '../action-types';
import Contact from '../models/contact';
import _ from 'lodash';

let initialState = [
  {
    id: 1,
    name: 'Terrence S. Hatfield',
    tel: '651-603-1723',
    email: 'TerrenceSHatfield@rhyta.com'
  },
  {
    id: 2,
    name: 'Chris M. Manning',
    tel: '513-307-5859',
    email: 'ChrisMManning@dayrep.com'
  },
  {
    id: 3,
    name: 'Ricky M. Digiacomo',
    tel: '918-774-0199',
    email: 'RickyMDigiacomo@teleworm.us'
  },
  {
    id: 4,
    name: 'Michael K. Bayne',
    tel: '702-989-5145',
    email: 'MichaelKBayne@rhyta.com'
  },
  {
    id: 5,
    name: 'John I. Wilson',
    tel: '318-292-6700',
    email: 'JohnIWilson@dayrep.com'
  },
  {
    id: 6,
    name: 'Rodolfo P. Robinett',
    tel: '803-557-9815',
    email: 'RodolfoPRobinett@jourrapide.com'
  }
];

initialState = initialState.map(Contact.create);


export default function contacts(state = initialState, action) {
  switch(action.type) {
  case ActionTypes.UPDATE_CONTACT:
    let relevantProps = _.pick(action.props, ['name', 'tel', 'email']);
    return state.map(customer =>
      (customer.id === action.id) ?
        Object.assign({}, customer, relevantProps) : customer
    );
  case ActionTypes.CREATE_CONTACT:
    return [Contact.create({
      id: state.reduce((maxId, contact) => Math.max(contact.id, maxId), -1) + 1,
      name: action.props.name,
      email: action.props.email,
      tel: action.props.tel
    }), ...state];
  case ActionTypes.DELETE_CONTACT:
    return state.filter(contact => contact.id !== action.id);

  default:
    return state;
  }
}
