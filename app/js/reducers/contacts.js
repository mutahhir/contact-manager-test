
const initialState = [{
    id: 0,
    name: 'John Doe',
    tel: '555-555-5555',
    email: 'john@doe.com'
}];

export default function contacts(state = initialState, action) {
  switch(action.type) {
  default:
    return state;
  }
}
