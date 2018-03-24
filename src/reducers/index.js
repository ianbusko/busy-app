import { combineReducers } from 'redux';
import EngineerReducer from './engineer-reducer';

const reducers = {
  contactStore: ContactReducer,
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
