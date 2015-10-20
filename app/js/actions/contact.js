import * as ActionTypes from '../action-types';

export function updateContact (id, props) {
  return {
    type: ActionTypes.UPDATE_CONTACT,
    id: id,
    props: props
  };
}

export function createContact (props) {
  return {
    type: ActionTypes.CREATE_CONTACT,
    props: props
  };
}

export function deleteContact (id) {
  return {
    type: ActionTypes.DELETE_CONTACT,
    id: id
  };
}
