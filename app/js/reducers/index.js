import {combineReducers} from 'redux';
import { routerStateReducer as router } from 'redux-router';
import contacts from './contacts';


const RootReducer = combineReducers({
  contacts,
  router
});

export default RootReducer;
