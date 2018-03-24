import { combineReducers } from 'redux';
import EngineerReducer from './engineer-reducer';

const reducers = {
  engineerStore: EngineerReducer,
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
